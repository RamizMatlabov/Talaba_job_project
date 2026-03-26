"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Job, JobType, City } from "@/types/job";
import { FilterBar } from "./FilterBar";
import { JobCard } from "./JobCard";
import type { Locale } from "@/i18n/locales";
import { defaultLocale } from "@/i18n/locales";
import { t } from "@/i18n/strings";

interface JobsListingProps {
  locale?: Locale;
  jobs: Job[];
}

function normalize(s: string) {
  return s.toLowerCase().trim();
}

type SalaryBucket = "any" | "lt3m" | "3to5m" | "5to8m" | "gte8m";
type SortKey = "relevance" | "salary_desc" | "salary_asc" | "title_asc" | "company_asc";

function parseSalaryScore(salary: string): number | null {
  // Returns a rough monthly salary score in so‘m (number), or null if can't parse.
  // We intentionally keep this heuristic simple for demo data.
  const parts = salary.match(/\d[\d\s.,]*/g);
  if (!parts || parts.length === 0) return null;
  const nums = parts
    .map((p) => Number(p.replace(/[^\d]/g, "")))
    .filter((n) => Number.isFinite(n) && n > 0);
  if (nums.length === 0) return null;

  // Prefer larger numbers (monthly) over small ones (hourly).
  const monthlyLike = nums.filter((n) => n >= 500_000);
  const source = monthlyLike.length ? monthlyLike : nums;
  const max = Math.max(...source);
  const min = Math.min(...source);
  return Math.round((min + max) / 2);
}

function bucketMatches(score: number | null, bucket: SalaryBucket): boolean {
  if (bucket === "any") return true;
  if (!score) return false;
  if (bucket === "lt3m") return score < 3_000_000;
  if (bucket === "3to5m") return score >= 3_000_000 && score < 5_000_000;
  if (bucket === "5to8m") return score >= 5_000_000 && score < 8_000_000;
  return score >= 8_000_000;
}

function clampInt(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function JobsListing({ locale, jobs }: JobsListingProps) {
  const effectiveLocale = locale ?? defaultLocale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const qParam = searchParams?.get("q") ?? "";
  const typeParam = (searchParams?.get("type") ?? "all") as JobType | "all";
  const cityParam = (searchParams?.get("city") ?? "all") as City | "all";
  const remoteParam = (searchParams?.get("remote") ?? "") === "1";
  const salaryParam = (searchParams?.get("salary") ?? "any") as SalaryBucket;
  const sortParam = (searchParams?.get("sort") ?? "relevance") as SortKey;
  const pageParamRaw = Number(searchParams?.get("page") ?? "1");
  const pageParam = Number.isFinite(pageParamRaw) ? pageParamRaw : 1;

  const [search, setSearch] = useState(qParam);
  const deferredSearch = useDeferredValue(search);

  useEffect(() => {
    setSearch(qParam);
  }, [qParam]);

  function setParams(next: Record<string, string | null>) {
    const sp = new URLSearchParams(searchParams?.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v === null || v === "" || v === "all") sp.delete(k);
      else sp.set(k, v);
    });
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname);
  }

  const enriched = useMemo(() => {
    return jobs.map((job) => ({
      job,
      salaryScore: parseSalaryScore(job.salary),
    }));
  }, [jobs]);

  const filtered = useMemo(() => {
    const q = normalize(deferredSearch);
    return enriched.filter(({ job, salaryScore }) => {
      const matchesSearch =
        !q ||
        normalize(job.title).includes(q) ||
        normalize(job.company).includes(q) ||
        normalize(job.shortDescription).includes(q);

      const matchesType = typeParam === "all" || job.type === typeParam;
      const matchesCity = cityParam === "all" || job.location === cityParam;

      const isRemote =
        job.type === "Remote" || job.location === "Onlayn" || job.tags.includes("Remote");
      const matchesRemote = !remoteParam || isRemote;

      const matchesSalary = bucketMatches(salaryScore, salaryParam);

      return (
        matchesSearch &&
        matchesType &&
        matchesCity &&
        matchesRemote &&
        matchesSalary
      );
    });
  }, [enriched, deferredSearch, typeParam, cityParam, remoteParam, salaryParam]);

  const sorted = useMemo(() => {
    const q = normalize(deferredSearch);
    const list = [...filtered];

    const bySalary = (a: number | null, b: number | null) => {
      if (a == null && b == null) return 0;
      if (a == null) return 1;
      if (b == null) return -1;
      return a - b;
    };

    list.sort((A, B) => {
      const a = A.job;
      const b = B.job;

      if (sortParam === "title_asc") return a.title.localeCompare(b.title);
      if (sortParam === "company_asc") return a.company.localeCompare(b.company);
      if (sortParam === "salary_asc") return bySalary(A.salaryScore, B.salaryScore);
      if (sortParam === "salary_desc") return bySalary(B.salaryScore, A.salaryScore);

      // "relevance" (demo): if query exists, prefer title matches over company matches.
      if (q) {
        const aTitle = normalize(a.title).includes(q);
        const bTitle = normalize(b.title).includes(q);
        if (aTitle !== bTitle) return aTitle ? -1 : 1;
        const aCompany = normalize(a.company).includes(q);
        const bCompany = normalize(b.company).includes(q);
        if (aCompany !== bCompany) return aCompany ? -1 : 1;
      }
      return 0;
    });

    return list;
  }, [filtered, deferredSearch, sortParam]);

  const perPage = 9;
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const page = clampInt(pageParam, 1, totalPages);
  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  return (
    <div className="space-y-8">
      <FilterBar
        locale={effectiveLocale}
        search={search}
        onSearchChange={(v) => {
          setSearch(v);
          setParams({ q: v || null, page: "1" });
        }}
        jobType={typeParam}
        onJobTypeChange={(v) => setParams({ type: v === "all" ? null : v, page: "1" })}
        city={cityParam}
        onCityChange={(v) => setParams({ city: v === "all" ? null : v, page: "1" })}
        remoteOnly={remoteParam}
        onRemoteOnlyChange={(v) => setParams({ remote: v ? "1" : null, page: "1" })}
        salary={salaryParam}
        onSalaryChange={(v) => setParams({ salary: v === "any" ? null : v, page: "1" })}
        sort={sortParam}
        onSortChange={(v) => setParams({ sort: v === "relevance" ? null : v, page: "1" })}
        onClear={() =>
          setParams({
            q: null,
            type: null,
            city: null,
            remote: null,
            salary: null,
            sort: null,
            page: null,
          })
        }
      />

      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white px-5 py-4 text-sm shadow-card ring-1 ring-slate-900/[0.03] sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="font-medium text-slate-700">
          {t(effectiveLocale, "jobsListing.results")}{" "}
          <span className="font-semibold tabular-nums text-slate-900">
            {total}
          </span>
        </div>
        <div className="text-slate-500">
          {t(effectiveLocale, "jobsListing.page")}{" "}
          <span className="font-semibold tabular-nums text-slate-900">
            {page}
          </span>{" "}
          {t(effectiveLocale, "jobsListing.of")}{" "}
          <span className="font-semibold tabular-nums text-slate-900">
            {totalPages}
          </span>
        </div>
      </div>

      {pageItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300/80 bg-white px-6 py-20 text-center shadow-sm">
          <p className="text-lg font-bold tracking-tight text-slate-900">
            {t(effectiveLocale, "jobsListing.noResults.title")}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
            {t(
              effectiveLocale,
              "jobsListing.noResults.description",
            )}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map(({ job }) => (
            <JobCard key={job.id} job={job} locale={effectiveLocale} />
          ))}
        </div>
      )}

      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setParams({ page: String(page - 1) })}
            disabled={page <= 1}
            className="btn-secondary-sm disabled:opacity-50"
          >
            {t(effectiveLocale, "pagination.prev")}
          </button>
          <div className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold tabular-nums text-slate-800 shadow-sm">
            {page} / {totalPages}
          </div>
          <button
            type="button"
            onClick={() => setParams({ page: String(page + 1) })}
            disabled={page >= totalPages}
            className="btn-secondary-sm disabled:opacity-50"
          >
            {t(effectiveLocale, "pagination.next")}
          </button>
        </div>
      ) : null}
    </div>
  );
}

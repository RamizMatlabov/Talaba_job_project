"use client";

import { useDeferredValue, useMemo, useState } from "react";
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

export function JobsListing({ locale, jobs }: JobsListingProps) {
  const effectiveLocale = locale ?? defaultLocale;
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState<JobType | "all">("all");
  const [city, setCity] = useState<City | "all">("all");
  const deferredSearch = useDeferredValue(search);

  const filtered = useMemo(() => {
    const q = normalize(deferredSearch);
    return jobs.filter((job) => {
      const matchesSearch =
        !q ||
        normalize(job.title).includes(q) ||
        normalize(job.company).includes(q) ||
        normalize(job.shortDescription).includes(q);
      const matchesType = jobType === "all" || job.type === jobType;
      const matchesCity = city === "all" || job.location === city;
      return matchesSearch && matchesType && matchesCity;
    });
  }, [jobs, deferredSearch, jobType, city]);

  return (
    <div className="space-y-8">
      <FilterBar
        locale={effectiveLocale}
        search={search}
        onSearchChange={setSearch}
        jobType={jobType}
        onJobTypeChange={setJobType}
        city={city}
        onCityChange={setCity}
      />

      {filtered.length === 0 ? (
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
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} locale={effectiveLocale} />
          ))}
        </div>
      )}
    </div>
  );
}

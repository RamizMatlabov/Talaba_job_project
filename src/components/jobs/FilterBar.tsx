"use client";

import type { JobType, City } from "@/types/job";
import type { Locale } from "@/i18n/locales";
import { defaultLocale } from "@/i18n/locales";
import { t } from "@/i18n/strings";

type OptionKeyed<T extends string> = { value: T | "all"; labelKey: string };

const JOB_TYPE_OPTIONS: OptionKeyed<JobType>[] = [
  { value: "all", labelKey: "filters.jobType.all" },
  { value: "Part-time", labelKey: "filters.jobType.Part-time" },
  { value: "Internship", labelKey: "filters.jobType.Internship" },
  { value: "Remote", labelKey: "filters.jobType.Remote" },
  { value: "Full-time", labelKey: "filters.jobType.Full-time" },
];

const CITY_OPTIONS: OptionKeyed<City>[] = [
  { value: "all", labelKey: "filters.city.all" },
  { value: "Toshkent", labelKey: "filters.city.Toshkent" },
  { value: "Samarqand", labelKey: "filters.city.Samarqand" },
  { value: "Buxoro", labelKey: "filters.city.Buxoro" },
  { value: "Farg‘ona", labelKey: "filters.city.Farg‘ona" },
  { value: "Onlayn", labelKey: "filters.city.Onlayn" },
];

type SalaryBucket = "any" | "lt3m" | "3to5m" | "5to8m" | "gte8m";
type SortKey = "relevance" | "salary_desc" | "salary_asc" | "title_asc" | "company_asc";

interface FilterBarProps {
  locale?: Locale;
  search: string;
  onSearchChange: (v: string) => void;
  jobType: JobType | "all";
  onJobTypeChange: (v: JobType | "all") => void;
  city: City | "all";
  onCityChange: (v: City | "all") => void;
  remoteOnly: boolean;
  onRemoteOnlyChange: (v: boolean) => void;
  salary: SalaryBucket;
  onSalaryChange: (v: SalaryBucket) => void;
  sort: SortKey;
  onSortChange: (v: SortKey) => void;
  onClear: () => void;
}

export function FilterBar({
  locale,
  search,
  onSearchChange,
  jobType,
  onJobTypeChange,
  city,
  onCityChange,
  remoteOnly,
  onRemoteOnlyChange,
  salary,
  onSalaryChange,
  sort,
  onSortChange,
  onClear,
}: FilterBarProps) {
  const effectiveLocale = locale ?? defaultLocale;
  return (
    <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-white p-5 shadow-card ring-1 ring-slate-900/[0.03] sm:p-7">
      <div>
        <label htmlFor="job-search" className="sr-only">
          {t(effectiveLocale, "filters.search.sr")}
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            id="job-search"
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t(effectiveLocale, "filters.search.placeholder")}
            className="w-full rounded-xl border border-slate-200/90 bg-slate-50/60 py-3.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="filter-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t(effectiveLocale, "filters.jobType.label")}
          </label>
          <select
            id="filter-type"
            value={jobType}
            onChange={(e) => onJobTypeChange(e.target.value as JobType | "all")}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            {JOB_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {t(effectiveLocale, o.labelKey)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filter-city" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t(effectiveLocale, "filters.city.label")}
          </label>
          <select
            id="filter-city"
            value={city}
            onChange={(e) => onCityChange(e.target.value as City | "all")}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            {CITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {t(effectiveLocale, o.labelKey)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter-salary" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t(effectiveLocale, "filters.salary.label")}
          </label>
          <select
            id="filter-salary"
            value={salary}
            onChange={(e) => onSalaryChange(e.target.value as SalaryBucket)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="any">{t(effectiveLocale, "filters.salary.any")}</option>
            <option value="lt3m">{t(effectiveLocale, "filters.salary.lt3m")}</option>
            <option value="3to5m">{t(effectiveLocale, "filters.salary.3to5m")}</option>
            <option value="5to8m">{t(effectiveLocale, "filters.salary.5to8m")}</option>
            <option value="gte8m">{t(effectiveLocale, "filters.salary.gte8m")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter-sort" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t(effectiveLocale, "filters.sort.label")}
          </label>
          <select
            id="filter-sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortKey)}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option value="relevance">{t(effectiveLocale, "filters.sort.relevance")}</option>
            <option value="salary_desc">{t(effectiveLocale, "filters.sort.salary_desc")}</option>
            <option value="salary_asc">{t(effectiveLocale, "filters.sort.salary_asc")}</option>
            <option value="title_asc">{t(effectiveLocale, "filters.sort.title_asc")}</option>
            <option value="company_asc">{t(effectiveLocale, "filters.sort.company_asc")}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="inline-flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-200/70 bg-slate-50/40 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-900/[0.02] transition hover:bg-slate-50">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/30"
            checked={remoteOnly}
            onChange={(e) => onRemoteOnlyChange(e.target.checked)}
          />
          {t(effectiveLocale, "filters.remoteOnly")}
        </label>

        <button type="button" onClick={onClear} className="btn-secondary-sm">
          {t(effectiveLocale, "filters.clear")}
        </button>
      </div>
    </div>
  );
}

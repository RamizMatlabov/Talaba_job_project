"use client";

import type { JobType, City } from "@/types/job";

export const JOB_TYPE_OPTIONS: { value: JobType | "all"; label: string }[] = [
  { value: "all", label: "Barchasi" },
  { value: "Part-time", label: "Part-time" },
  { value: "Internship", label: "Staj" },
  { value: "Remote", label: "Remote" },
  { value: "Full-time", label: "To‘liq stavka" },
];

export const CITY_OPTIONS: { value: City | "all"; label: string }[] = [
  { value: "all", label: "Barcha shaharlar" },
  { value: "Toshkent", label: "Toshkent" },
  { value: "Samarqand", label: "Samarqand" },
  { value: "Buxoro", label: "Buxoro" },
  { value: "Farg‘ona", label: "Farg‘ona" },
  { value: "Onlayn", label: "Onlayn" },
];

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  jobType: JobType | "all";
  onJobTypeChange: (v: JobType | "all") => void;
  city: City | "all";
  onCityChange: (v: City | "all") => void;
}

export function FilterBar({
  search,
  onSearchChange,
  jobType,
  onJobTypeChange,
  city,
  onCityChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6">
      <div>
        <label htmlFor="job-search" className="sr-only">
          Qidiruv
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
            placeholder="Lavozim yoki kompaniya bo‘yicha qidiring"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="filter-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Ish turi
          </label>
          <select
            id="filter-type"
            value={jobType}
            onChange={(e) => onJobTypeChange(e.target.value as JobType | "all")}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            {JOB_TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="filter-city" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
            Hudud
          </label>
          <select
            id="filter-city"
            value={city}
            onChange={(e) => onCityChange(e.target.value as City | "all")}
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            {CITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

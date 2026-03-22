"use client";

import { useDeferredValue, useMemo, useState } from "react";
import type { Job, JobType, City } from "@/types/job";
import { FilterBar } from "./FilterBar";
import { JobCard } from "./JobCard";

interface JobsListingProps {
  jobs: Job[];
}

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export function JobsListing({ jobs }: JobsListingProps) {
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
        search={search}
        onSearchChange={setSearch}
        jobType={jobType}
        onJobTypeChange={setJobType}
        city={city}
        onCityChange={setCity}
      />

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-16 text-center">
          <p className="text-lg font-semibold text-slate-900">Hech narsa topilmadi</p>
          <p className="mt-2 text-sm text-slate-600">
            Filtrlarni o‘zgartiring yoki boshqa kalit so‘z bilan qidirib ko‘ring.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

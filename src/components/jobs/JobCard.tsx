import Link from "next/link";
import type { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

function companyInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function JobCard({ job }: JobCardProps) {
  const initials = companyInitials(job.company);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60 hover:shadow-card-hover">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-teal-500/0 opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/80 text-sm font-bold text-slate-700 ring-1 ring-slate-200/80 transition group-hover:from-emerald-50 group-hover:to-emerald-100/80 group-hover:text-emerald-900 group-hover:ring-emerald-200/50"
            aria-hidden
          >
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">{job.company}</p>
              </div>
              <span className="shrink-0 rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                {job.type}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {job.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-emerald-50/90 px-2.5 py-1 text-xs font-medium text-emerald-900 ring-1 ring-emerald-100/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-slate-100 pt-5 text-sm">
          <span className="font-semibold text-slate-900">{job.salary}</span>
          <span className="text-slate-300" aria-hidden>
            ·
          </span>
          <span className="text-slate-600">{job.location}</span>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <Link
            href={`/apply?jobId=${job.id}`}
            className="btn-primary-sm flex-1 py-3 sm:py-2.5"
          >
            Ariza berish
          </Link>
          <Link
            href={`/jobs/${job.id}`}
            className="btn-secondary-sm flex-1 py-3 sm:py-2.5"
          >
            Batafsil
          </Link>
        </div>
      </div>
    </article>
  );
}

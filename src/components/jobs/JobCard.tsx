import Link from "next/link";
import type { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-100/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-600">{job.company}</p>
        </div>
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
          {job.type}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
        {job.shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-slate-100 pt-4 text-sm text-slate-600">
        <span className="font-medium text-slate-900">{job.salary}</span>
        <span className="text-slate-400">·</span>
        <span>{job.location}</span>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          href={`/apply?jobId=${job.id}`}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
        >
          Ariza berish
        </Link>
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:text-emerald-800"
        >
          Batafsil
        </Link>
      </div>
    </article>
  );
}

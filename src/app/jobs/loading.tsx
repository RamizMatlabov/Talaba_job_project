import { JobCardSkeleton } from "@/components/jobs/JobCardSkeleton";

export default function JobsLoading() {
  return (
    <div className="bg-slate-50/50">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
          <div className="mt-4 h-10 max-w-md animate-pulse rounded-lg bg-slate-200" />
          <div className="mt-3 h-4 max-w-xl animate-pulse rounded bg-slate-100" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 h-40 animate-pulse rounded-2xl bg-white shadow-sm" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

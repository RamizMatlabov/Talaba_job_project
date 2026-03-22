export function JobCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex justify-between gap-3">
        <div className="flex-1 space-y-2">
          <div className="h-5 w-3/4 rounded bg-slate-200" />
          <div className="h-4 w-1/2 rounded bg-slate-100" />
        </div>
        <div className="h-6 w-16 rounded-full bg-slate-100" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-5/6 rounded bg-slate-100" />
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-slate-100" />
        <div className="h-6 w-20 rounded-full bg-slate-100" />
      </div>
      <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
        <div className="h-4 w-28 rounded bg-slate-100" />
        <div className="h-4 w-20 rounded bg-slate-100" />
      </div>
      <div className="mt-5 h-10 w-full rounded-full bg-slate-100" />
    </div>
  );
}

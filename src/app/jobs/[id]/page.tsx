import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJobById, jobs } from "@/data/jobs";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return { title: "Topilmadi" };
  return {
    title: job.title,
    description: job.shortDescription,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner mx-auto max-w-3xl">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-800 transition hover:text-emerald-950"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ishlar ro‘yxatiga qaytish
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {job.company}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {job.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2.5 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 font-medium text-slate-800">
              {job.location}
            </span>
            <span className="rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 font-medium text-emerald-900">
              {job.type}
            </span>
            <span className="rounded-full bg-slate-900/[0.06] px-3 py-1 font-semibold tabular-nums text-slate-900 ring-1 ring-slate-200/80">
              {job.salary}
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-emerald-100/90 bg-emerald-50/90 px-2.5 py-1 text-xs font-medium text-emerald-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-card ring-1 ring-slate-900/[0.03] sm:p-9">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">Tavsif</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{job.description}</p>

          <h2 className="mt-10 text-lg font-bold tracking-tight text-slate-900">Vazifalar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-bold tracking-tight text-slate-900">Talablar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-bold tracking-tight text-slate-900">Afzalliklar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <Link href={`/apply?jobId=${job.id}`} className="btn-primary py-3.5 text-center sm:py-3">
              Hozir ariza berish
            </Link>
            <Link href="/jobs" className="btn-secondary py-3.5 text-center sm:py-3">
              Boshqa ishlar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

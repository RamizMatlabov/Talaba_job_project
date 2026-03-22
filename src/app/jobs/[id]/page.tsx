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
    <div className="bg-slate-50/50">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 transition hover:text-emerald-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ishlar ro‘yxatiga qaytish
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-600">
            {job.company}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {job.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-800">
              {job.location}
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-800">
              {job.type}
            </span>
            <span className="font-semibold text-slate-900">{job.salary}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-100 bg-emerald-50/80 px-2.5 py-0.5 text-xs font-medium text-emerald-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Tavsif</h2>
          <p className="mt-3 leading-relaxed text-slate-600">{job.description}</p>

          <h2 className="mt-10 text-lg font-semibold text-slate-900">Vazifalar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-slate-900">Talablar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-10 text-lg font-semibold text-slate-900">Afzalliklar</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-600">
            {job.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <Link
              href={`/apply?jobId=${job.id}`}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700"
            >
              Hozir ariza berish
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-200 hover:text-emerald-800"
            >
              Boshqa ishlar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

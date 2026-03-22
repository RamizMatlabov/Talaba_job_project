import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/apply/ApplyForm";
import { getJobById } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Ariza",
  description: "TalabaJob — tez va oson ariza formasi.",
};

type Props = {
  searchParams: Promise<{ jobId?: string }>;
};

export default async function ApplyPage({ searchParams }: Props) {
  const params = await searchParams;
  const job = params.jobId ? getJobById(params.jobId) : undefined;

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner mx-auto max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            TalabaJob
          </p>
          <h1 className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {job ? "Ushbu vakansiyaga ariza" : "Ro‘yxatdan o‘tish / Ariza"}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            Maydonlarni to‘ldiring — jamoamiz siz bilan bog‘lanadi.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-card ring-1 ring-slate-900/[0.03] sm:p-9">
          <ApplyForm job={job ?? null} />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Savollar bormi?{" "}
          <Link href="/about" className="font-medium text-emerald-700 hover:underline">
            Biz haqimizda
          </Link>
        </p>
      </div>
    </div>
  );
}

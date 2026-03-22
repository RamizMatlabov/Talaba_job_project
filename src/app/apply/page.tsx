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
    <div className="bg-slate-50/50">
      <div className="mx-auto max-w-lg px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            TalabaJob
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            {job ? "Ushbu vakansiyaga ariza" : "Ro‘yxatdan o‘tish / Ariza"}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Maydonlarni to‘ldiring — jamoamiz siz bilan bog‘lanadi.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
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

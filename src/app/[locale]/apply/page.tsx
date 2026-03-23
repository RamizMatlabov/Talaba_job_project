import type { Metadata } from "next";
import Link from "next/link";

import { ApplyForm } from "@/components/apply/ApplyForm";
import { getJobById } from "@/data/jobs";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import { t } from "@/i18n/strings";
import { localeHref } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ jobId?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  return {
    title: t(locale, "metadata.apply.title"),
    description: t(locale, "metadata.apply.description"),
  };
}

export default async function ApplyPage({ params, searchParams }: Props) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  const paramsResolved = await searchParams;
  const job = paramsResolved.jobId ? getJobById(paramsResolved.jobId, locale) : undefined;

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner mx-auto max-w-lg text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            TalabaJob
          </p>
          <h1 className="mt-4 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {job
              ? t(locale, "apply.title.forJob")
              : t(locale, "apply.title.default")}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            {t(locale, "apply.subtitle")}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-card ring-1 ring-slate-900/[0.03] sm:p-9">
          <ApplyForm job={job ?? null} locale={locale} />
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          {t(locale, "apply.questions")}{" "}
          <Link
            href={localeHref(locale, "/about")}
            className="font-medium text-emerald-700 hover:underline"
          >
            {t(locale, "apply.questions.aboutLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import { t } from "@/i18n/strings";
import { localeHref } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  return {
    title: t(locale, "metadata.employers.title"),
    description: t(locale, "metadata.employers.description"),
  };
}

export default async function EmployersPage({ params }: Props) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;

  const benefits = [
    {
      title: t(locale, "employers.benefit.1.title"),
      description: t(locale, "employers.benefit.1.description"),
    },
    {
      title: t(locale, "employers.benefit.2.title"),
      description: t(locale, "employers.benefit.2.description"),
    },
    {
      title: t(locale, "employers.benefit.3.title"),
      description: t(locale, "employers.benefit.3.description"),
    },
  ];

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner">
          <SectionHeader
            eyebrow={t(locale, "section.employers.eyebrow")}
            title={t(locale, "section.employers.heroTitle")}
            description={t(locale, "section.employers.heroDescription")}
          />
        </div>
      </div>

      <div className="page-inner py-12 sm:py-14 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200/50 hover:shadow-card-hover"
            >
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                {b.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 p-10 text-center shadow-soft ring-1 ring-emerald-900/[0.04] sm:p-12">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800/80">
              {t(locale, "section.employers.eyebrow")}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {t(locale, "employers.cta.title")}
            </h2>
            <p className="mx-auto mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t(locale, "employers.cta.description")}
            </p>
            <Link
              href={localeHref(locale, "/apply")}
              className="btn-primary mt-8 inline-flex px-8"
            >
              {t(locale, "employers.cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


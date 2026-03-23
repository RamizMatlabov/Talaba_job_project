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
    title: t(locale, "metadata.about.title"),
    description: t(locale, "metadata.about.description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner mx-auto max-w-3xl text-center">
          <SectionHeader
            align="center"
            eyebrow={t(locale, "about.eyebrow")}
            title={t(locale, "about.title")}
            description={t(locale, "about.description")}
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-10 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-card ring-1 ring-slate-900/[0.03] sm:p-10">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              {t(locale, "about.story.title")}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t(locale, "about.story.body")}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              {t(locale, "about.mission.title")}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t(locale, "about.mission.body")}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              {t(locale, "about.vision.title")}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {t(locale, "about.vision.body")}
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/60 px-5 py-4 text-sm leading-relaxed text-emerald-950 ring-1 ring-emerald-100/80">
            <strong className="font-semibold">{t(locale, "about.demoMode.label")}</strong>{" "}
            {t(locale, "about.demoMode.body")}
          </div>
          <div className="text-center pt-2">
            <Link href={localeHref(locale, "/jobs")} className="btn-primary inline-flex">
              {t(locale, "about.cta.button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


import type { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { JobsListing } from "@/components/jobs/JobsListing";
import { getJobs } from "@/data/jobs";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import { t } from "@/i18n/strings";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  return {
    title: t(locale, "metadata.jobs.title"),
    description: t(locale, "metadata.jobs.description"),
  };
}

export default async function JobsPage({ params }: Props) {
  const resolved = await params;
  const locale: Locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;
  const jobList = getJobs(locale);

  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner">
          <SectionHeader
            eyebrow={t(locale, "section.jobs.eyebrow")}
            title={t(locale, "section.jobs.title")}
            description={t(locale, "section.jobs.description")}
          />
        </div>
      </div>
      <div className="page-inner py-10 sm:py-12 lg:py-14">
        <JobsListing jobs={jobList} locale={locale} />
      </div>
    </div>
  );
}


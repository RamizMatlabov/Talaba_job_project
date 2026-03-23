import Link from "next/link";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import { t } from "@/i18n/strings";
import { localeHref } from "@/i18n/routing";

type Props = {
  params?: Promise<{ locale: string; id: string }> | { locale: string; id: string };
};

export default async function JobNotFound({ params }: Props) {
  const resolved = params
    ? await params
    : { locale: defaultLocale, id: "" };

  const localeRaw = resolved.locale;
  const locale: Locale = isLocale(localeRaw) ? localeRaw : defaultLocale;

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-slate-900">
        {t(locale, "jobNotFound.title")}
      </h1>
      <p className="mt-2 text-slate-600">{t(locale, "jobNotFound.description")}</p>
      <Link
        href={localeHref(locale, "/jobs")}
        className="btn-primary mt-8"
      >
        {t(locale, "jobNotFound.backToJobs")}
      </Link>
    </div>
  );
}


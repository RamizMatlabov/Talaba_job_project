import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { t, cityLabel, jobTypeLabel } from "@/i18n/strings";
import { localeHref } from "@/i18n/routing";
import { getJobById } from "@/data/jobs";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const smm = getJobById("smm-assistant-tashkent", locale);
  const frontend = getJobById("frontend-intern-remote", locale);
  const callCenter = getJobById("call-center-tashkent", locale);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_-20%,rgba(16,185,129,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(148,163,184,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-emerald-400/[0.07] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm shadow-emerald-900/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t(locale, "home.hero.pill")}
          </p>
          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-display-sm xl:text-display">
            {t(locale, "home.hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {t(locale, "home.hero.description")}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={localeHref(locale, "/jobs")}
              className="btn-primary w-full sm:w-auto"
            >
              {t(locale, "nav.cta.jobs")}
            </Link>
            <Link
              href={localeHref(locale, "/apply")}
              className="btn-secondary w-full sm:w-auto"
            >
              {t(locale, "nav.cta.apply")}
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 shadow-sm sm:max-w-lg sm:gap-4 sm:p-6">
            <div className="border-r border-slate-200/80 pr-3 sm:pr-4">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {t(locale, "home.hero.stats.students")}
              </dt>
              <dd className="mt-1.5 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                12k+
              </dd>
            </div>
            <div className="border-r border-slate-200/80 px-2 text-center sm:px-4">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {t(locale, "home.hero.stats.jobs")}
              </dt>
              <dd className="mt-1.5 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                480+
              </dd>
            </div>
            <div className="pl-3 text-right sm:pl-4 sm:text-left">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
                {t(locale, "home.hero.stats.partners")}
              </dt>
              <dd className="mt-1.5 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                90+
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="relative isolate w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-slate-200/60 bg-gradient-to-br from-white via-slate-50/80 to-emerald-50/40 p-6 shadow-card ring-1 ring-slate-900/[0.04] sm:min-h-[28rem] sm:p-8">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-400/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-slate-300/20 blur-2xl" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    {t(locale, "home.hero.opportunities")}
                  </p>
                  <p className="mt-2 text-lg font-bold leading-snug tracking-tight text-slate-900 sm:text-xl">
                    {smm?.title ?? "SMM"}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-slate-700">
                    {smm?.company} · {smm ? cityLabel(locale, smm.location) : ""}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-900">
                  {smm ? jobTypeLabel(locale, smm.type) : ""}
                </span>
              </div>

              <div className="space-y-2.5 rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3 rounded-xl bg-emerald-50/60 p-2.5 ring-1 ring-emerald-100/80">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xs font-bold text-white shadow-md shadow-emerald-600/25">
                    FE
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug text-slate-900">
                      {frontend?.title ?? "Frontend"}
                    </p>
                    <p className="text-xs text-slate-600">
                      {frontend ? cityLabel(locale, frontend.location) : ""} ·{" "}
                      {frontend ? jobTypeLabel(locale, frontend.type) : ""}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800 ring-1 ring-emerald-200/80">
                    {t(locale, "home.hero.tag.new")}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl p-2.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-xs font-bold text-slate-800">
                    CC
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-slate-900">
                      {callCenter?.title ?? "Call Center"}
                    </p>
                    <p className="text-xs text-slate-600">
                      {t(locale, "home.hero.tag.shiftPrefix")} ·{" "}
                      {t(locale, "tags.Flexible")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-emerald-300/70 bg-gradient-to-r from-emerald-50/90 to-white/70 px-4 py-4 sm:px-5">
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-snug text-emerald-950 sm:text-sm">
                    {t(locale, "home.hero.bottom.oneClick")}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-emerald-900/80">
                    {t(locale, "home.hero.bottom.response")}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600 shadow-glow">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

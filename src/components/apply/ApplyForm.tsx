"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Job } from "@/types/job";
import type { Locale } from "@/i18n/locales";
import { defaultLocale } from "@/i18n/locales";
import { t } from "@/i18n/strings";
import { localeHref } from "@/i18n/routing";

interface ApplyFormProps {
  job?: Job | null;
  locale?: Locale;
}

export function ApplyForm({ job, locale }: ApplyFormProps) {
  const router = useRouter();
  const effectiveLocale = locale ?? defaultLocale;
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 600);
  }

  const fieldClass =
    "mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200/70 bg-gradient-to-b from-emerald-50/90 to-white p-10 text-center shadow-card ring-1 ring-emerald-900/[0.04]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-bold text-slate-900">
          {t(effectiveLocale, "apply.thanks.title")}
        </h2>
        <p className="mt-2 text-slate-700">
          {t(effectiveLocale, "apply.thanks.body")}
        </p>
        <button
          type="button"
          onClick={() => router.push(localeHref(effectiveLocale, "/jobs"))}
          className="btn-primary mt-8"
        >
          {t(effectiveLocale, "apply.thanks.backToJobs")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {job ? (
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm">
          <p className="font-semibold text-slate-900">{job.title}</p>
          <p className="text-slate-600">
            {job.company} · {t(effectiveLocale, `filters.city.${job.location}`)}
          </p>
        </div>
      ) : null}

      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.fullName")}
        </label>
        <input
          id="fullName"
          name="fullName"
          required
          autoComplete="name"
          placeholder={t(effectiveLocale, "apply.form.placeholder.fullName")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.phone")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder={t(effectiveLocale, "apply.form.placeholder.phone")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="telegram" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.telegram")}
        </label>
        <input
          id="telegram"
          name="telegram"
          placeholder={t(effectiveLocale, "apply.form.placeholder.telegram")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="university" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.university")}
        </label>
        <input
          id="university"
          name="university"
          required
          placeholder={t(effectiveLocale, "apply.form.placeholder.university")}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t(effectiveLocale, "apply.form.placeholder.message")}
          className={`${fieldClass} resize-y min-h-[100px]`}
        />
      </div>

      <div>
        <label htmlFor="cv" className="text-sm font-medium text-slate-700">
          {t(effectiveLocale, "apply.form.cv")}
        </label>
        <div className="mt-1 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-4 py-8 text-center transition hover:border-emerald-300">
          <div>
            <input id="cv" name="cv" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
            <label htmlFor="cv" className="cursor-pointer text-sm text-slate-600">
              <span className="font-semibold text-emerald-700">
                {t(effectiveLocale, "apply.form.cv.filePicker")}
              </span>{" "}
              {t(effectiveLocale, "apply.form.cv.dropHint")}
            </label>
            <p className="mt-1 text-xs text-slate-500">
              {t(effectiveLocale, "apply.form.cv.helper")}
            </p>
          </div>
        </div>
      </div>

      <button type="submit" disabled={pending} className="btn-primary w-full py-3.5">
        {pending
          ? t(effectiveLocale, "apply.form.submitting")
          : t(effectiveLocale, "apply.form.submit")}
      </button>
    </form>
  );
}

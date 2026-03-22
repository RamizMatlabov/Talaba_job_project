"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Job } from "@/types/job";

interface ApplyFormProps {
  job?: Job | null;
}

export function ApplyForm({ job }: ApplyFormProps) {
  const router = useRouter();
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
        <h2 className="mt-4 text-xl font-bold text-slate-900">Rahmat!</h2>
        <p className="mt-2 text-slate-700">
          Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.
        </p>
        <button
          type="button"
          onClick={() => router.push("/jobs")}
          className="btn-primary mt-8"
        >
          Ishlar ro‘yxatiga qaytish
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
            {job.company} · {job.location}
          </p>
        </div>
      ) : null}

      <div>
        <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
          To‘liq ism familiya
        </label>
        <input
          id="fullName"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Masalan: Aziza Karimova"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Telefon raqami
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+998 __ ___ __ __"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="telegram" className="text-sm font-medium text-slate-700">
          Telegram username
        </label>
        <input
          id="telegram"
          name="telegram"
          placeholder="@username"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="university" className="text-sm font-medium text-slate-700">
          Oliy ta’lim muassasasi
        </label>
        <input
          id="university"
          name="university"
          required
          placeholder="Masalan: Toshkent davlat iqtisodiyot universiteti"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Qisqa xabar
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="O‘zingiz va qiziqishingiz haqida qisqacha yozing"
          className={`${fieldClass} resize-y min-h-[100px]`}
        />
      </div>

      <div>
        <label htmlFor="cv" className="text-sm font-medium text-slate-700">
          CV (demo)
        </label>
        <div className="mt-1 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-4 py-8 text-center transition hover:border-emerald-300">
          <div>
            <input id="cv" name="cv" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
            <label htmlFor="cv" className="cursor-pointer text-sm text-slate-600">
              <span className="font-semibold text-emerald-700">Fayl tanlang</span> yoki bu yerga torting
            </label>
            <p className="mt-1 text-xs text-slate-500">PDF yoki Word — max. 5 MB (demo rejim)</p>
          </div>
        </div>
      </div>

      <button type="submit" disabled={pending} className="btn-primary w-full py-3.5">
        {pending ? "Yuborilmoqda…" : "Yuborish"}
      </button>
    </form>
  );
}

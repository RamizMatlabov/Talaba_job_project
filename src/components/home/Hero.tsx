import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/80 via-white to-white" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Talabalar uchun ish platformasi
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Talabalar uchun ish topish platformasi
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Part-time ishlar, stajirovkalar va junior imkoniyatlar bir joyda —
            moslashuvchan grafik, tekshirilgan ish beruvchilar va bir marta bosish
            bilan ariza.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Ishlarni ko‘rish
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:text-emerald-800"
            >
              Ro‘yxatdan o‘tish
            </Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 sm:max-w-md">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Talabalar
              </dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">12k+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Vakansiyalar
              </dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">480+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Hamkorlar
              </dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900">90+</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-emerald-50/50 p-6 shadow-xl shadow-slate-200/60">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-slate-200/40 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Bugungi imkoniyatlar
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    SMM yordamchisi
                  </p>
                  <p className="text-sm text-slate-600">Digital Grow Agency · Toshkent</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Part-time
                </span>
              </div>

              <div className="mt-6 space-y-3 rounded-2xl bg-white/80 p-4 shadow-inner ring-1 ring-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-xs font-bold text-white">
                    FE
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Frontend stajyor
                    </p>
                    <p className="text-xs text-slate-500">Onlayn · Remote</p>
                  </div>
                  <span className="ml-auto text-xs font-medium text-emerald-700">
                    Yangi
                  </span>
                </div>
                <div className="flex items-center gap-3 opacity-90">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-xs font-bold text-slate-700">
                    CC
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Call-markaz
                    </p>
                    <p className="text-xs text-slate-500">Smena · Flexible</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-emerald-200/80 bg-emerald-50/50 px-4 py-3">
                <div>
                  <p className="text-xs font-medium text-emerald-900">
                    Bir marta bosish — ariza yuborildi
                  </p>
                  <p className="text-xs text-emerald-800/80">
                    Tez javob, shaffof jarayon
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-600/90 shadow-md shadow-emerald-600/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

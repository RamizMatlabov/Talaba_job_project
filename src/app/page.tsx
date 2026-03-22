import Link from "next/link";
import { FeatureCard } from "@/components/features/FeatureCard";
import { Hero } from "@/components/home/Hero";
import { JobCard } from "@/components/jobs/JobCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedJobs } from "@/data/jobs";

const features = [
  {
    title: "Talabaga mos ishlar",
    description:
      "Dars jadvaliga mos smenalar, qisman bandlik va stajlar — barchasi bir joyda filtrlangan.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Bir marta bosish — ariza",
    description:
      "Profilni bir marta to‘ldirib, sevimli vakansiyalarga tez ariza yuborishingiz mumkin.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Stajrovlari va junior rollar",
    description:
      "Karyera boshlanishi uchun real loyihalar, mentorlik va portfolio uchun imkoniyatlar.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16 3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Tekshirilgan ish beruvchilar",
    description:
      "Hamkorlarimizni tekshiramiz va talabalar uchun xavfsiz, shaffof jarayonni qo‘llab-quvvatlaymiz.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Ishlarni qidiring",
    text: "Lavozim, shahar va ish turini tanlang — natijalar soniyalar ichida.",
  },
  {
    step: "02",
    title: "Oson ariza",
    text: "Qisqa forma va CV yuklash — ortiqcha bosqichlarsiz.",
  },
  {
    step: "03",
    title: "Aloqa va suhbat",
    text: "Ish beruvchi tez orada siz bilan bog‘lanadi va keyingi qadamni belgilaydi.",
  },
];

const sectionY = "py-20 sm:py-24 lg:py-28";

export default function HomePage() {
  const featured = getFeaturedJobs(3);

  return (
    <>
      <Hero />

      <section className={`border-y border-slate-200/60 bg-white ${sectionY}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeader
              eyebrow="Muammo"
              title="Talabalar uchun mos ish topish hali ham murakkab"
              description="Dars, loyihalar va shaxsiy vaqt o‘rtasida muvozanat saqlash oson emas. Ko‘p e’lonlar to‘liq stavka yoki tajriba talab qiladi, smenalar esa dars jadvaliga mos kelmaydi."
            />
            <div className="relative rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/80 p-8 shadow-soft ring-1 ring-slate-900/[0.04] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                TalabaJob yondashuvi
              </p>
              <p className="mt-4 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Moslashuvchan grafik, aniq e’lonlar va karyera boshlanishi uchun stajlar
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                  Part-time va stajlar uchun alohida filtr
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                  Onlayn va gibrid imkoniyatlar
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                  Ish beruvchilar bilan shaffof aloqa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-slate-50/80 ${sectionY}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Imkoniyatlar"
            title="Nima uchun TalabaJob?"
            description="Talabalar va yangi mutaxassislar uchun platforma — sodda, tez va ishonchli."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className={`bg-white ${sectionY}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Jarayon"
            title="Qanday ishlaydi?"
            description="Uchta oddiy qadam — keyin esa sizning karyerangiz boshlanishi."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-3xl border border-slate-200/70 bg-slate-50/40 p-8 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200/50 hover:bg-white hover:shadow-card md:p-9"
              >
                <span className="inline-flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center rounded-2xl bg-white text-sm font-bold tabular-nums text-emerald-700 ring-1 ring-emerald-100 shadow-sm">
                  {s.step}
                </span>
                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`border-t border-slate-200/60 bg-gradient-to-b from-slate-50/50 to-white ${sectionY}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <SectionHeader
              eyebrow="Tanlangan"
              title="Mashhur vakansiyalar"
              description="Hozirgi haftada talabalar uchun eng ko‘p ko‘rilgan ishlar."
            />
            <Link href="/jobs" className="btn-secondary-sm shrink-0 self-start sm:self-auto">
              Barcha ishlar
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-3">
            {featured.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-4 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="bg-grid-subtle pointer-events-none absolute inset-0 opacity-90" />
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-400/25 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/90">
                Boshlash
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
                Karyerangizni bugun boshlang
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-emerald-50/95 sm:text-lg">
                Minglab talaba kabi siz ham mos ish va staj toping — bir daqiqada ro‘yxatdan o‘ting.
              </p>
              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link href="/jobs" className="btn-on-dark w-full sm:w-auto">
                  Ishlarni ko‘rish
                </Link>
                <Link href="/apply" className="btn-on-dark-ghost w-full sm:w-auto">
                  Ro‘yxatdan o‘tish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

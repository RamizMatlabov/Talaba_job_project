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

export default function HomePage() {
  const featured = getFeaturedJobs(3);

  return (
    <>
      <Hero />

      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeader
              eyebrow="Muammo"
              title="Talabalar uchun mos ish topish hali ham murakkab"
              description="Dars, loyihalar va shaxsiy vaqt o‘rtasida muvozanat saqlash oson emas. Ko‘p e’lonlar to‘liq stavka yoki tajriba talab qiladi, smenalar esa dars jadvaliga mos kelmaydi."
            />
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                TalabaJob yondashuvi
              </p>
              <p className="mt-3 text-lg font-medium text-slate-900">
                Moslashuvchan grafik, aniq e’lonlar va karyera boshlanishi uchun stajlar
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Part-time va stajlar uchun alohida filtr
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Onlayn va gibrid imkoniyatlar
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Ish beruvchilar bilan shaffof aloqa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Imkoniyatlar"
            title="Nima uchun TalabaJob?"
            description="Talabalar va yangi mutaxassislar uchun platforma — sodda, tez va ishonchli."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            align="center"
            eyebrow="Jarayon"
            title="Qanday ishlaydi?"
            description="Uchta oddiy qadam — keyin esa sizning karyerangiz boshlanishi."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-3xl font-bold text-emerald-100">{s.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Tanlangan"
              title="Mashhur vakansiyalar"
              description="Hozirgi haftada talabalar uchun eng ko‘p ko‘rilgan ishlar."
            />
            <Link
              href="/jobs"
              className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:text-emerald-800"
            >
              Barcha ishlar
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 px-6 py-12 text-center shadow-xl shadow-emerald-900/20 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-emerald-400/20 blur-2xl" />
            <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Karyerangizni bugun boshlang
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-emerald-50">
              Minglab talaba kabi siz ham mos ish va staj toping — bir daqiqada ro‘yxatdan o‘ting.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/jobs"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5"
              >
                Ishlarni ko‘rish
              </Link>
              <Link
                href="/apply"
                className="inline-flex rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ro‘yxatdan o‘tish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

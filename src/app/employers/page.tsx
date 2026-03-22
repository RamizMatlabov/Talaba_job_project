import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Ish beruvchilar uchun",
  description:
    "Yosh talentlarga chiqing — TalabaJob orqali tezroq yollash va talabalarga mos vakansiyalar.",
};

const benefits = [
  {
    title: "Yosh talentga chiqish",
    description:
      "Motivatsiyali talabalar va yangi mutaxassislar — startap va o‘rta biznes uchun ideal.",
  },
  {
    title: "Tezroq yollash",
    description:
      "Aniq filtrlar va tayyor profillar — suhbatga vaqt tejalmaydi.",
  },
  {
    title: "Talabaga fokusli auditoriya",
    description:
      "E’lonlaringiz part-time va staj qidirayotgan talabalarga to‘g‘ri boradi.",
  },
];

export default function EmployersPage() {
  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner">
          <SectionHeader
            eyebrow="Hamkorlik"
            title="Nima uchun TalabaJob?"
            description="Talabalar va yosh mutaxassislar bilan bog‘lanishni soddalashtiramiz — siz esa jamoani tezroq to‘ldirasiz."
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
              <h2 className="text-lg font-bold tracking-tight text-slate-900">{b.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 p-10 text-center shadow-soft ring-1 ring-emerald-900/[0.04] sm:p-12">
          <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative mx-auto max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800/80">
              Hamkorlik
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Vakansiyangizni joylashtiring
            </h2>
            <p className="mx-auto mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Demo uchun tugmani bosing — keyingi bosqichda siz bilan bog‘lanamiz va e’lonni birgalikda yaratamiz.
            </p>
            <Link href="/apply" className="btn-primary mt-8 inline-flex px-8">
              Vakansiya joylash
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

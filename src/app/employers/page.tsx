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
    <div className="bg-slate-50/50">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="Hamkorlik"
            title="Nima uchun TalabaJob?"
            description="Talabalar va yosh mutaxassislar bilan bog‘lanishni soddalashtiramiz — siz esa jamoani tezroq to‘ldirasiz."
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Vakansiyangizni joylashtiring
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
            Demo uchun tugmani bosing — keyingi bosqichda siz bilan bog‘lanamiz va e’lonni birgalikda yaratamiz.
          </p>
          <Link
            href="/apply"
            className="mt-6 inline-flex rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Vakansiya joylash
          </Link>
        </div>
      </div>
    </div>
  );
}

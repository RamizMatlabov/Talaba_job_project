import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Biz haqimizda",
  description:
    "TalabaJob — O‘zbekistonda talabalar va ish imkoniyatlari o‘rtasidagi ko‘prik.",
};

export default function AboutPage() {
  return (
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner mx-auto max-w-3xl text-center">
          <SectionHeader
            align="center"
            eyebrow="Startup haqida"
            title="TalabaJob — ertaga ishlaydigan platforma"
            description="Biz inkubator dasturida boshlangan jamoamiz — maqsadimiz talabalarga mos, shaffof va zamonaviy ish topish tajribasini yaratish."
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-10 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-card ring-1 ring-slate-900/[0.03] sm:p-10">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Bizning hikoyamiz</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              TalabaJob g‘oyasi oddiy kuzatuvdan tug‘ilgan: darslar va ish o‘rtasida muvozanat qidirayotgan
              ko‘plab talabalar uchun mos vakansiyalar hali ham tarqilgan va noaniq. Biz bu bo‘shliqni
              yopish — bir joyda qidiruv, filtrlash va ishonchli ish beruvchilar bilan bog‘lanish uchun
              platforma yaratmoqdamiz.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Missiya</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              O‘zbekiston talabalariga moslashuvchan ish, staj va boshlang‘ich karyera imkoniyatlarini
              oson va tushunarli qilib yetkazish.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Vizyon</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Mamlakat bo‘ylab yoshlar va ish beruvchilar o‘rtasidagi eng ishonchli va zamonaviy
              bog‘lanish platformasiga aylanish.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/60 px-5 py-4 text-sm leading-relaxed text-emerald-950 ring-1 ring-emerald-100/80">
            <strong className="font-semibold">Demo rejim:</strong> TalabaJob hozircha MVP — ma’lumotlar
            namuna, backend integratsiyasi keyingi bosqichda.
          </div>
          <div className="text-center pt-2">
            <Link href="/jobs" className="btn-primary inline-flex">
              Ishlarni ko‘rish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="bg-slate-50/50">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            align="center"
            eyebrow="Startup haqida"
            title="TalabaJob — ertaga ishlaydigan platforma"
            description="Biz inkubator dasturida boshlangan jamoamiz — maqsadimiz talabalarga mos, shaffof va zamonaviy ish topish tajribasini yaratish."
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Bizning hikoyamiz</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              TalabaJob g‘oyasi oddiy kuzatuvdan tug‘ilgan: darslar va ish o‘rtasida muvozanat qidirayotgan
              ko‘plab talabalar uchun mos vakansiyalar hali ham tarqilgan va noaniq. Biz bu bo‘shliqni
              yopish — bir joyda qidiruv, filtrlash va ishonchli ish beruvchilar bilan bog‘lanish uchun
              platforma yaratmoqdamiz.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Missiya</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              O‘zbekiston talabalariga moslashuvchan ish, staj va boshlang‘ich karyera imkoniyatlarini
              oson va tushunarli qilib yetkazish.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Vizyon</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Mamlakat bo‘ylab yoshlar va ish beruvchilar o‘rtasidagi eng ishonchli va zamonaviy
              bog‘lanish platformasiga aylanish.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 px-4 py-4 text-sm text-emerald-900">
            <strong>Demo rejim:</strong> TalabaJob hozircha MVP — ma’lumotlar namuna, backend
            integratsiyasi keyingi bosqichda.
          </div>
          <div className="text-center">
            <Link
              href="/jobs"
              className="inline-flex rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700"
            >
              Ishlarni ko‘rish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

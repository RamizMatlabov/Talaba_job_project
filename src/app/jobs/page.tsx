import type { Metadata } from "next";
import { JobsListing } from "@/components/jobs/JobsListing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Ishlar ro‘yxati",
  description:
    "Part-time, staj, remote va to‘liq stavka bo‘yicha vakansiyalar — Toshkent, Samarqand, Buxoro, Farg‘ona va onlayn.",
};

export default function JobsPage() {
  return (
    <div className="bg-slate-50/50">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeader
            eyebrow="Vakansiyalar"
            title="Talabalar uchun ish va stajlar"
            description="Filtrlardan foydalaning — lavozim, ish turi va shahar bo‘yicha qidiring. Barcha e’lonlar demo ma’lumot."
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <JobsListing jobs={jobs} />
      </div>
    </div>
  );
}

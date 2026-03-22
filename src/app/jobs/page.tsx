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
    <div className="min-h-[50vh]">
      <div className="page-hero">
        <div className="page-hero-inner">
          <SectionHeader
            eyebrow="Vakansiyalar"
            title="Talabalar uchun ish va stajlar"
            description="Filtrlardan foydalaning — lavozim, ish turi va shahar bo‘yicha qidiring. Barcha e’lonlar demo ma’lumot."
          />
        </div>
      </div>
      <div className="page-inner py-10 sm:py-12 lg:py-14">
        <JobsListing jobs={jobs} />
      </div>
    </div>
  );
}

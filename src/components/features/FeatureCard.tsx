import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:shadow-card-hover">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100/80 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-500/30 group-hover:shadow-md group-hover:shadow-emerald-600/20">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

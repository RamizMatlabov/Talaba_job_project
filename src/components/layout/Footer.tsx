import Link from "next/link";

const footerLinks = [
  { href: "/jobs", label: "Ishlar" },
  { href: "/employers", label: "Ish beruvchilar" },
  { href: "/about", label: "Biz haqimizda" },
  { href: "/apply", label: "Ariza" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white">
                TJ
              </span>
              TalabaJob
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-600">
              O‘zbekiston talabalari uchun qisman bandlik, staj va boshlang‘ich
              karyera imkoniyatlari.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Tezkor havolalar</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition hover:text-emerald-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Aloqa</p>
            <p className="mt-3 text-sm text-slate-600">ramizmatlabov923@gmail.com</p>
            <p className="text-sm text-slate-600">+998 33 433 44 04</p>
            <p className="mt-1 text-sm text-slate-500">Samarqand, O‘zbekiston</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TalabaJob. Barcha huquqlar himoyalangan.</p>
          <p className="text-slate-400">Demo MVP — inkubator taqdimoti uchun</p>
        </div>
      </div>
    </footer>
  );
}

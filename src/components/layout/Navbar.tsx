"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Bosh sahifa" },
  { href: "/jobs", label: "Ishlar" },
  { href: "/employers", label: "Ish beruvchilar" },
  { href: "/about", label: "Biz haqimizda" },
];

function linkClass(active: boolean) {
  return `rounded-full px-3 py-2 text-sm font-medium transition-colors ${
    active
      ? "bg-emerald-50 text-emerald-800"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
  }`;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-sm shadow-emerald-600/25">
            TJ
          </span>
          TalabaJob
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href),
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/jobs"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-200 hover:text-emerald-800"
          >
            Ishlarni ko‘rish
          </Link>
          <Link
            href="/apply"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-700"
          >
            Ro‘yxatdan o‘tish
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-expanded={open}
          aria-label="Menyu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={linkClass(
                  l.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(l.href),
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Ishlarni ko‘rish
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

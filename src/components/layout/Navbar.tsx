"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/locales";
import { defaultLocale, supportedLocales } from "@/i18n/locales";
import { localeHref } from "@/i18n/routing";
import { t } from "@/i18n/strings";

type NavItem = { href: string; labelKey: string };

const navItems: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/jobs", labelKey: "nav.jobs" },
  { href: "/employers", labelKey: "nav.employers" },
  { href: "/about", labelKey: "nav.about" },
];

function linkClass(active: boolean) {
  return `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
    active
      ? "bg-emerald-600/10 text-emerald-900 ring-1 ring-emerald-600/15"
      : "text-slate-600 hover:bg-slate-100/90 hover:text-slate-900"
  }`;
}

export function Navbar({ locale }: { locale?: Locale }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const effectiveLocale = locale ?? defaultLocale;
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const isHomeActive =
    pathname === `/${effectiveLocale}` || pathname === `/${effectiveLocale}/`;

  const currentPathWithQuery = (() => {
    const q = searchParams?.toString();
    return q ? `${pathname}?${q}` : pathname;
  })();

  const localeLabel: Record<Locale, string> = {
    uz: "UZ",
    en: "EN",
    ru: "RU",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href={localeHref(effectiveLocale, "/")}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-bold text-white shadow-md shadow-emerald-600/30 ring-1 ring-white/20">
            TJ
          </span>
          <span className="hidden sm:inline">TalabaJob</span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Asosiy">
          {navItems.map((l) => {
            const localizedHref = localeHref(effectiveLocale, l.href);
            const isActive = l.href === "/"
              ? isHomeActive
              : pathname.startsWith(localizedHref);

            return (
            <Link
              key={l.href}
              href={localizedHref}
              className={linkClass(
                isActive,
              )}
            >
              {t(effectiveLocale, l.labelKey)}
            </Link>
          );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Link href={localeHref(effectiveLocale, "/jobs")} className="btn-secondary-sm">
            {t(effectiveLocale, "nav.cta.jobs")}
          </Link>
          <Link href={localeHref(effectiveLocale, "/apply")} className="btn-primary-sm">
            {t(effectiveLocale, "nav.cta.apply")}
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              className="inline-flex items-center rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              {localeLabel[effectiveLocale]}
              <svg
                className="ml-2 h-4 w-4 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={langOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>

            {langOpen ? (
              <div className="absolute right-0 z-50 mt-2 w-28 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg">
                <div className="px-1 py-1">
                  {supportedLocales.map((l) => {
                    const href = localeHref(l, currentPathWithQuery);
                    const active = l === effectiveLocale;
                    return (
                      <Link
                        key={l}
                        href={href}
                        onClick={() => setLangOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-center text-sm font-medium transition ${
                          active
                            ? "bg-emerald-600/10 text-emerald-900"
                            : "text-slate-700 hover:bg-slate-100/90 hover:text-slate-900"
                        }`}
                      >
                        {localeLabel[l]}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white p-2.5 text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-expanded={open}
          aria-label={t(effectiveLocale, "nav.openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white/95 px-4 py-5 shadow-lg shadow-slate-900/5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((l) => {
              const localizedHref = localeHref(effectiveLocale, l.href);
              const isActive = l.href === "/"
                ? isHomeActive
                : pathname.startsWith(localizedHref);

              return (
              <Link
                key={l.href}
                href={localizedHref}
                onClick={() => setOpen(false)}
                className={linkClass(
                  isActive,
                )}
              >
                {t(effectiveLocale, l.labelKey)}
              </Link>
              );
            })}

            <div className="mt-4 rounded-2xl border border-slate-100 bg-white px-3 py-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t(effectiveLocale, "nav.language")}
              </div>
              <div className="mt-2 flex gap-2">
                {supportedLocales.map((l) => {
                  const href = localeHref(l, currentPathWithQuery);
                  const active = l === effectiveLocale;
                  return (
                    <Link
                      key={l}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex-1 rounded-xl px-3 py-2 text-center text-sm font-medium ${
                        active
                          ? "bg-emerald-600/10 text-emerald-900 ring-1 ring-emerald-600/15"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100/90"
                      }`}
                    >
                      {localeLabel[l]}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Link
                href={localeHref(effectiveLocale, "/jobs")}
                onClick={() => setOpen(false)}
                className="btn-secondary w-full py-3"
              >
                {t(effectiveLocale, "nav.cta.jobs")}
              </Link>
              <Link
                href={localeHref(effectiveLocale, "/apply")}
                onClick={() => setOpen(false)}
                className="btn-primary w-full py-3"
              >
                {t(effectiveLocale, "nav.cta.apply")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

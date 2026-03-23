import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { defaultLocale } from "@/i18n/locales";
import { localeHref } from "@/i18n/routing";
import { t } from "@/i18n/strings";

const footerLinks = [
  { href: "/jobs", labelKey: "nav.jobs" },
  { href: "/employers", labelKey: "nav.employers" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/apply", labelKey: "footer.link.apply" },
];

export function Footer({ locale }: { locale?: Locale }) {
  const effectiveLocale = locale ?? defaultLocale;

  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-sm font-bold text-white shadow-md shadow-emerald-600/25">
                TJ
              </span>
              TalabaJob
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {t(effectiveLocale, "footer.tagline")}
            </p>
            <p className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {t(effectiveLocale, "footer.badge")}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t(effectiveLocale, "footer.quickLinks")}
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={localeHref(effectiveLocale, l.href)}
                    className="text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-emerald-800 hover:underline"
                  >
                    {t(effectiveLocale, l.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t(effectiveLocale, "footer.contact")}
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>
                <a
                  href="mailto:ramizmatlabov923@gmail.com"
                  className="font-medium text-slate-800 underline-offset-2 hover:text-emerald-800 hover:underline"
                >
                  ramizmatlabov923@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+998334334404"
                  className="hover:text-emerald-800"
                >
                  +998 33 433 44 04
                </a>
              </p>
              <p className="text-slate-500">{t(effectiveLocale, "footer.location")}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TalabaJob. {t(effectiveLocale, "footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

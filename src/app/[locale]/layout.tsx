import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "../globals.css";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TalabaJob — talabalar uchun ish va staj platformasi",
    template: "%s | TalabaJob",
  },
  description:
    "O‘zbekiston talabalari uchun part-time ishlar, stajirovkalar va junior imkoniyatlar. Bir joyda qidiring, tez ariza qiling.",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolved = await params;
  const locale = isLocale(resolved.locale) ? resolved.locale : defaultLocale;

  return (
    <html lang={locale} className={plusJakarta.variable}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}


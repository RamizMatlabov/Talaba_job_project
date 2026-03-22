import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={plusJakarta.variable}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

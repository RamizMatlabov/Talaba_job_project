import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, supportedLocales } from "@/i18n/locales";

function pickLocaleFromAcceptLanguage(acceptLanguage: string | null) {
  const value = (acceptLanguage ?? "").toLowerCase();
  for (const locale of supportedLocales) {
    if (value.includes(locale)) return locale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals and file routes.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const firstSegment = segments[1];

  // Already localized: "/uz/..." | "/en/..." | "/ru/..."
  if (supportedLocales.includes(firstSegment as any)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const locale = pickLocaleFromAcceptLanguage(acceptLanguage);

  const url = request.nextUrl.clone();
  // "/" -> "/uz"
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};


import type { Locale } from "./locales";
import { supportedLocales } from "./locales";

export function localePath(locale: Locale, pathname: string) {
  // Normalize to "/..." (or "" for root)
  let normalized =
    pathname === "/" ? "" : pathname.startsWith("/") ? pathname : `/${pathname}`;

  // If pathname is already localized ("/uz/...", "/en", etc), replace the prefix.
  if (normalized) {
    const parts = normalized.split("/").filter(Boolean); // ["uz", "jobs", ...]
    const maybeLocale = parts[0];
    if (maybeLocale && supportedLocales.includes(maybeLocale as any)) {
      const rest = parts.slice(1).join("/");
      normalized = rest ? `/${rest}` : "";
    }
  }

  return `/${locale}${normalized}`;
}

export function localeHref(locale: Locale, href: string) {
  // Supports both "/path" and full href like "/apply?jobId=..."
  const [pathnamePart, queryPart] = href.split("?");
  const localized = localePath(locale, pathnamePart);
  return queryPart ? `${localized}?${queryPart}` : localized;
}


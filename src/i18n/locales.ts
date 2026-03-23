export const supportedLocales = ["uz", "en", "ru"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "uz";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (supportedLocales as readonly string[]).includes(value);
}


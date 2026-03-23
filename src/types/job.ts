import type { Locale } from "@/i18n/locales";

export type JobType = "Part-time" | "Internship" | "Remote" | "Full-time";

export type City =
  | "Toshkent"
  | "Samarqand"
  | "Buxoro"
  | "Farg‘ona"
  | "Onlayn";

export interface JobI18nFields {
  title: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary: string;
}

// Locale-agnostic job keys + localized texts.
export interface JobBase {
  id: string;
  company: string;
  location: City;
  type: JobType;
  tags: string[];
  i18n: Record<Locale, JobI18nFields>;
}

// Localized job shape used by UI.
export interface Job {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: City;
  type: JobType;
  tags: string[];
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

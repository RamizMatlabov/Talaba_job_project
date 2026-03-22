export type JobType = "Part-time" | "Internship" | "Remote" | "Full-time";

export type City =
  | "Toshkent"
  | "Samarqand"
  | "Buxoro"
  | "Farg‘ona"
  | "Onlayn";

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

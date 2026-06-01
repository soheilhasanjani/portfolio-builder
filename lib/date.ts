import dayjs from "dayjs";
import type { Locale } from "dayjs/locale/en";
import faLocale from "dayjs/locale/fa";
import enLocale from "dayjs/locale/en";

const localeMap: Record<string, Locale> = { fa: faLocale, en: enLocale };

export function formatMonthYear(date: string, locale: string): string {
  return dayjs(date).locale(localeMap[locale] ?? enLocale).format("MMM YYYY");
}

export function formatDuration(start: string, end: string, locale: string): string {
  const startDate = dayjs(start);
  const endDate = end === "present" ? dayjs() : dayjs(end);
  const totalMonths = endDate.diff(startDate, "month");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (locale === "fa") {
    const parts: string[] = [];
    if (years > 0) parts.push(`${years} سال`);
    if (months > 0) parts.push(`${months} ماه`);
    return parts.join(" و ") || "کمتر از یک ماه";
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

import "server-only";
import type { Portfolio } from "../data/types";

const data: Record<string, () => Promise<Portfolio>> = {
  fa: () => import("../data/fa").then((m) => m.default),
  en: () => import("../data/en").then((m) => m.default),
};

export type Locale = keyof typeof data;

export const hasLocale = (locale: string): locale is Locale =>
  locale in data;

export const getData = async (locale: Locale): Promise<Portfolio> =>
  data[locale]();

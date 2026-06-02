import type { Experience, Education } from "../app/data/types";

function toSortKey(date: string): string {
  return date === "present" ? "9999-99" : date;
}

export function sortExperienceByTime(experience: Experience[]): Experience[] {
  return [...experience]
    .sort((a, b) =>
      toSortKey(b.period?.start ?? "").localeCompare(toSortKey(a.period?.start ?? "")),
    )
    .map((exp) => ({
      ...exp,
      children: exp.children
        ? [...exp.children].sort((a, b) =>
            toSortKey(b.period?.start ?? "").localeCompare(toSortKey(a.period?.start ?? "")),
          )
        : exp.children,
    }));
}

export function sortEducationByTime(education: Education[]): Education[] {
  return [...education].sort((a, b) =>
    toSortKey(b.period.start).localeCompare(toSortKey(a.period.start)),
  );
}

import type { Experience } from "../data/types";
import { SkillBadge } from "./SkillBadge";

type ExperienceChild = Omit<Experience, "children">;
type TFunc = (key: string) => string;

interface Props {
  exp: Experience;
  badgeSm: string;
  formatPeriod: (d: string) => string;
  formatDuration: (start: string, end: string) => string;
  tEmp: TFunc;
  tLoc: TFunc;
}

function sortByDate<T extends { period: { start: string } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const key = (d: string) => (d === "present" ? "9999-99" : d);
    return key(b.period.start).localeCompare(key(a.period.start));
  });
}

function ChildEntry({
  child,
  badgeSm,
  formatPeriod,
  formatDuration,
  tEmp,
  tLoc,
}: {
  child: ExperienceChild;
  badgeSm: string;
  formatPeriod: (d: string) => string;
  formatDuration: (start: string, end: string) => string;
  tEmp: TFunc;
  tLoc: TFunc;
}) {
  const locationParts = [
    child.location && `${child.location.city}, ${child.location.country}`,
    child.location_type && tLoc(child.location_type),
  ].filter(Boolean).join(" · ");

  return (
    <div className="ps-4 border-s-2 border-gray-200 dark:border-gray-700 space-y-2">
      <div className="space-y-0.5">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">{child.title}</h4>
        {(child.role || child.employment_type) && (
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {[child.role, child.employment_type && tEmp(child.employment_type)].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {formatPeriod(child.period.start)} – {formatPeriod(child.period.end)}
          {" · "}
          {formatDuration(child.period.start, child.period.end)}
        </p>
        {locationParts && (
          <p className="text-xs text-gray-500 dark:text-gray-400">{locationParts}</p>
        )}
      </div>

      {child.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">{child.description}</p>
      )}

      {child.responsibilities && child.responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {child.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}

      {child.skills && child.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {child.skills.map((code) => (
            <SkillBadge
              key={code}
              code={code}
              badgeClassName={badgeSm}
              iconSize={12}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceNode({ exp, badgeSm, formatPeriod, formatDuration, tEmp, tLoc }: Props) {
  const sortedChildren = exp.children ? sortByDate(exp.children) : [];

  const locationParts = [
    exp.location && `${exp.location.city}, ${exp.location.country}`,
    exp.location_type && tLoc(exp.location_type),
  ].filter(Boolean).join(" · ");

  return (
    <div className="space-y-4">
      <div className="space-y-0.5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h3>
        {(exp.role || exp.employment_type) && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {[exp.role, exp.employment_type && tEmp(exp.employment_type)].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {formatPeriod(exp.period.start)} – {formatPeriod(exp.period.end)}
          {" · "}
          {formatDuration(exp.period.start, exp.period.end)}
        </p>
        {locationParts && (
          <p className="text-sm text-gray-500 dark:text-gray-400">{locationParts}</p>
        )}
      </div>

      {exp.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">{exp.description}</p>
      )}

      {exp.responsibilities && exp.responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
          {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}

      {exp.skills && exp.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((code) => (
            <SkillBadge
              key={code}
              code={code}
              badgeClassName={badgeSm}
              iconSize={12}
            />
          ))}
        </div>
      )}

      {sortedChildren.length > 0 && (
        <div className="space-y-4">
          {sortedChildren.map((child) => (
            <ChildEntry
              key={child.title + child.period.start}
              child={child}
              badgeSm={badgeSm}
              formatPeriod={formatPeriod}
              formatDuration={formatDuration}
              tEmp={tEmp}
              tLoc={tLoc}
            />
          ))}
        </div>
      )}
    </div>
  );
}

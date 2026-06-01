import type { Experience } from "../data/types";
import { StackBadge } from "./stack-badge";
import User from "@geist-ui/icons/user";
import Clock from "@geist-ui/icons/clock";
import MapPin from "@geist-ui/icons/mapPin";

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

function sortByDate<T extends { period?: { start: string } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const key = (d: string) => (d === "present" ? "9999-99" : d);
    const aStart = a.period?.start ?? "";
    const bStart = b.period?.start ?? "";
    return key(bStart).localeCompare(key(aStart));
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
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="ps-4 border-s-2 border-[#ebebeb] dark:border-[#333333] space-y-2">
      <div className="flex flex-col gap-0.5">
        <h4 className="font-medium text-[#171717] dark:text-white">
          {child.title}
        </h4>
        {(child.role || child.employment_type) && (
          <p className="mono inline-flex items-center gap-1 text-xs uppercase text-[#888888]">
            <User size={11} />
            {child.role && (
              <span className="text-orange-500 dark:text-orange-400">
                {child.role}
              </span>
            )}
            {child.role && child.employment_type && <span>·</span>}
            {child.employment_type && (
              <span>{tEmp(child.employment_type)}</span>
            )}
          </p>
        )}
        {child.period && (
          <p className="mono inline-flex items-center gap-1 text-xs uppercase text-[#888888]">
            <Clock size={11} />
            {formatPeriod(child.period.start)} –{" "}
            {formatPeriod(child.period.end)}
            {" · "}
            {formatDuration(child.period.start, child.period.end)}
          </p>
        )}
        {locationParts && (
          <p className="mono inline-flex items-center gap-1 text-xs uppercase text-[#888888]">
            <MapPin size={11} />
            {locationParts}
          </p>
        )}
      </div>

      {child.description && (
        <p className="text-sm text-[#4d4d4d] dark:text-[#a1a1a1] leading-7">
          {child.description}
        </p>
      )}

      {child.responsibilities && child.responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          {child.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {child.stacks && child.stacks.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {child.stacks.map((code) => (
            <StackBadge
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

export function ExperienceNode({
  exp,
  badgeSm,
  formatPeriod,
  formatDuration,
  tEmp,
  tLoc,
}: Props) {
  const sortedChildren = exp.children ? sortByDate(exp.children) : [];

  const locationParts = [
    exp.location && `${exp.location.city}, ${exp.location.country}`,
    exp.location_type && tLoc(exp.location_type),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-xl font-semibold text-[#171717] dark:text-white">
          {exp.title}
        </h3>
        {(exp.role || exp.employment_type) && (
          <p className="mono inline-flex items-center gap-1.5 text-xs uppercase text-[#888888]">
            <User size={11} />
            {exp.role && (
              <span className="text-orange-500 dark:text-orange-400">
                {exp.role}
              </span>
            )}
            {exp.role && exp.employment_type && <span>·</span>}
            {exp.employment_type && <span>{tEmp(exp.employment_type)}</span>}
          </p>
        )}
        {exp.period && (
          <p className="mono inline-flex items-center gap-1.5 text-xs uppercase text-[#888888]">
            <Clock size={11} />
            {formatPeriod(exp.period.start)} – {formatPeriod(exp.period.end)}
            {" · "}
            {formatDuration(exp.period.start, exp.period.end)}
          </p>
        )}
        {locationParts && (
          <p className="mono inline-flex items-center gap-1.5 text-xs uppercase text-[#888888]">
            <MapPin size={11} />
            {locationParts}
          </p>
        )}
      </div>

      {exp.description && (
        <p className="text-base text-[#4d4d4d] dark:text-[#ededed] leading-[1.7]">
          {exp.description}
        </p>
      )}

      {exp.responsibilities && exp.responsibilities.length > 0 && (
        <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
          {exp.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}

      {exp.stacks && exp.stacks.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {exp.stacks.map((code) => (
            <StackBadge
              key={code}
              code={code}
              badgeClassName={badgeSm}
              iconSize={18}
            />
          ))}
        </div>
      )}

      {sortedChildren.length > 0 && (
        <div className="space-y-8">
          {sortedChildren.map((child) => (
            <ChildEntry
              key={child.title}
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

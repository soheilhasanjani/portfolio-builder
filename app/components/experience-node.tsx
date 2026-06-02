import Image from "next/image";
import type { Experience } from "../data/types";
import { ExperienceType } from "../data/types";
import { getStack, sortedStackCodes } from "../../lib/stacks";
import { cn } from "../../lib/utils";
import { Badge } from "./ui/badge";
import { EmploymentBadge, LocationBadge } from "./ui/experience-badges";
import { Avatar, AvatarGroup } from "./ui/avatar";
import Clock from "@geist-ui/icons/clock";
import MapPin from "@geist-ui/icons/mapPin";
import Briefcase from "@geist-ui/icons/briefcase";
import Box from "@geist-ui/icons/box";
import CheckInCircle from "@geist-ui/icons/check";
import ArrowRight from "@geist-ui/icons/arrowRight";

type TFunc = (key: string) => string;

interface Props {
  exp: Experience;
  isLast?: boolean;
  formatPeriod: (d: string) => string;
  formatDuration: (start: string, end: string) => string;
  tEmp: TFunc;
  tLoc: TFunc;
}

function NodeIconBox({ type }: { type: ExperienceType }) {
  const isProject = type === ExperienceType.Project;
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        "bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333] text-[#888888]",
        isProject ? "w-7 h-7 border-dashed" : "w-8 h-8",
      )}
    >
      {isProject ? <Box size={12} /> : <Briefcase size={12} />}
    </span>
  );
}

function ResponsibilityItem({
  text,
  type,
}: {
  text: string;
  type: ExperienceType;
}) {
  const isProject = type === ExperienceType.Project;
  return (
    <li className="flex items-start gap-2 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
      <span
        className={cn(
          "mt-0.75 shrink-0",
          isProject
            ? "text-[oklch(53.18%_0.2399_256.99)] dark:text-[oklch(71.7%_0.1648_250.794)]"
            : "text-[oklch(51.75%_0.1453_147.65)] dark:text-[oklch(73.1%_0.2158_148.29)]",
        )}
      >
        {isProject ? <ArrowRight size={12} /> : <CheckInCircle size={12} />}
      </span>
      {text}
    </li>
  );
}

export function ExperienceNode({
  exp,
  isLast = true,
  formatPeriod,
  formatDuration,
  tEmp,
  tLoc,
}: Props) {
  const type = exp.type ?? ExperienceType.Company;
  const isProject = type === ExperienceType.Project;
  const children = exp.children ?? [];

  const locationParts = exp.location
    ? `${exp.location.city}, ${exp.location.country}`
    : null;

  return (
    <div className="flex gap-4">
      {/* Left: icon + connecting line */}
      <div className="flex flex-col items-center shrink-0">
        <NodeIconBox type={type} />
        {!isLast && (
          <div
            className={cn(
              "flex-1 my-2 w-0 border-l border-[#ebebeb] dark:border-[#333333]",
              isProject && "border-dashed",
            )}
          />
        )}
      </div>

      {/* Right: content */}
      <div
        className={cn(
          "flex-1 min-w-0 space-y-2.5 pt-1",
          !isLast && (isProject ? "pb-8" : "pb-12"),
        )}
      >
        {/* Title */}
        {isProject ? (
          <h4 className="text-base font-medium text-[#171717] dark:text-white leading-snug">
            {exp.title}
          </h4>
        ) : (
          <h3 className="text-lg font-semibold text-[#171717] dark:text-white leading-snug">
            {exp.title}
          </h3>
        )}

        {/* Meta: location + period */}
        {(locationParts || exp.period) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {locationParts && (
              <p className="mono inline-flex items-center gap-1 text-xs uppercase text-[#888888]">
                <MapPin size={11} />
                {locationParts}
              </p>
            )}
            {exp.period && (
              <p className="mono inline-flex items-center gap-1 text-xs uppercase text-[#888888]">
                <Clock size={11} />
                {formatPeriod(exp.period.start)} –{" "}
                {formatPeriod(exp.period.end)}
                {" · "}
                {formatDuration(exp.period.start, exp.period.end)}
              </p>
            )}
          </div>
        )}

        {/* Badges: role, employment type, location type */}
        {(exp.role || exp.employment_type || exp.location_type) && (
          <div className="flex flex-wrap items-center gap-1.5">
            {exp.role && (
              <Badge size="sm" variant="blue-subtle">
                {exp.role}
              </Badge>
            )}
            {exp.employment_type && (
              <EmploymentBadge
                type={exp.employment_type}
                label={tEmp(exp.employment_type)}
              />
            )}
            {exp.location_type && (
              <LocationBadge
                type={exp.location_type}
                label={tLoc(exp.location_type)}
              />
            )}
          </div>
        )}

        {/* Description */}
        {exp.description && (
          <p
            className={cn(
              "text-sm leading-relaxed",
              isProject
                ? "compact:hidden text-[#4d4d4d] dark:text-[#a1a1a1]"
                : "text-[#4d4d4d] dark:text-[#d4d4d4]",
            )}
          >
            {exp.description}
          </p>
        )}

        {/* Responsibilities */}
        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <ul className="space-y-1.5">
            {exp.responsibilities.map((r, i) => (
              <ResponsibilityItem key={i} text={r} type={type} />
            ))}
          </ul>
        )}

        {/* Stacks */}
        {exp.stacks && exp.stacks.length > 0 && (
          <AvatarGroup size="sm" max={8}>
            {sortedStackCodes(exp.stacks).map((code) => {
              const stack = getStack(code);
              return (
                <Avatar
                  key={code}
                  size="sm"
                  content={
                    stack.iconPath ? (
                      <Image
                        src={stack.iconPath}
                        width={10}
                        height={10}
                        className={cn(
                          "size-3.5",
                          stack.invertOnDark && "dark:invert",
                        )}
                        alt={stack.label}
                        unoptimized
                      />
                    ) : (
                      <span className="text-[8px] font-medium uppercase leading-none text-[#888888]">
                        {stack.label.slice(0, 2)}
                      </span>
                    )
                  }
                />
              );
            })}
          </AvatarGroup>
        )}

        {/* Nested projects */}
        {children.length > 0 && (
          <div className="pt-6">
            {children.map((child, i) => (
              <ExperienceNode
                key={child.title}
                exp={child as Experience}
                isLast={i === children.length - 1}
                formatPeriod={formatPeriod}
                formatDuration={formatDuration}
                tEmp={tEmp}
                tLoc={tLoc}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

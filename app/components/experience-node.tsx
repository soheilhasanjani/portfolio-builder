import type { Experience } from "../data/types";
import { ExperienceType } from "../data/types";
import { cn } from "../../lib/utils";
import { Badge } from "./ui/badge";
import { EmploymentBadge, LocationBadge } from "./ui/experience-badges";
import { ProjectCard } from "./ui/project-card";
import { Note } from "./ui/note";
import { StackAvatarGroup } from "./ui/stack-avatar-group";
import { Typography } from "./ui/typography";
import { Icon } from "./icons";

const HIGH_SCORE_THRESHOLD = 75;

type TFunc = (key: string) => string;

interface Props {
  exp: Experience;
  isLast?: boolean;
  formatPeriod: (d: string) => string;
  formatDuration: (start: string, end: string) => string;
  tEmp: TFunc;
  tLoc: TFunc;
}

function NodeIconBox() {
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full w-8 h-8 bg-card border border-border text-subtle">
      <Icon name="briefcase" size={14} />
    </span>
  );
}

interface BodyProps {
  exp: Experience;
  locationParts: string | null;
  formatPeriod: (d: string) => string;
  formatDuration: (start: string, end: string) => string;
  tEmp: TFunc;
  tLoc: TFunc;
  isProject?: boolean;
}

function ExperienceBody({
  exp,
  locationParts,
  formatPeriod,
  formatDuration,
  tEmp,
  tLoc,
  isProject = false,
}: BodyProps) {
  const hasResponsibilities =
    !!exp.responsibilities && exp.responsibilities.length > 0;
  return (
    <>
      {/* Meta: location + period */}
      {(locationParts || exp.period) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {locationParts && (
            <Typography
              variant="label"
              component="p"
              className="inline-flex items-center gap-1"
            >
              <Icon name="map-pin" size={11} />
              {locationParts}
            </Typography>
          )}
          {exp.period && (
            <Typography
              variant="label"
              component="p"
              className="inline-flex items-center gap-1"
            >
              <Icon name="clock" size={11} />
              {formatPeriod(exp.period.start)} – {formatPeriod(exp.period.end)}
              {" · "}
              {formatDuration(exp.period.start, exp.period.end)}
            </Typography>
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
        <Typography
          variant="body"
          className={cn(
            isProject && "compact:hidden",
            hasResponsibilities && "text-muted-bright",
          )}
        >
          {exp.description}
        </Typography>
      )}

      {/* Responsibilities */}
      {hasResponsibilities && (
        <ul className={cn("space-y-3", isProject && "compact:hidden")}>
          {exp.responsibilities!.map((r, i) => (
            <Note key={i} type="success">
              {r}
            </Note>
          ))}
        </ul>
      )}
    </>
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
  const isHotProject = isProject && (exp.value ?? 0) >= HIGH_SCORE_THRESHOLD;
  const children = exp.children ?? [];

  const locationParts = exp.location
    ? `${exp.location.city}, ${exp.location.country}`
    : null;

  const body = (
    <ExperienceBody
      exp={exp}
      locationParts={locationParts}
      formatPeriod={formatPeriod}
      formatDuration={formatDuration}
      tEmp={tEmp}
      tLoc={tLoc}
      isProject={isProject}
    />
  );

  if (isProject) {
    return (
      <ProjectCard
        title={exp.title}
        showFlame={isHotProject}
        stacks={exp.stacks}
        stackLimit={8}
      >
        {body}
      </ProjectCard>
    );
  }

  return (
    <div className="flex gap-2">
      {/* Left: icon + connecting line */}
      <div className="flex flex-col items-center shrink-0">
        <NodeIconBox />
        {!isLast && <div className="flex-1 my-2 w-0 border-l border-border" />}
      </div>

      {/* Right: content */}
      <div
        className={cn("flex-1 min-w-0 space-y-2.5 pt-1", !isLast && "pb-12")}
      >
        <Typography variant="heading" component="h3">
          {exp.title}
        </Typography>

        {body}

        {exp.stacks && exp.stacks.length > 0 && (
          <StackAvatarGroup stacks={exp.stacks} />
        )}

        {/* Nested projects */}
        {children.length > 0 && (
          <div className="pt-6 grid grid-cols-2 gap-0.5">
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

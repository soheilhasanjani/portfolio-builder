import { Badge, type Variant } from "./badge";

function employmentVariant(type: string): Variant {
  switch (type) {
    case "full_time":
      return "green-subtle";
    case "part_time":
      return "blue-subtle";
    case "freelance":
    case "contract":
    case "self_employed":
      return "amber-subtle";
    case "internship":
    case "apprenticeship":
      return "purple-subtle";
    case "seasonal":
      return "teal-subtle";
    default:
      return "default";
  }
}

function locationVariant(type: string): Variant {
  switch (type) {
    case "on_site":
      return "pink-subtle";
    case "hybrid":
      return "amber-subtle";
    case "remote":
      return "purple-subtle";
    default:
      return "default";
  }
}

interface EmploymentBadgeProps {
  type: string;
  label: string;
}

export function EmploymentBadge({ type, label }: EmploymentBadgeProps) {
  return (
    <Badge size="sm" variant={employmentVariant(type)}>
      {label}
    </Badge>
  );
}

interface LocationBadgeProps {
  type: string;
  label: string;
}

export function LocationBadge({ type, label }: LocationBadgeProps) {
  return (
    <Badge size="sm" variant={locationVariant(type)}>
      {label}
    </Badge>
  );
}

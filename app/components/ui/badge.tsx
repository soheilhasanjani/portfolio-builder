import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type Size = "sm" | "md" | "lg";

export type Variant =
  | "default"
  | "blue-subtle"
  | "purple-subtle"
  | "amber-subtle"
  | "red-subtle"
  | "green-subtle"
  | "pink-subtle"
  | "teal-subtle";

const variants: Record<Variant, string> = {
  default: "bg-card border-border text-muted",
  "blue-subtle": "bg-blue-tint border-blue-tint text-blue-fg",
  "purple-subtle": "bg-purple-tint border-purple-tint text-purple-fg",
  "amber-subtle": "bg-amber-tint border-amber-tint text-amber-fg",
  "red-subtle": "bg-red-tint border-red-tint text-red-fg",
  "green-subtle": "bg-green-tint border-green-tint text-green-fg",
  "pink-subtle": "bg-pink-tint border-pink-tint text-pink-fg",
  "teal-subtle": "bg-teal-tint border-teal-tint text-teal-fg",
};

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
}

export function Badge({
  children,
  icon,
  size = "md",
  variant = "default",
  className,
}: Props) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center border rounded-full uppercase",
        size === "lg" && "gap-2 px-3 py-1 text-sm",
        size === "md" && "gap-1.5 px-2.5 py-0.5 text-xs",
        size === "sm" && "gap-1.5 px-2 py-0.5 text-[10px]",
        variants[variant],
        className,
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

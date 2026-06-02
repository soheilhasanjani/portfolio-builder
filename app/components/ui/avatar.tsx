import Image from "next/image";
import { Children, type ReactNode } from "react";
import { getStack } from "../../../lib/stacks";
import { cn } from "../../../lib/utils";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type BadgePosition = "top-start" | "top-end" | "bottom-start" | "bottom-end";
type Spacing = "sm" | "md" | "lg";

const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-5 h-5 text-[8px]",
  sm: "w-7 h-7 text-[10px]",
  md: "w-9 h-9 text-xs",
  lg: "w-11 h-11 text-sm",
  xl: "w-14 h-14 text-base",
};

const badgePositionClasses: Record<BadgePosition, string> = {
  "top-start": "-top-1 start-0 -translate-x-1/2",
  "top-end": "-top-1 end-0 translate-x-1/2",
  "bottom-start": "-bottom-1 start-0 -translate-x-1/2",
  "bottom-end": "-bottom-1 end-0 translate-x-1/2",
};

const groupSpacingClasses: Record<Spacing, string> = {
  sm: "[&>*+*]:-ml-1",
  md: "[&>*+*]:-ml-2",
  lg: "[&>*+*]:-ml-3",
};

interface AvatarProps {
  content: ReactNode;
  size?: AvatarSize;
  badge?: ReactNode;
  badgePosition?: BadgePosition;
  className?: string;
}

export function Avatar({
  content,
  size = "md",
  badge,
  badgePosition = "bottom-end",
  className,
}: AvatarProps) {
  return (
    <span className={cn("relative inline-flex shrink-0", className)}>
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full",
          "bg-card",
          "border border-border",
          sizeClasses[size],
        )}
      >
        {content}
      </span>
      {badge && (
        <span
          className={cn("absolute z-10", badgePositionClasses[badgePosition])}
        >
          {badge}
        </span>
      )}
    </span>
  );
}

interface AvatarGroupProps {
  children: ReactNode;
  spacing?: Spacing;
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export function AvatarGroup({
  children,
  spacing = "md",
  max,
  size = "md",
  className,
}: AvatarGroupProps) {
  const items = Children.toArray(children);
  const visible = max != null ? items.slice(0, max) : items;
  const overflow = max != null ? Math.max(0, items.length - max) : 0;

  return (
    <div
      className={cn(
        "flex items-center",
        groupSpacingClasses[spacing],
        className,
      )}
    >
      {visible}
      {overflow > 0 && (
        <Avatar
          content={`+${overflow}`}
          size={size}
          className="text-muted"
        />
      )}
    </div>
  );
}

interface StackAvatarProps {
  code: string;
  size?: number;
  className?: string;
}

export function StackAvatar({ code, size = 28, className }: StackAvatarProps) {
  const { label, iconPath, invertOnDark } = getStack(code);

  const content = iconPath ? (
    <Image
      src={iconPath}
      alt={label}
      width={size}
      height={size}
      className={cn("transition duration-200", invertOnDark && "dark:invert")}
      unoptimized
    />
  ) : (
    <span className="px-1 text-center text-[10px] font-medium leading-tight text-muted">
      {label}
    </span>
  );

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full",
        "bg-card border border-border",
        className,
      )}
      title={label}
    >
      {content}
    </span>
  );
}

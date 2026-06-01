import Image from "next/image";
import { getSkillIconPath, getSkillLabel } from "../data/skills";
import { cn } from "../../lib/utils";

type SkillBadgeVariant = "circle" | "rectangle";

interface Props {
  code: string;
  variant?: SkillBadgeVariant;
  badgeClassName?: string;
  iconSize?: number;
  isGrayscale?: boolean;
}

export function SkillBadge({
  code,
  variant = "rectangle",
  badgeClassName,
  iconSize,
  isGrayscale = false,
}: Props) {
  const iconPath = getSkillIconPath(code);
  const label = getSkillLabel(code);

  const iconClassName = cn(
    "transition duration-200",
    isGrayscale && "grayscale opacity-80 hover:grayscale-0 hover:opacity-100",
  );

  if (variant === "circle") {
    const size = iconSize ?? 28;
    return (
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-100",
          badgeClassName,
        )}
        title={label}
      >
        {iconPath ? (
          <Image
            src={iconPath}
            alt={label}
            width={size}
            height={size}
            className={iconClassName}
            unoptimized
          />
        ) : (
          <span className="px-1 text-center text-[10px] font-medium leading-tight text-gray-600 dark:text-gray-300">
            {label}
          </span>
        )}
      </span>
    );
  }

  // rectangle (default)
  const size = iconSize ?? 16;
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", badgeClassName)}
      title={label}
    >
      {iconPath && (
        <Image
          src={iconPath}
          alt={label}
          width={size}
          height={size}
          className={iconClassName}
          unoptimized
        />
      )}
      <span>{label}</span>
    </span>
  );
}

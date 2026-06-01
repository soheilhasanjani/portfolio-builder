import Image from "next/image";
import { getStackIconPath, getStackInvertOnDark, getStackLabel } from "../data/stacks";
import { cn } from "../../lib/utils";

type StackBadgeVariant = "circle" | "rectangle";

interface Props {
  code: string;
  variant?: StackBadgeVariant;
  badgeClassName?: string;
  iconSize?: number;
  isGrayscale?: boolean;
}

export function StackBadge({
  code,
  variant = "rectangle",
  badgeClassName,
  iconSize,
  isGrayscale = false,
}: Props) {
  const iconPath = getStackIconPath(code);
  const label = getStackLabel(code);
  const invertOnDark = getStackInvertOnDark(code);

  const iconClassName = cn(
    "transition duration-200",
    isGrayscale && "grayscale opacity-80 hover:grayscale-0 hover:opacity-100",
    invertOnDark && "dark:invert",
  );

  if (variant === "circle") {
    const size = iconSize ?? 28;
    return (
      <span
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333]",
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
          <span className="px-1 text-center text-[10px] font-medium leading-tight text-[#4d4d4d] dark:text-[#a1a1a1]">
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

import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

type Size = "sm" | "md";

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
  default:
    "bg-[#fafafa] dark:bg-[#1f1f1f] border-[#ebebeb] dark:border-[#333333] text-[#4d4d4d] dark:text-[#a1a1a1]",
  "blue-subtle":
    "bg-[oklch(96.29%_0.0195_250.59)] dark:bg-[oklch(25.45%_0.0811_255.8)] border-[oklch(96.29%_0.0195_250.59)] dark:border-[oklch(25.45%_0.0811_255.8)] text-[oklch(53.18%_0.2399_256.99)] dark:text-[oklch(71.7%_0.1648_250.794)]",
  "purple-subtle":
    "bg-[oklch(96.73%_0.0228_309.8)] dark:bg-[oklch(25.91%_0.0921_314.41)] border-[oklch(96.73%_0.0228_309.8)] dark:border-[oklch(25.91%_0.0921_314.41)] text-[oklch(47.18%_0.2579_304)] dark:text-[oklch(69.87%_0.2037_309.51)]",
  "amber-subtle":
    "bg-[oklch(96.81%_0.0495_90.2423)] dark:bg-[oklch(24.95%_0.0642_64.78)] border-[oklch(96.81%_0.0495_90.2423)] dark:border-[oklch(24.95%_0.0642_64.78)] text-[oklch(52.79%_0.1496_54.65)] dark:text-[oklch(77.21%_0.1991_64.28)]",
  "red-subtle":
    "bg-[oklch(95.41%_0.0299_14.2526)] dark:bg-[oklch(25.93%_0.0834_19.02)] border-[oklch(95.41%_0.0299_14.2526)] dark:border-[oklch(25.93%_0.0834_19.02)] text-[oklch(54.99%_0.232_25.29)] dark:text-[oklch(69.96%_0.2136_22.03)]",
  "green-subtle":
    "bg-[oklch(96.92%_0.037_147.15)] dark:bg-[oklch(27.12%_0.0895_150.09)] border-[oklch(96.92%_0.037_147.15)] dark:border-[oklch(27.12%_0.0895_150.09)] text-[oklch(51.75%_0.1453_147.65)] dark:text-[oklch(73.1%_0.2158_148.29)]",
  "pink-subtle":
    "bg-[oklch(93.83%_0.0451_356.29)] dark:bg-[oklch(31.15%_0.1067_355.93)] border-[oklch(93.83%_0.0451_356.29)] dark:border-[oklch(31.15%_0.1067_355.93)] text-[oklch(53.5%_0.2058_2.84)] dark:text-[oklch(69.36%_0.2223_3.91)]",
  "teal-subtle":
    "bg-[oklch(94.92%_0.0478_182.07)] dark:bg-[oklch(31.5%_0.0767_180.99)] border-[oklch(94.92%_0.0478_182.07)] dark:border-[oklch(31.5%_0.0767_180.99)] text-[oklch(52.08%_0.1251_182.93)] dark:text-[oklch(74.56%_0.1765_182.8)]",
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
        size === "md" && "gap-2 px-3 py-1 text-sm",
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

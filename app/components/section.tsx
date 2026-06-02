import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Typography } from "./ui/typography";

interface Props {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ icon, title, children, className }: Props) {
  return (
    <section className={cn("space-y-4", className)}>
      <Typography variant="section" className="flex items-center gap-1.5 pb-2 w-full">
        {icon}
        {title}
      </Typography>
      {children}
    </section>
  );
}

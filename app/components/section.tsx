import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ icon, title, children, className }: Props) {
  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="mono text-xs uppercase flex items-center gap-1.5 pb-2 text-[#ededed] w-full">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}

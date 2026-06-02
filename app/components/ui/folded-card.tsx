import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export function FoldedCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative border border-[#333] bg-[#ffffff03] p-8",
        className,
      )}
    >
      <span className="fold-corner" />
      {children}
    </div>
  );
}

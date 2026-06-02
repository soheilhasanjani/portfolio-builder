import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { Icon } from "../icons";

type NoteType = "success";

interface Props {
  children: ReactNode;
  type?: NoteType;
}

const typeStyles: Record<NoteType, string> = {
  success: "bg-green-tint text-green-fg",
};

const typeIcon: Record<NoteType, Parameters<typeof Icon>[0]["name"]> = {
  success: "check",
};

export function Note({ children, type = "success" }: Props) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted">
      <span
        className={cn(
          "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full w-5 h-5",
          typeStyles[type],
        )}
      >
        <Icon name={typeIcon[type]} size={12} />
      </span>
      <span className="pt-0.75">{children}</span>
    </li>
  );
}

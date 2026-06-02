import type { ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { StackAvatarGroup } from "./stack-avatar-group";
import { Typography } from "./typography";
import { Icon } from "../icons";

interface Props {
  title: string;
  description?: string;
  stacks?: string[];
  /** Max stacks shown in the AvatarGroup. Default 8. */
  stackLimit?: number;
  /** Show an orange flame next to the title. */
  showFlame?: boolean;
  /** Extra classes on the outer card container. */
  className?: string;
  /** Extra classes on the description paragraph (e.g. line-clamp). */
  descriptionClassName?: string;
  /** Slotted between description and stacks. */
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  stacks,
  stackLimit = 8,
  showFlame = false,
  className,
  descriptionClassName,
  children,
}: Props) {
  return (
    <div className={cn("bg-card p-6 flex flex-col gap-2.5", className)}>
      <Typography variant="subheading" component="h3" className="inline-flex items-center gap-1.5">
        {title}
        {showFlame && (
          <span className="text-flame">
            <Icon name="flame" size={14} />
          </span>
        )}
      </Typography>

      {description && (
        <Typography variant="body" className={descriptionClassName}>
          {description}
        </Typography>
      )}

      {children}

      {stacks && stacks.length > 0 && (
        <StackAvatarGroup
          stacks={stacks}
          max={stackLimit}
          className="mt-auto"
        />
      )}
    </div>
  );
}

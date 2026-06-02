import Image from "next/image";
import { cn } from "../../../lib/utils";
import { getStack, sortedStackCodes } from "../../../lib/stacks";
import { Avatar, AvatarGroup, type AvatarSize } from "./avatar";

interface Props {
  stacks: string[];
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export function StackAvatarGroup({ stacks, max = 8, size = "sm", className }: Props) {
  const sorted = sortedStackCodes(stacks);
  if (sorted.length === 0) return null;

  return (
    <AvatarGroup size={size} max={max} className={className}>
      {sorted.map((code) => {
        const stack = getStack(code);
        return (
          <Avatar
            key={code}
            size={size}
            content={
              stack.iconPath ? (
                <Image
                  src={stack.iconPath}
                  width={10}
                  height={10}
                  className={cn("size-3.5", stack.invertOnDark && "dark:invert")}
                  alt={stack.label}
                  unoptimized
                />
              ) : (
                <span className="text-[8px] font-medium uppercase leading-none text-subtle">
                  {stack.label.slice(0, 2)}
                </span>
              )
            }
          />
        );
      })}
    </AvatarGroup>
  );
}

import Image from "next/image";
import { cn } from "../../../lib/utils";
import { getStack, sortedStackCodes } from "../../../lib/stacks";
import { Avatar, AvatarGroup, AvatarGroupProps } from "./avatar";

interface Props extends Omit<AvatarGroupProps, "children"> {
  stacks: string[];
  imageSize?: number;
  imageClassName?: string;
}

export function StackAvatarGroup({
  stacks,
  max = 8,
  size = "sm",
  spacing = "md",
  className,
  imageClassName,
  imageSize = 10,
}: Props) {
  const sorted = sortedStackCodes(stacks);
  if (sorted.length === 0) return null;

  return (
    <AvatarGroup size={size} max={max} className={className} spacing={spacing}>
      {sorted
        .filter((code) => {
          const stack = getStack(code);
          return stack.iconPath;
        })
        .map((code) => {
          const stack = getStack(code);
          return (
            <Avatar
              key={code}
              size={size}
              content={
                stack.iconPath ? (
                  <Image
                    src={stack.iconPath}
                    width={imageSize}
                    height={imageSize}
                    className={cn(
                      "size-3.5",
                      stack.invertOnDark && "dark:invert",
                      imageClassName,
                    )}
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

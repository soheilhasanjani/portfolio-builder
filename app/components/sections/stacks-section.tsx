import { getTranslations } from "next-intl/server";
import Zap from "@geist-ui/icons/zap";
import { Section } from "../section";
import { getStack } from "@/lib/stacks";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export async function StacksSection({ stacks }: { stacks: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Zap size={12} />} title={tSections("stacks")}>
      <div className="flex flex-wrap gap-1.5">
        {stacks.map((code) => {
          const stack = getStack(code);
          return (
            <Badge
              key={code}
              size="sm"
              icon={
                stack.iconPath ? (
                  <Image
                    src={stack.iconPath}
                    width={12}
                    height={12}
                    className={cn("size-3", {
                      "dark:invert": stack.invertOnDark,
                    })}
                    alt={code}
                  />
                ) : null
              }
            >
              {stack.label}
            </Badge>
          );
        })}
      </div>
    </Section>
  );
}

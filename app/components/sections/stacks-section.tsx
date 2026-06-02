import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";
import { getStack, groupStacksByCategory } from "@/lib/stacks";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export async function StacksSection({ stacks }: { stacks: string[] }) {
  const tSections = await getTranslations("sections");
  const groups = groupStacksByCategory(stacks);

  return (
    <Section icon={<Icon name="zap" size={12} />} title={tSections("stacks")}>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.category} className="space-y-1.5">
            <h3 className="mono text-[10px] uppercase tracking-wider text-neutral">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.codes.map((code) => {
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
          </div>
        ))}
      </div>
    </Section>
  );
}

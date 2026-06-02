import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";
import { getStack, groupStacksByCategory } from "@/lib/stacks";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Typography } from "../ui/typography";

export async function StacksSection({ stacks }: { stacks: string[] }) {
  const tSections = await getTranslations("sections");
  const groups = groupStacksByCategory(stacks);

  return (
    <Section icon={<Icon name="zap" size={12} />} title={tSections("stacks")}>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.category} className="space-y-1.5">
            <Typography variant="overline" component="h3">
              {group.label}
            </Typography>
            <div className="flex flex-wrap gap-1.5">
              {group.codes.map((code) => {
                const stack = getStack(code);
                return (
                  <Badge
                    key={code}
                    size="md"
                    icon={
                      stack.iconPath ? (
                        <Image
                          src={stack.iconPath}
                          width={14}
                          height={14}
                          className={cn("size-3.5", {
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

import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";
import { groupStacksByCategory } from "@/lib/stacks";
import { StackAvatarGroup } from "../ui/stack-avatar-group";
import { Typography } from "../ui/typography";

export async function StacksSection({ stacks }: { stacks: string[] }) {
  const tSections = await getTranslations("sections");
  const groups = groupStacksByCategory(stacks);

  return (
    <Section icon={<Icon name="zap" size={12} />} title={tSections("stacks")}>
      <div className="grid grid-cols-3 gap-8">
        {groups.map((group) => (
          <div key={group.category} className="space-y-1.5">
            <Typography variant="overline" component="h3">
              {group.label}
            </Typography>
            <StackAvatarGroup
              stacks={group.codes}
              max={7}
              size="md"
              spacing="sm"
              imageSize={20}
              imageClassName="size-5"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

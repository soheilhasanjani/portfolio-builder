import { getTranslations } from "next-intl/server";
import Zap from "@geist-ui/icons/zap";
import { StackBadge } from "../stack-badge";
import { Section } from "../section";

export async function StacksSection({ stacks }: { stacks: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Zap size={12} />} title={tSections("stacks")}>
      <div className="flex flex-wrap gap-3">
        {stacks.map((code) => (
          <StackBadge key={code} code={code} variant="circle" />
        ))}
      </div>
    </Section>
  );
}

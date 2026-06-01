import { getTranslations } from "next-intl/server";
import Zap from "@geist-ui/icons/zap";
import { SkillBadge } from "../skill-badge";
import { sectionTitle } from "../../tokens";

export async function SkillsSection({ skills }: { skills: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <section className="space-y-4">
      <h2 className={sectionTitle}>
        <Zap size={12} />
        {tSections("skills")}
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((code) => (
          <SkillBadge key={code} code={code} variant="circle" />
        ))}
      </div>
    </section>
  );
}

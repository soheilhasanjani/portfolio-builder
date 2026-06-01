import { getTranslations } from "next-intl/server";
import User from "@geist-ui/icons/user";
import { type About } from "../../data/types";
import { getStackLabel } from "../../data/stacks";
import { badge } from "../../tokens";
import { Section } from "../section";

export async function AboutSection({ about }: { about: About }) {
  const [tSections, tAbout] = await Promise.all([
    getTranslations("sections"),
    getTranslations("about"),
  ]);

  return (
    <Section icon={<User size={12} />} title={tSections("about")}>
      <div className="space-y-4">
        <p className="text-[#4d4d4d] dark:text-[#a1a1a1] leading-8">
          {about.summary}
        </p>
        <div className="space-y-1.5">
          <p className="mono text-sm font-medium text-[#888888]">
            {tAbout("topStacks")}
          </p>
          <div className="flex flex-wrap gap-2">
            {about.top_stacks.map((code) => (
              <span key={code} className={badge}>
                {getStackLabel(code)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

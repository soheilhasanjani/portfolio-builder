import { getTranslations } from "next-intl/server";
import User from "@geist-ui/icons/user";
import { type About } from "../../data/types";
import { getSkillLabel } from "../../data/skills";
import { sectionTitle, badge } from "../../tokens";

export async function AboutSection({ about }: { about: About }) {
  const [tSections, tAbout] = await Promise.all([
    getTranslations("sections"),
    getTranslations("about"),
  ]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <div className="md:col-span-3">
        <h2 className={sectionTitle}>
          <User size={12} />
          {tSections("about")}
        </h2>
      </div>
      <div className="md:col-span-9 space-y-4">
        <p className="text-[#4d4d4d] dark:text-[#a1a1a1] leading-8">{about.summary}</p>
        <div className="space-y-1.5">
          <p className="mono text-sm font-medium text-[#888888]">{tAbout("topSkills")}</p>
          <div className="flex flex-wrap gap-2">
            {about.top_skills.map((code) => (
              <span key={code} className={badge}>
                {getSkillLabel(code)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

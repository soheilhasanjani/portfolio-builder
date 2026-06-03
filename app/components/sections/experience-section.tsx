import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { type Experience } from "../../data/types";
import { ExperienceNode } from "../experience-node";
import { formatMonthYear, formatDuration } from "../../../lib/date";
import { Section } from "../section";

export async function ExperienceSection({
  experience,
  lang,
}: {
  experience: Experience[];
  lang: string;
}) {
  if (experience.length === 0) return null;

  const [tSections, tExperience, tEmp, tLoc] = await Promise.all([
    getTranslations("sections"),
    getTranslations("experience"),
    getTranslations("employmentType"),
    getTranslations("locationType"),
  ]);

  function formatPeriod(date: string) {
    return date === "present"
      ? tExperience("present")
      : formatMonthYear(date, lang);
  }

  function formatDur(start: string, end: string) {
    return formatDuration(start, end, lang);
  }

  return (
    <Section
      icon={<Icon name="briefcase" size={12} />}
      title={tSections("experience")}
    >
      <div>
        {experience.map((exp, i) => (
          <ExperienceNode
            key={exp.title}
            exp={exp}
            isLast={i === experience.length - 1}
            formatPeriod={formatPeriod}
            formatDuration={formatDur}
            tEmp={tEmp}
            tLoc={tLoc}
          />
        ))}
      </div>
    </Section>
  );
}

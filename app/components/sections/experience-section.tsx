import { getTranslations } from "next-intl/server";
import Briefcase from "@geist-ui/icons/briefcase";
import { type Experience } from "../../data/types";
import { ExperienceNode } from "../experience-node";
import { formatMonthYear, formatDuration } from "../../../lib/date";
import { sectionTitle, badgeSm } from "../../tokens";

function toSortKey(date: string) {
  return date === "present" ? "9999-99" : date;
}

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

  const sorted = [...experience].sort((a, b) =>
    toSortKey(b.period?.start ?? "").localeCompare(toSortKey(a.period?.start ?? "")),
  );

  function formatPeriod(date: string) {
    return date === "present" ? tExperience("present") : formatMonthYear(date, lang);
  }

  function formatDur(start: string, end: string) {
    return formatDuration(start, end, lang);
  }

  return (
    <section className="space-y-6">
      <h2 className={sectionTitle}>
        <Briefcase size={12} />
        {tSections("experience")}
      </h2>

      <div className="relative">
        <div className="absolute left-[15px] top-[15px] bottom-[15px] w-px bg-[#ebebeb] dark:bg-[#333333]" />
        <div className="space-y-10">
          {sorted.map((exp) => (
            <div key={exp.title} className="relative flex gap-5">
              <div className="relative z-10 shrink-0 h-[30px] w-[30px] rounded-full border border-[#ebebeb] dark:border-[#333333] bg-[#ffffff] dark:bg-[#171717] flex items-center justify-center text-[#888888]">
                <Briefcase size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <ExperienceNode
                  exp={exp}
                  badgeSm={badgeSm}
                  formatPeriod={formatPeriod}
                  formatDuration={formatDur}
                  tEmp={tEmp}
                  tLoc={tLoc}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

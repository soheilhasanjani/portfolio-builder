import { getTranslations } from "next-intl/server";
import Book from "@geist-ui/icons/book";
import { type Education } from "../../data/types";
import { getStack, sortedStackCodes } from "../../../lib/stacks";
import { formatMonthYear } from "../../../lib/date";
import { Badge } from "../ui/badge";
import { Section } from "../section";

export async function EducationSection({
  education,
  lang,
}: {
  education: Education[];
  lang: string;
}) {
  if (education.length === 0) return null;

  const [tSections, tEdu, tExperience] = await Promise.all([
    getTranslations("sections"),
    getTranslations("education"),
    getTranslations("experience"),
  ]);

  function formatPeriod(date: string) {
    return date === "present"
      ? tExperience("present")
      : formatMonthYear(date, lang);
  }

  return (
    <Section icon={<Book size={12} />} title={tSections("education")}>
      {education.map((edu, i) => (
        <div key={i} className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-[#171717] dark:text-white">
              {edu.school}
            </h3>
            <p className="mono text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
              {[edu.degree, edu.field_of_study].filter(Boolean).join(" · ")}
            </p>
            <p className="mono text-xs text-[#888888]">
              {formatPeriod(edu.period.start)} – {formatPeriod(edu.period.end)}
            </p>
          </div>

          {edu.grade && (
            <p className="text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
              <span className="mono text-[#888888]">{tEdu("grade")}:</span>{" "}
              {edu.grade}
            </p>
          )}

          {edu.activities && (
            <p className="text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
              <span className="mono text-[#888888]">{tEdu("activities")}:</span>{" "}
              {edu.activities}
            </p>
          )}

          {edu.description && (
            <p className="text-sm text-[#4d4d4d] dark:text-[#a1a1a1] leading-7">
              {edu.description}
            </p>
          )}

          {edu.stacks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {sortedStackCodes(edu.stacks).map((code) => (
                <Badge key={code} size="sm">
                  {getStack(code).label}
                </Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </Section>
  );
}

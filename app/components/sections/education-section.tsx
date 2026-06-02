import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
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
    <Section icon={<Icon name="book" size={12} />} title={tSections("education")}>
      {education.map((edu, i) => (
        <div key={i} className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink">
              {edu.school}
            </h3>
            <p className="mono text-sm text-muted">
              {[edu.degree, edu.field_of_study].filter(Boolean).join(" · ")}
            </p>
            <p className="mono text-xs text-subtle">
              {formatPeriod(edu.period.start)} – {formatPeriod(edu.period.end)}
            </p>
          </div>

          {edu.grade && (
            <p className="text-sm text-muted">
              <span className="mono text-subtle">{tEdu("grade")}:</span>{" "}
              {edu.grade}
            </p>
          )}

          {edu.activities && (
            <p className="text-sm text-muted">
              <span className="mono text-subtle">{tEdu("activities")}:</span>{" "}
              {edu.activities}
            </p>
          )}

          {edu.description && (
            <p className="text-sm text-muted leading-7">
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

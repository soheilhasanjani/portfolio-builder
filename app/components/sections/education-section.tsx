import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { type Education } from "../../data/types";
import { getStack, sortedStackCodes } from "../../../lib/stacks";
import { formatMonthYear } from "../../../lib/date";
import { Badge } from "../ui/badge";
import { Section } from "../section";
import { Typography } from "../ui/typography";

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
            <Typography variant="heading" component="h3" className="tracking-tight">
              {edu.school}
            </Typography>
            <Typography variant="body-mono">
              {[edu.degree, edu.field_of_study].filter(Boolean).join(" · ")}
            </Typography>
            <Typography variant="meta" component="p">
              {formatPeriod(edu.period.start)} – {formatPeriod(edu.period.end)}
            </Typography>
          </div>

          {edu.grade && (
            <Typography variant="body">
              <Typography variant="meta">{tEdu("grade")}:</Typography>{" "}
              {edu.grade}
            </Typography>
          )}

          {edu.activities && (
            <Typography variant="body">
              <Typography variant="meta">{tEdu("activities")}:</Typography>{" "}
              {edu.activities}
            </Typography>
          )}

          {edu.description && (
            <Typography variant="body" className="leading-7">
              {edu.description}
            </Typography>
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

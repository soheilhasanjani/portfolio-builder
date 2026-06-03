import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { type About } from "../../data/types";
import { Section } from "../section";
import { Typography } from "../ui/typography";

export async function AboutSection({ about }: { about: About }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Icon name="user" size={12} />} title={tSections("about")}>
      <div className="space-y-3">
        {about.summary.split("\n\n").map((para, i) => (
          <Typography key={i} variant="body-lg">
            {para}
          </Typography>
        ))}
      </div>
    </Section>
  );
}

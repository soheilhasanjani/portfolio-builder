import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { type About } from "../../data/types";
import { Section } from "../section";

export async function AboutSection({ about }: { about: About }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Icon name="user" size={12} />} title={tSections("about")}>
      <p className="text-muted leading-[1.7] text-base">
        {about.summary}
      </p>
    </Section>
  );
}

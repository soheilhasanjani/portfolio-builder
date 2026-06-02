import { getTranslations } from "next-intl/server";
import User from "@geist-ui/icons/user";
import { type About } from "../../data/types";
import { Section } from "../section";

export async function AboutSection({ about }: { about: About }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<User size={12} />} title={tSections("about")}>
      <p className="text-[#4d4d4d] dark:text-[#a1a1a1] leading-8">
        {about.summary}
      </p>
    </Section>
  );
}

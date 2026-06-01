import { getTranslations } from "next-intl/server";
import Settings from "@geist-ui/icons/settings";
import { Section } from "../section";

export async function ServicesSection({ services }: { services: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Settings size={12} />} title={tSections("services")}>
      <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Section>
  );
}

import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";

export async function ServicesSection({ services }: { services: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Icon name="settings" size={12} />} title={tSections("services")}>
      <ul className="list-disc list-inside space-y-1 text-sm text-muted">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Section>
  );
}

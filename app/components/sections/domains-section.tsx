import { getTranslations } from "next-intl/server";
import Layers from "@geist-ui/icons/layers";
import { Section } from "../section";

export async function DomainsSection({ domains }: { domains: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Layers size={12} />} title={tSections("domains")}>
      <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
        {domains.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </Section>
  );
}

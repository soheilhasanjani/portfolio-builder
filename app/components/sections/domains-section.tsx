import { getTranslations } from "next-intl/server";
import Layers from "@geist-ui/icons/layers";
import { FoldedCard } from "../ui/folded-card";
import { Section } from "../section";

export async function DomainsSection({ domains }: { domains: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Layers size={12} />} title={tSections("domains")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {domains.map((d) => (
          <FoldedCard key={d}>
            <p className="mono text-sm text-[#a1a1a1]">{d}</p>
          </FoldedCard>
        ))}
      </div>
    </Section>
  );
}

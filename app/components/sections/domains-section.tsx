import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { FoldedCard } from "../ui/folded-card";
import { Section } from "../section";

export async function DomainsSection({ domains }: { domains: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Icon name="layers" size={12} />} title={tSections("domains")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {domains.map((d) => (
          <FoldedCard key={d}>
            <p className="mono text-sm text-neutral">{d}</p>
          </FoldedCard>
        ))}
      </div>
    </Section>
  );
}

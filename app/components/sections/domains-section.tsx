import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { FoldedCard } from "../ui/folded-card";
import { Section } from "../section";
import { Typography } from "../ui/typography";

export async function DomainsSection({ domains }: { domains: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <Section icon={<Icon name="layers" size={12} />} title={tSections("domains")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {domains.map((d) => (
          <FoldedCard key={d}>
            <Typography variant="body-mono" className="text-neutral">{d}</Typography>
          </FoldedCard>
        ))}
      </div>
    </Section>
  );
}

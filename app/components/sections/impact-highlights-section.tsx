import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { FoldedCard } from "../ui/folded-card";
import { Section } from "../section";
import { Typography } from "../ui/typography";
import type { ImpactHighlight } from "../../data/types";

export async function ImpactHighlightsSection({
  highlights,
}: {
  highlights: ImpactHighlight[];
}) {
  const tSections = await getTranslations("sections");

  if (!highlights || highlights.length === 0) return null;

  return (
    <Section icon={<Icon name="award" size={12} />} title={tSections("impactHighlights")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {highlights.map((h) => (
          <FoldedCard key={h.title}>
            <Typography variant="title" component="h3" className="mb-1.5">
              {h.title}
            </Typography>
            <Typography variant="body">
              {h.description}
            </Typography>
          </FoldedCard>
        ))}
      </div>
    </Section>
  );
}

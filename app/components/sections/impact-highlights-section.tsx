import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { FoldedCard } from "../ui/folded-card";
import { Section } from "../section";
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
            <h3 className="text-sm font-semibold text-ink leading-snug mb-1.5">
              {h.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {h.description}
            </p>
          </FoldedCard>
        ))}
      </div>
    </Section>
  );
}

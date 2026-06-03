import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import type { IconName } from "../icons";
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
    <Section
      icon={<Icon name="award" size={12} />}
      title={tSections("impactHighlights")}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-3">
            <div className="space-y-[12px]">
              <div className="flex items-center gap-2 text-teal-fg">
                <Icon name={h.icon as IconName} size={16} />
                <h3 className="font-normal text-[16px] leading-6 text-[#ededed]">
                  {h.title}
                </h3>
              </div>
              <p className="text-[#a1a1a1] text-[18px] font-[500] leading-[26px]">
                {h.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

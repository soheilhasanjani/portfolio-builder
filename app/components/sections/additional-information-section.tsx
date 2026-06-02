import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";
import { Typography } from "../ui/typography";
import type { AdditionalInfoItem } from "../../data/types";

export async function AdditionalInformationSection({
  items,
}: {
  items: AdditionalInfoItem[];
}) {
  const tSections = await getTranslations("sections");

  if (!items || items.length === 0) return null;

  return (
    <Section icon={<Icon name="info" size={12} />} title={tSections("additionalInformation")}>
      <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm">
        {items.map((item) => (
          <div key={item.label} className="contents">
            <Typography variant="label" component="dt" className="sm:pt-0.5">
              {item.label}
            </Typography>
            <Typography variant="body" component="dd">
              {item.value}
            </Typography>
          </div>
        ))}
      </dl>
    </Section>
  );
}

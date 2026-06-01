import { getTranslations } from "next-intl/server";
import Layers from "@geist-ui/icons/layers";
import { sectionTitle } from "../../tokens";

export async function DomainsSection({ domains }: { domains: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <section className="space-y-2">
      <h2 className={sectionTitle}>
        <Layers size={12} />
        {tSections("domains")}
      </h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
        {domains.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  );
}

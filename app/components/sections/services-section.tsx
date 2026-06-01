import { getTranslations } from "next-intl/server";
import Settings from "@geist-ui/icons/settings";
import { sectionTitle } from "../../tokens";

export async function ServicesSection({ services }: { services: string[] }) {
  const tSections = await getTranslations("sections");

  return (
    <section className="space-y-2">
      <h2 className={sectionTitle}>
        <Settings size={12} />
        {tSections("services")}
      </h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-[#4d4d4d] dark:text-[#a1a1a1]">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

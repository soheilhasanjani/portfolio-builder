import { notFound } from "next/navigation";
import { getData, hasLocale } from "./dictionaries";
import { collectStacksFromExperience } from "../data/stacks";
import { cn } from "../../lib/utils";
import { FloatingButtons } from "../components/floating-buttons";
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { StacksSection } from "../components/sections/stacks-section";
import { DomainsSection } from "../components/sections/domains-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { EducationSection } from "../components/sections/education-section";
import { ServicesSection } from "../components/sections/services-section";

export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const data = await getData(lang);
  const { profile, about, domains, services, experience, education } = data;
  const allStacks = collectStacksFromExperience(experience);
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <>
      <main dir={dir} className={cn("sans max-w-3xl mx-auto px-6 py-16 space-y-16")}>
        <HeroSection profile={profile} />
        <AboutSection about={about} />
        <StacksSection stacks={allStacks} />
        <DomainsSection domains={domains} />
        <ExperienceSection experience={experience} lang={lang} />
        <EducationSection education={education} lang={lang} />
        <ServicesSection services={services} />
      </main>
      <FloatingButtons lang={lang} />
    </>
  );
}

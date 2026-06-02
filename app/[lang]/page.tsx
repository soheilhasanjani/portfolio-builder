import { notFound } from "next/navigation";
import { getData, hasLocale } from "./dictionaries";
import {
  collectStacksFromExperience,
  sortedStackCodes,
} from "../../lib/stacks";
import { sortExperienceByTime, sortEducationByTime } from "../../lib/sort";
import { cn } from "../../lib/utils";
import { FloatingButtons } from "../components/floating-buttons";
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { StacksSection } from "../components/sections/stacks-section";
import { ImpactHighlightsSection } from "../components/sections/impact-highlights-section";
import { KeyProjectsSection } from "../components/sections/key-projects-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { EducationSection } from "../components/sections/education-section";
import { AdditionalInformationSection } from "../components/sections/additional-information-section";

export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const data = await getData(lang);
  const {
    profile,
    about,
    impact_highlights,
    experience,
    education,
    additional_information,
  } = data;
  const sortedExperience = sortExperienceByTime(experience);
  const sortedEducation = sortEducationByTime(education);
  const allStacks = sortedStackCodes(
    collectStacksFromExperience(sortedExperience),
  );
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <>
      <main
        dir={dir}
        className={cn("sans max-w-4xl mx-auto px-6 py-16 space-y-16")}
      >
        <HeroSection profile={profile} />
        <AboutSection about={about} />
        <StacksSection stacks={allStacks} />
        <ImpactHighlightsSection highlights={impact_highlights} />
        <KeyProjectsSection experience={sortedExperience} />
        <ExperienceSection experience={sortedExperience} lang={lang} />
        <EducationSection education={sortedEducation} lang={lang} />
        <AdditionalInformationSection items={additional_information} />
      </main>
      <FloatingButtons lang={lang} />
    </>
  );
}

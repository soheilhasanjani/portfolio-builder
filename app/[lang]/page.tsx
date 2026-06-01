import { Vazirmatn, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getData, hasLocale } from "./dictionaries";
import { collectSkillsFromExperience, getSkillLabel } from "../data/skills";
import { ProfileStatus } from "../data/types";
import { formatMonthYear, formatDuration } from "../../lib/date";
import { cn } from "../../lib/utils";
import { FloatingButtons } from "../components/FloatingButtons";
import { ExperienceNode } from "../components/experience-node";
import { SkillBadge } from "../components/SkillBadge";

function statusColor(status: ProfileStatus): { dot: string; ping: string } {
  switch (status) {
    case ProfileStatus.OpenToWork:
      return { dot: "bg-green-500", ping: "bg-green-400" };
    case ProfileStatus.Hiring:
      return { dot: "bg-blue-500", ping: "bg-blue-400" };
    case ProfileStatus.Unavailable:
      return { dot: "bg-gray-500", ping: "bg-gray-400" };
  }
}

const vazirmatn = Vazirmatn({ subsets: ["arabic"], display: "swap" });
const geist = Geist({ subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }];
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const [
    data,
    tSections,
    tContact,
    tAbout,
    tProfile,
    tHero,
    tProfileStatus,
    tExperience,
    tEmp,
    tLoc,
    tEdu,
  ] = await Promise.all([
    getData(lang),
    getTranslations("sections"),
    getTranslations("contact"),
    getTranslations("about"),
    getTranslations("profile"),
    getTranslations("hero"),
    getTranslations("profileStatus"),
    getTranslations("experience"),
    getTranslations("employmentType"),
    getTranslations("locationType"),
    getTranslations("education"),
  ]);

  const { profile, about, domains, services, experience, education } = data;
  const allSkills = collectSkillsFromExperience(experience);
  const dir = lang === "fa" ? "rtl" : "ltr";
  const font = lang === "fa" ? vazirmatn : geist;
  const monoVariable = lang === "fa" ? "" : geistMono.variable;

  // "present" sorts after any real date so treat it as a far-future value
  function toSortKey(date: string) {
    return date === "present" ? "9999-99" : date;
  }

  const sortedExperience = [...experience].sort((a, b) =>
    toSortKey(b.period.start).localeCompare(toSortKey(a.period.start)),
  );

  const sortedEducation = [...education].sort((a, b) =>
    toSortKey(b.period.start).localeCompare(toSortKey(a.period.start)),
  );

  function formatPeriod(date: string) {
    return date === "present"
      ? tExperience("present")
      : formatMonthYear(date, lang);
  }

  function formatDur(start: string, end: string) {
    return formatDuration(start, end, lang);
  }

  // Shared token classes
  const sectionTitle =
    "text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-gray-100";
  const badge =
    "px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300";
  const badgeSm =
    "px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300";

  return (
    <>
      <main
        dir={dir}
        className={cn(
          font.className,
          monoVariable,
          "max-w-3xl mx-auto px-6 py-16 space-y-16",
        )}
      >
        {/* Hero */}
        <section className="space-y-4">
          {profile.status && (
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="relative flex h-2 w-2">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    statusColor(profile.status).ping,
                  )}
                />
                <span
                  className={cn(
                    "relative inline-flex h-2 w-2 rounded-full",
                    statusColor(profile.status).dot,
                  )}
                />
              </span>
              <span>{tProfileStatus(profile.status)}</span>
            </div>
          )}

          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-gray-50">
              {tHero("greeting", {
                name: [
                  profile.first_name,
                  profile.additional_name,
                  profile.last_name,
                ]
                  .filter(Boolean)
                  .join(" "),
              })}
            </h1>
            <p className="text-3xl md:text-4xl font-bold leading-tight text-gray-700 dark:text-gray-300">
              {profile.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 dark:text-gray-500">
            {profile.industry && <span>{profile.industry}</span>}
            <span>{profile.location}</span>
            {profile.website && (
              <a
                href={profile.website}
                className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {tProfile("website")}
              </a>
            )}
            {profile.pronouns && <span>({profile.pronouns})</span>}
          </div>
        </section>

        {/* Contacts */}
        <section className="space-y-2">
          <h2 className={sectionTitle}>{tSections("contact")}</h2>
          <ul className="space-y-1 text-sm">
            {profile.contacts.map((c) => (
              <li key={c.type}>
                <span className="text-gray-500 dark:text-gray-400">
                  {tContact(c.type)}:
                </span>{" "}
                <a
                  href={c.href}
                  className="text-gray-700 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3">
            <h2 className={sectionTitle}>{tSections("about")}</h2>
          </div>
          <div className="md:col-span-9 space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-8">
              {about.summary}
            </p>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {tAbout("topSkills")}
              </p>
              <div className="flex flex-wrap gap-2">
                {about.top_skills.map((code) => (
                  <span key={code} className={badge}>
                    {getSkillLabel(code)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-4">
          <h2 className={sectionTitle}>{tSections("skills")}</h2>
          <div className="flex flex-wrap gap-3">
            {allSkills.map((code) => (
              <SkillBadge
                key={code}
                code={code}
                variant="circle"
                // isGrayscale
              />
            ))}
          </div>
        </section>

        {/* Domains */}
        <section className="space-y-2">
          <h2 className={sectionTitle}>{tSections("domains")}</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {domains.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        {sortedExperience.length > 0 && (
          <section className="space-y-8">
            <h2 className={sectionTitle}>{tSections("experience")}</h2>

            {sortedExperience.map((exp) => (
              <ExperienceNode
                key={exp.title}
                exp={exp}
                badgeSm={badgeSm}
                formatPeriod={formatPeriod}
                formatDuration={formatDur}
                tEmp={tEmp}
                tLoc={tLoc}
              />
            ))}
          </section>
        )}

        {/* Education */}
        {sortedEducation.length > 0 && (
          <section className="space-y-6">
            <h2 className={sectionTitle}>{tSections("education")}</h2>

            {sortedEducation.map((edu, i) => (
              <div key={i} className="space-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {[edu.degree, edu.field_of_study]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {formatPeriod(edu.period.start)} –{" "}
                    {formatPeriod(edu.period.end)}
                  </p>
                </div>

                {edu.grade && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-400 dark:text-gray-500">
                      {tEdu("grade")}:
                    </span>{" "}
                    {edu.grade}
                  </p>
                )}

                {edu.activities && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-400 dark:text-gray-500">
                      {tEdu("activities")}:
                    </span>{" "}
                    {edu.activities}
                  </p>
                )}

                {edu.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">
                    {edu.description}
                  </p>
                )}

                {edu.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((code) => (
                      <span key={code} className={badgeSm}>
                        {getSkillLabel(code)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Services */}
        <section className="space-y-2">
          <h2 className={sectionTitle}>{tSections("services")}</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </main>
      <FloatingButtons lang={lang} />
    </>
  );
}

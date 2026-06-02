import { getTranslations } from "next-intl/server";
import { Icon } from "../icons";
import { Section } from "../section";
import { ProjectCard } from "../ui/project-card";
import type { Experience } from "../../data/types";
import { deriveFeaturedProjects } from "../../../lib/projects";

export async function KeyProjectsSection({
  experience,
}: {
  experience: Experience[];
}) {
  const tSections = await getTranslations("sections");
  const featured = deriveFeaturedProjects(experience, 3);

  if (featured.length === 0) return null;

  return (
    <Section icon={<Icon name="star" size={12} />} title={tSections("keyProjects")}>
      <div className="grid grid-cols-3 gap-0.5">
        {featured.map((p) => (
          <ProjectCard
            key={p.name}
            title={p.name}
            description={p.description}
            descriptionClassName="line-clamp-5"
            stacks={p.tech_stack}
            stackLimit={5}
            className="p-8"
          />
        ))}
      </div>
    </Section>
  );
}

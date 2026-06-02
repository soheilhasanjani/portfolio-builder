import type { Experience, FeaturedProject } from "../app/data/types";

export function deriveFeaturedProjects(
  experience: Experience[],
  topN: number = 4,
): FeaturedProject[] {
  const all: Array<{ value: number; project: NonNullable<Experience["children"]>[number] }> = [];

  for (const exp of experience) {
    if (!exp.children) continue;
    for (const child of exp.children) {
      all.push({ value: child.value ?? 0, project: child });
    }
  }

  all.sort((a, b) => b.value - a.value);

  return all.slice(0, topN).map(({ project }) => ({
    name: project.title,
    description: project.description ?? "",
    tech_stack: project.stacks ?? [],
  }));
}

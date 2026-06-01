import type { Experience } from "./types";

export interface SkillDef {
  code: string;
  label: string;
  iconPath: string | null;
}

const ICON_BASE = "/images";

function icon(file: string): string {
  return `${ICON_BASE}/${file}`;
}

export const SKILLS: SkillDef[] = [
  // Frontend — Frameworks & Meta-frameworks
  { code: "react", label: "React", iconPath: icon("react.svg") },
  { code: "nextjs", label: "Next.js", iconPath: icon("nextjs.svg") },
  { code: "vuejs", label: "Vue.js", iconPath: null },
  { code: "nuxtjs", label: "Nuxt.js", iconPath: null },
  { code: "angular", label: "Angular", iconPath: null },
  { code: "svelte", label: "Svelte", iconPath: null },
  { code: "astro", label: "Astro", iconPath: null },
  { code: "remix", label: "Remix", iconPath: null },

  // Languages & markup
  { code: "typescript", label: "TypeScript", iconPath: icon("typescript.svg") },
  { code: "javascript", label: "JavaScript", iconPath: icon("javascript.svg") },
  { code: "html5", label: "HTML5", iconPath: icon("html5.svg") },
  { code: "css3", label: "CSS3", iconPath: icon("css3.svg") },
  { code: "sass", label: "Sass", iconPath: icon("sass.svg") },

  // State management
  { code: "zustand", label: "Zustand", iconPath: icon("zustand.svg") },
  { code: "redux", label: "Redux", iconPath: icon("redux.svg") },
  { code: "jotai", label: "Jotai", iconPath: null },
  { code: "mobx", label: "MobX", iconPath: null },
  { code: "recoil", label: "Recoil", iconPath: null },
  { code: "pinia", label: "Pinia", iconPath: null },

  // Data fetching
  {
    code: "react-query",
    label: "React Query",
    iconPath: icon("react-query.svg"),
  },
  { code: "swr", label: "SWR", iconPath: icon("swr.svg") },
  { code: "apollo", label: "Apollo Client", iconPath: null },
  { code: "axios", label: "Axios", iconPath: icon("axios.svg") },

  // UI libraries
  {
    code: "tailwindcss",
    label: "Tailwind CSS",
    iconPath: icon("tailwindcss.svg"),
  },
  { code: "mui", label: "Material UI", iconPath: icon("mui.svg") },
  { code: "shadcn-ui", label: "Shadcn UI", iconPath: icon("shadcn-ui.svg") },
  { code: "chakra-ui", label: "Chakra UI", iconPath: icon("chakra-ui.svg") },
  { code: "ant-design", label: "Ant Design", iconPath: icon("ant-design.svg") },
  { code: "bootstrap", label: "Bootstrap", iconPath: icon("bootstrap.svg") },
  { code: "radix-ui", label: "Radix UI", iconPath: icon("radix-ui.svg") },
  { code: "framer-motion", label: "Framer Motion", iconPath: null },
  { code: "jquery", label: "jQuery", iconPath: icon("jquery.svg") },
  { code: "react-select", label: "React Select", iconPath: null },
  { code: "swiper", label: "Swiper", iconPath: icon("swiper.svg") },

  // Forms & validation
  {
    code: "react-hook-form",
    label: "React Hook Form",
    iconPath: icon("react-hook-form.svg"),
  },
  { code: "zod", label: "Zod", iconPath: icon("zod.png") },

  // Data viz & tables
  {
    code: "tanstack-table",
    label: "TanStack Table",
    iconPath: icon("tanstack.png"),
  },
  { code: "nivo", label: "Nivo Charts", iconPath: null },
  { code: "d3", label: "D3.js", iconPath: icon("d3.svg") },
  { code: "chartjs", label: "Chart.js", iconPath: icon("chartjs.svg") },

  // Animation & 3D
  { code: "gsap", label: "GSAP", iconPath: icon("gsap.svg") },
  { code: "three", label: "Three.js", iconPath: icon("three.svg") },

  // Templating
  { code: "handlebars", label: "Handlebars", iconPath: icon("handlebars.svg") },

  // Date utilities
  { code: "date-fns", label: "date-fns", iconPath: icon("date-fns.svg") },

  // Media processing
  { code: "ffmpeg", label: "FFmpeg", iconPath: icon("ffmpeg.svg") },

  // Build & bundlers
  { code: "vite", label: "Vite", iconPath: icon("vite.svg") },
  { code: "webpack", label: "Webpack", iconPath: icon("webpack.svg") },
  { code: "gulp", label: "Gulp", iconPath: icon("gulp.svg") },

  // Package managers
  { code: "npm", label: "npm", iconPath: icon("npm.svg") },
  { code: "yarn", label: "Yarn", iconPath: icon("yarn.svg") },
  { code: "pnpm", label: "pnpm", iconPath: icon("pnpm.svg") },

  // Testing
  { code: "jest", label: "Jest", iconPath: null },
  { code: "vitest", label: "Vitest", iconPath: null },
  { code: "playwright", label: "Playwright", iconPath: null },
  { code: "cypress", label: "Cypress", iconPath: null },
  { code: "testing-library", label: "Testing Library", iconPath: null },

  // Dev tooling
  { code: "storybook", label: "Storybook", iconPath: icon("storybook.svg") },
  { code: "git", label: "Git", iconPath: icon("git.svg") },

  // Special frontend targets
  { code: "pwa", label: "PWA", iconPath: icon("pwa.svg") },
  {
    code: "chrome-extension",
    label: "Chrome Extension",
    iconPath: icon("chrome-extension.svg"),
  },
  { code: "micro-frontends", label: "Micro-Frontends", iconPath: null },

  // Backend — Runtime & frameworks
  { code: "nodejs", label: "Node.js", iconPath: icon("nodejs.svg") },
  { code: "nestjs", label: "NestJS", iconPath: icon("nestjs.svg") },
  { code: "expressjs", label: "Express.js", iconPath: icon("expressjs.svg") },
  { code: "fastify", label: "Fastify", iconPath: null },
  { code: "hono", label: "Hono", iconPath: icon("hono.svg") },

  // Databases
  { code: "postgresql", label: "PostgreSQL", iconPath: icon("postgresql.svg") },
  { code: "mysql", label: "MySQL", iconPath: null },
  { code: "mongodb", label: "MongoDB", iconPath: null },
  { code: "redis", label: "Redis", iconPath: icon("redis.svg") },
  { code: "sqlite", label: "SQLite", iconPath: null },
  { code: "elasticsearch", label: "Elasticsearch", iconPath: null },

  // ORMs
  { code: "prisma", label: "Prisma", iconPath: icon("prisma.svg") },
  { code: "typeorm", label: "TypeORM", iconPath: null },
  { code: "drizzle", label: "Drizzle ORM", iconPath: null },
  { code: "mongoose", label: "Mongoose", iconPath: null },
  { code: "sequelize", label: "Sequelize", iconPath: null },

  // Auth
  { code: "jwt", label: "JWT", iconPath: null },
  { code: "oauth2", label: "OAuth2", iconPath: null },
  { code: "passport", label: "Passport.js", iconPath: null },

  // API styles & protocols
  { code: "graphql", label: "GraphQL", iconPath: null },
  { code: "rest-api", label: "REST API", iconPath: null },
  { code: "websocket", label: "WebSocket", iconPath: null },
  { code: "grpc", label: "gRPC", iconPath: null },
  { code: "trpc", label: "tRPC", iconPath: null },

  // Storage
  { code: "aws-s3", label: "AWS S3", iconPath: null },
  { code: "aws-lambda", label: "AWS Lambda", iconPath: null },

  // DevOps / infra
  { code: "docker", label: "Docker", iconPath: icon("docker.svg") },
  { code: "kubernetes", label: "Kubernetes", iconPath: null },
  { code: "nginx", label: "Nginx", iconPath: icon("nginx.svg") },

  // Message queues / async
  { code: "kafka", label: "Apache Kafka", iconPath: null },
  { code: "rabbitmq", label: "RabbitMQ", iconPath: null },
  { code: "bullmq", label: "BullMQ", iconPath: null },
];

export const skillMap = new Map(SKILLS.map((s) => [s.code, s]));

export function getSkillLabel(code: string): string {
  return skillMap.get(code)?.label ?? code;
}

export function getSkillIconPath(code: string): string | null {
  return skillMap.get(code)?.iconPath ?? null;
}

/**
 * Walks an Experience tree and returns every skill code referenced, deduped
 * in first-seen order. Used to derive the Skills section from the source of
 * truth (the experience list) so we don't maintain a duplicate static list.
 */
export function collectSkillsFromExperience(
  experience: Experience[],
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  const visit = (codes: string[] | undefined) => {
    if (!codes) return;
    for (const code of codes) {
      if (!seen.has(code)) {
        seen.add(code);
        out.push(code);
      }
    }
  };

  for (const exp of experience) {
    visit(exp.skills);
    if (exp.children) {
      for (const child of exp.children) visit(child.skills);
    }
  }

  return out;
}

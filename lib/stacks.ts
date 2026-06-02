export type StackCategory =
  | "languages"
  | "frontend"
  | "state-data"
  | "backend"
  | "tooling"
  | "devops";

export interface StackDef {
  code: string;
  label: string;
  iconPath: string | null;
  invertOnDark?: boolean;
  priority: number;
  category: StackCategory;
}

export const STACK_CATEGORIES: { code: StackCategory; label: string; order: number }[] = [
  { code: "languages", label: "Languages", order: 1 },
  { code: "frontend", label: "Frontend", order: 2 },
  { code: "state-data", label: "State & Data", order: 3 },
  { code: "backend", label: "Backend", order: 4 },
  { code: "tooling", label: "Tooling", order: 5 },
  { code: "devops", label: "DevOps", order: 6 },
];

const CATEGORY_LABEL = new Map(STACK_CATEGORIES.map((c) => [c.code, c.label]));

const ICON_BASE = "/images";

function icon(file: string): string {
  return `${ICON_BASE}/${file}`;
}

export const STACKS: StackDef[] = [
  // Frontend — Frameworks & Meta-frameworks
  { code: "react", label: "REACT", iconPath: icon("react.svg"), priority: 100, category: "frontend" },
  { code: "nextjs", label: "NEXT.JS", iconPath: icon("nextjs.svg"), priority: 99, category: "frontend" },
  { code: "vuejs", label: "VUE.JS", iconPath: null, priority: 55, category: "frontend" },
  { code: "nuxtjs", label: "NUXT.JS", iconPath: null, priority: 52, category: "frontend" },
  { code: "angular", label: "ANGULAR", iconPath: null, priority: 50, category: "frontend" },
  { code: "svelte", label: "SVELTE", iconPath: null, priority: 45, category: "frontend" },
  { code: "astro", label: "ASTRO", iconPath: null, priority: 42, category: "frontend" },
  { code: "remix", label: "REMIX", iconPath: null, priority: 40, category: "frontend" },
  { code: "react-router", label: "REACT ROUTER", iconPath: icon("react-router.svg"), priority: 38, category: "frontend" },
  { code: "create-react-app", label: "CREATE REACT APP", iconPath: icon("create-react-app.svg"), priority: 20, category: "frontend" },

  // Languages & markup
  { code: "typescript", label: "TYPESCRIPT", iconPath: icon("typescript.svg"), priority: 98, category: "languages" },
  { code: "javascript", label: "JAVASCRIPT", iconPath: icon("javascript.svg"), priority: 95, category: "languages" },
  { code: "html5", label: "HTML5", iconPath: icon("html5.svg"), priority: 65, category: "languages" },
  { code: "css3", label: "CSS3", iconPath: icon("css3.svg"), priority: 62, category: "languages" },
  { code: "sass", label: "SASS", iconPath: icon("sass.svg"), priority: 55, category: "languages" },

  // State management
  { code: "zustand", label: "ZUSTAND", iconPath: icon("zustand.svg"), priority: 85, category: "state-data" },
  { code: "redux", label: "REDUX", iconPath: icon("redux.svg"), priority: 82, category: "state-data" },
  { code: "jotai", label: "JOTAI", iconPath: null, priority: 52, category: "state-data" },
  { code: "mobx", label: "MOBX", iconPath: null, priority: 48, category: "state-data" },
  { code: "recoil", label: "RECOIL", iconPath: null, priority: 45, category: "state-data" },
  { code: "pinia", label: "PINIA", iconPath: null, priority: 42, category: "state-data" },

  // Data fetching
  { code: "react-query", label: "REACT QUERY", iconPath: icon("react-query.svg"), priority: 88, category: "state-data" },
  { code: "swr", label: "SWR", iconPath: icon("swr.svg"), priority: 60, category: "state-data" },
  { code: "apollo", label: "APOLLO CLIENT", iconPath: null, priority: 55, category: "state-data" },
  { code: "axios", label: "AXIOS", iconPath: icon("axios.svg"), priority: 78, category: "state-data" },

  // UI libraries
  { code: "tailwindcss", label: "TAILWIND CSS", iconPath: icon("tailwindcss.svg"), priority: 80, category: "frontend" },
  { code: "mui", label: "MATERIAL UI", iconPath: icon("mui.svg"), priority: 72, category: "frontend" },
  { code: "shadcn-ui", label: "SHADCN UI", iconPath: icon("shadcn-ui.svg"), invertOnDark: true, priority: 75, category: "frontend" },
  { code: "chakra-ui", label: "CHAKRA UI", iconPath: icon("chakra-ui.svg"), priority: 68, category: "frontend" },
  { code: "ant-design", label: "ANT DESIGN", iconPath: icon("ant-design.svg"), priority: 65, category: "frontend" },
  { code: "bootstrap", label: "BOOTSTRAP", iconPath: icon("bootstrap.svg"), priority: 55, category: "frontend" },
  { code: "radix-ui", label: "RADIX UI", iconPath: icon("radix-ui.svg"), invertOnDark: true, priority: 62, category: "frontend" },
  { code: "framer-motion", label: "FRAMER MOTION", iconPath: null, priority: 50, category: "frontend" },
  { code: "jquery", label: "JQUERY", iconPath: icon("jquery.svg"), priority: 45, category: "frontend" },
  { code: "react-select", label: "REACT SELECT", iconPath: null, priority: 10, category: "frontend" },
  { code: "swiper", label: "SWIPER", iconPath: icon("swiper.svg"), priority: 8, category: "frontend" },

  // Forms & validation
  { code: "react-hook-form", label: "REACT HOOK FORM", iconPath: icon("react-hook-form.svg"), priority: 70, category: "state-data" },
  { code: "formik", label: "FORMIK", iconPath: icon("formik.svg"), invertOnDark: true, priority: 65, category: "state-data" },
  { code: "zod", label: "ZOD", iconPath: icon("zod.png"), priority: 68, category: "state-data" },

  // Data viz & tables
  { code: "tanstack-table", label: "TANSTACK TABLE", iconPath: icon("tanstack.png"), priority: 58, category: "tooling" },
  { code: "nivo", label: "NIVO CHARTS", iconPath: null, priority: 45, category: "tooling" },
  { code: "d3", label: "D3.JS", iconPath: icon("d3.svg"), priority: 50, category: "tooling" },
  { code: "chartjs", label: "CHART.JS", iconPath: icon("chartjs.svg"), priority: 48, category: "tooling" },

  // Mapping
  { code: "leaflet", label: "LEAFLET.JS", iconPath: icon("leaflet.svg"), priority: 35, category: "tooling" },

  // Animation & 3D
  { code: "gsap", label: "GSAP", iconPath: icon("gsap.svg"), invertOnDark: true, priority: 50, category: "tooling" },
  { code: "three", label: "THREE.JS", iconPath: icon("three.svg"), invertOnDark: true, priority: 52, category: "tooling" },

  // Templating
  { code: "handlebars", label: "HANDLEBARS", iconPath: icon("handlebars.svg"), priority: 20, category: "tooling" },

  // Date utilities
  { code: "date-fns", label: "DATE-FNS", iconPath: icon("date-fns.svg"), priority: 42, category: "tooling" },

  // Media processing
  { code: "ffmpeg", label: "FFMPEG", iconPath: icon("ffmpeg.svg"), priority: 35, category: "tooling" },

  // Build & bundlers
  { code: "vite", label: "VITE", iconPath: icon("vite.svg"), priority: 60, category: "tooling" },
  { code: "webpack", label: "WEBPACK", iconPath: icon("webpack.svg"), priority: 50, category: "tooling" },
  { code: "nx", label: "NX", iconPath: icon("nx.svg"), priority: 48, category: "tooling" },
  { code: "gulp", label: "GULP", iconPath: icon("gulp.svg"), priority: 25, category: "tooling" },
  { code: "grunt", label: "GRUNT", iconPath: icon("grunt.svg"), priority: 22, category: "tooling" },

  // Package managers
  { code: "npm", label: "NPM", iconPath: icon("npm.svg"), priority: 30, category: "tooling" },
  { code: "yarn", label: "YARN", iconPath: icon("yarn.svg"), priority: 28, category: "tooling" },
  { code: "pnpm", label: "PNPM", iconPath: icon("pnpm.svg"), priority: 28, category: "tooling" },

  // Testing
  { code: "jest", label: "JEST", iconPath: null, priority: 40, category: "tooling" },
  { code: "vitest", label: "VITEST", iconPath: null, priority: 38, category: "tooling" },
  { code: "playwright", label: "PLAYWRIGHT", iconPath: null, priority: 36, category: "tooling" },
  { code: "cypress", label: "CYPRESS", iconPath: null, priority: 34, category: "tooling" },
  { code: "testing-library", label: "TESTING LIBRARY", iconPath: null, priority: 32, category: "tooling" },

  // Dev tooling
  { code: "storybook", label: "STORYBOOK", iconPath: icon("storybook.svg"), priority: 42, category: "tooling" },
  { code: "git", label: "GIT", iconPath: icon("git.svg"), priority: 65, category: "tooling" },
  { code: "github", label: "GITHUB", iconPath: icon("github.svg"), invertOnDark: true, priority: 62, category: "tooling" },
  { code: "gitlab", label: "GITLAB", iconPath: icon("gitlab.svg"), priority: 60, category: "tooling" },
  { code: "bitbucket", label: "BITBUCKET", iconPath: icon("bitbucket.svg"), priority: 50, category: "tooling" },
  { code: "github-copilot", label: "GITHUB COPILOT", iconPath: icon("github-copilot.svg"), priority: 55, category: "tooling" },

  // AI tools
  { code: "openai", label: "OPENAI", iconPath: icon("openai.svg"), priority: 55, category: "tooling" },
  { code: "claude", label: "CLAUDE CODE", iconPath: icon("claude.svg"), priority: 52, category: "tooling" },
  { code: "codex", label: "CODEX", iconPath: icon("codex.svg"), priority: 48, category: "tooling" },

  // Special frontend targets
  { code: "pwa", label: "PWA", iconPath: icon("pwa.svg"), invertOnDark: true, priority: 45, category: "frontend" },
  { code: "chrome-extension", label: "CHROME EXTENSION", iconPath: icon("chrome-extension.svg"), priority: 35, category: "frontend" },
  { code: "micro-frontends", label: "MICRO-FRONTENDS", iconPath: null, priority: 40, category: "frontend" },

  // Backend — Runtime & frameworks
  { code: "nodejs", label: "NODE.JS", iconPath: icon("nodejs.svg"), priority: 73, category: "backend" },
  { code: "nestjs", label: "NESTJS", iconPath: icon("nestjs.svg"), priority: 72, category: "backend" },
  { code: "expressjs", label: "EXPRESS.JS", iconPath: icon("expressjs.svg"), priority: 55, category: "backend" },
  { code: "fastify", label: "FASTIFY", iconPath: null, priority: 40, category: "backend" },
  { code: "hono", label: "HONO", iconPath: icon("hono.svg"), priority: 35, category: "backend" },

  // Databases
  { code: "postgresql", label: "POSTGRESQL", iconPath: icon("postgresql.svg"), priority: 48, category: "backend" },
  { code: "mysql", label: "MYSQL", iconPath: null, priority: 38, category: "backend" },
  { code: "mongodb", label: "MONGODB", iconPath: null, priority: 45, category: "backend" },
  { code: "redis", label: "REDIS", iconPath: icon("redis.svg"), priority: 42, category: "backend" },
  { code: "sqlite", label: "SQLITE", iconPath: null, priority: 25, category: "backend" },
  { code: "elasticsearch", label: "ELASTICSEARCH", iconPath: null, priority: 22, category: "backend" },

  // ORMs
  { code: "prisma", label: "PRISMA", iconPath: icon("prisma.svg"), invertOnDark: true, priority: 62, category: "backend" },
  { code: "typeorm", label: "TYPEORM", iconPath: null, priority: 35, category: "backend" },
  { code: "drizzle", label: "DRIZZLE ORM", iconPath: null, priority: 32, category: "backend" },
  { code: "mongoose", label: "MONGOOSE", iconPath: null, priority: 30, category: "backend" },
  { code: "sequelize", label: "SEQUELIZE", iconPath: null, priority: 28, category: "backend" },

  // Auth
  { code: "jwt", label: "JWT", iconPath: icon("jwt.svg"), priority: 45, category: "backend" },
  { code: "oauth2", label: "OAUTH2", iconPath: null, priority: 38, category: "backend" },
  { code: "passport", label: "PASSPORT.JS", iconPath: null, priority: 32, category: "backend" },

  // API styles & protocols
  { code: "graphql", label: "GRAPHQL", iconPath: null, priority: 40, category: "backend" },
  { code: "rest-api", label: "REST API", iconPath: null, priority: 45, category: "backend" },
  { code: "websocket", label: "WEBSOCKET", iconPath: null, priority: 42, category: "backend" },
  { code: "socket-io", label: "SOCKET.IO", iconPath: icon("socket-io.svg"), invertOnDark: true, priority: 41, category: "backend" },
  { code: "webrtc", label: "WEBRTC", iconPath: icon("webrtc.svg"), priority: 40, category: "backend" },
  { code: "grpc", label: "GRPC", iconPath: null, priority: 28, category: "backend" },
  { code: "trpc", label: "TRPC", iconPath: null, priority: 30, category: "backend" },

  // Storage
  { code: "aws-s3", label: "AWS S3", iconPath: null, priority: 40, category: "devops" },
  { code: "aws-lambda", label: "AWS LAMBDA", iconPath: null, priority: 35, category: "devops" },

  // DevOps / infra
  { code: "docker", label: "DOCKER", iconPath: icon("docker.svg"), priority: 58, category: "devops" },
  { code: "vercel", label: "VERCEL", iconPath: icon("vercel.svg"), invertOnDark: true, priority: 55, category: "devops" },
  { code: "cloudflare", label: "CLOUDFLARE", iconPath: icon("cloudflare.svg"), priority: 52, category: "devops" },
  { code: "kubernetes", label: "KUBERNETES", iconPath: null, priority: 32, category: "devops" },
  { code: "nginx", label: "NGINX", iconPath: icon("nginx.svg"), priority: 30, category: "devops" },

  // Message queues / async
  { code: "kafka", label: "APACHE KAFKA", iconPath: null, priority: 22, category: "backend" },
  { code: "rabbitmq", label: "RABBITMQ", iconPath: null, priority: 20, category: "backend" },
  { code: "bullmq", label: "BULLMQ", iconPath: null, priority: 18, category: "backend" },
];

const stackMap = new Map(STACKS.map((s) => [s.code, s]));

export function getStack(code: string): StackDef {
  return (
    stackMap.get(code) ?? {
      code,
      label: code.toUpperCase(),
      iconPath: null,
      priority: 0,
      category: "tooling",
    }
  );
}

export function sortedStackCodes(codes: string[]): string[] {
  return [...codes].sort((a, b) => getStack(b).priority - getStack(a).priority);
}

export interface GroupedStacks {
  category: StackCategory;
  label: string;
  codes: string[];
}

export function groupStacksByCategory(codes: string[]): GroupedStacks[] {
  const buckets = new Map<StackCategory, string[]>();
  for (const code of codes) {
    const cat = getStack(code).category;
    const arr = buckets.get(cat) ?? [];
    arr.push(code);
    buckets.set(cat, arr);
  }

  return STACK_CATEGORIES.filter((c) => buckets.has(c.code)).map((c) => ({
    category: c.code,
    label: CATEGORY_LABEL.get(c.code)!,
    codes: sortedStackCodes(buckets.get(c.code)!),
  }));
}

type WithStacks = {
  stacks?: string[];
  children?: Array<{ stacks?: string[] }>;
};

export function collectStacksFromExperience(
  experience: WithStacks[],
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
    visit(exp.stacks);
    if (exp.children) {
      for (const child of exp.children) visit(child.stacks);
    }
  }

  return out;
}

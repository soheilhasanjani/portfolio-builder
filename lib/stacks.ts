export interface StackDef {
  code: string;
  label: string;
  iconPath: string | null;
  invertOnDark?: boolean;
  priority: number;
}

const ICON_BASE = "/images";

function icon(file: string): string {
  return `${ICON_BASE}/${file}`;
}

export const STACKS: StackDef[] = [
  // Frontend — Frameworks & Meta-frameworks
  { code: "react", label: "REACT", iconPath: icon("react.svg"), priority: 100 },
  {
    code: "nextjs",
    label: "NEXT.JS",
    iconPath: icon("nextjs.svg"),
    priority: 99,
  },
  { code: "vuejs", label: "VUE.JS", iconPath: null, priority: 55 },
  { code: "nuxtjs", label: "NUXT.JS", iconPath: null, priority: 52 },
  { code: "angular", label: "ANGULAR", iconPath: null, priority: 50 },
  { code: "svelte", label: "SVELTE", iconPath: null, priority: 45 },
  { code: "astro", label: "ASTRO", iconPath: null, priority: 42 },
  { code: "remix", label: "REMIX", iconPath: null, priority: 40 },
  { code: "react-router", label: "REACT ROUTER", iconPath: icon("react-router.svg"), priority: 38 },
  { code: "create-react-app", label: "CREATE REACT APP", iconPath: icon("create-react-app.svg"), priority: 20 },

  // Languages & markup
  {
    code: "typescript",
    label: "TYPESCRIPT",
    iconPath: icon("typescript.svg"),
    priority: 98,
  },
  {
    code: "javascript",
    label: "JAVASCRIPT",
    iconPath: icon("javascript.svg"),
    priority: 95,
  },
  { code: "html5", label: "HTML5", iconPath: icon("html5.svg"), priority: 65 },
  { code: "css3", label: "CSS3", iconPath: icon("css3.svg"), priority: 62 },
  { code: "sass", label: "SASS", iconPath: icon("sass.svg"), priority: 55 },

  // State management
  {
    code: "zustand",
    label: "ZUSTAND",
    iconPath: icon("zustand.svg"),
    priority: 85,
  },
  { code: "redux", label: "REDUX", iconPath: icon("redux.svg"), priority: 82 },
  { code: "jotai", label: "JOTAI", iconPath: null, priority: 52 },
  { code: "mobx", label: "MOBX", iconPath: null, priority: 48 },
  { code: "recoil", label: "RECOIL", iconPath: null, priority: 45 },
  { code: "pinia", label: "PINIA", iconPath: null, priority: 42 },

  // Data fetching
  {
    code: "react-query",
    label: "REACT QUERY",
    iconPath: icon("react-query.svg"),
    priority: 88,
  },
  { code: "swr", label: "SWR", iconPath: icon("swr.svg"), priority: 60 },
  { code: "apollo", label: "APOLLO CLIENT", iconPath: null, priority: 55 },
  { code: "axios", label: "AXIOS", iconPath: icon("axios.svg"), priority: 78 },

  // UI libraries
  {
    code: "tailwindcss",
    label: "TAILWIND CSS",
    iconPath: icon("tailwindcss.svg"),
    priority: 80,
  },
  {
    code: "mui",
    label: "MATERIAL UI",
    iconPath: icon("mui.svg"),
    priority: 72,
  },
  {
    code: "shadcn-ui",
    label: "SHADCN UI",
    iconPath: icon("shadcn-ui.svg"),
    invertOnDark: true,
    priority: 75,
  },
  {
    code: "chakra-ui",
    label: "CHAKRA UI",
    iconPath: icon("chakra-ui.svg"),
    priority: 68,
  },
  {
    code: "ant-design",
    label: "ANT DESIGN",
    iconPath: icon("ant-design.svg"),
    priority: 65,
  },
  {
    code: "bootstrap",
    label: "BOOTSTRAP",
    iconPath: icon("bootstrap.svg"),
    priority: 55,
  },
  {
    code: "radix-ui",
    label: "RADIX UI",
    iconPath: icon("radix-ui.svg"),
    invertOnDark: true,
    priority: 62,
  },
  {
    code: "framer-motion",
    label: "FRAMER MOTION",
    iconPath: null,
    priority: 50,
  },
  {
    code: "jquery",
    label: "JQUERY",
    iconPath: icon("jquery.svg"),
    priority: 45,
  },
  { code: "react-select", label: "REACT SELECT", iconPath: null, priority: 10 },
  {
    code: "swiper",
    label: "SWIPER",
    iconPath: icon("swiper.svg"),
    priority: 8,
  },

  // Forms & validation
  {
    code: "react-hook-form",
    label: "REACT HOOK FORM",
    iconPath: icon("react-hook-form.svg"),
    priority: 70,
  },
  {
    code: "formik",
    label: "FORMIK",
    iconPath: icon("formik.svg"),
    invertOnDark: true,
    priority: 65,
  },
  { code: "zod", label: "ZOD", iconPath: icon("zod.png"), priority: 68 },

  // Data viz & tables
  {
    code: "tanstack-table",
    label: "TANSTACK TABLE",
    iconPath: icon("tanstack.png"),
    priority: 58,
  },
  { code: "nivo", label: "NIVO CHARTS", iconPath: null, priority: 45 },
  { code: "d3", label: "D3.JS", iconPath: icon("d3.svg"), priority: 50 },
  {
    code: "chartjs",
    label: "CHART.JS",
    iconPath: icon("chartjs.svg"),
    priority: 48,
  },

  // Mapping
  {
    code: "leaflet",
    label: "LEAFLET.JS",
    iconPath: icon("leaflet.svg"),
    priority: 35,
  },

  // Animation & 3D
  {
    code: "gsap",
    label: "GSAP",
    iconPath: icon("gsap.svg"),
    invertOnDark: true,
    priority: 50,
  },
  {
    code: "three",
    label: "THREE.JS",
    iconPath: icon("three.svg"),
    invertOnDark: true,
    priority: 52,
  },

  // Templating
  {
    code: "handlebars",
    label: "HANDLEBARS",
    iconPath: icon("handlebars.svg"),
    priority: 20,
  },

  // Date utilities
  {
    code: "date-fns",
    label: "DATE-FNS",
    iconPath: icon("date-fns.svg"),
    priority: 42,
  },

  // Media processing
  {
    code: "ffmpeg",
    label: "FFMPEG",
    iconPath: icon("ffmpeg.svg"),
    priority: 35,
  },

  // Build & bundlers
  { code: "vite", label: "VITE", iconPath: icon("vite.svg"), priority: 60 },
  {
    code: "webpack",
    label: "WEBPACK",
    iconPath: icon("webpack.svg"),
    priority: 50,
  },
  {
    code: "nx",
    label: "NX",
    iconPath: icon("nx.svg"),
    priority: 48,
  },
  { code: "gulp", label: "GULP", iconPath: icon("gulp.svg"), priority: 25 },
  { code: "grunt", label: "GRUNT", iconPath: icon("grunt.svg"), priority: 22 },

  // Package managers
  { code: "npm", label: "NPM", iconPath: icon("npm.svg"), priority: 30 },
  { code: "yarn", label: "YARN", iconPath: icon("yarn.svg"), priority: 28 },
  { code: "pnpm", label: "PNPM", iconPath: icon("pnpm.svg"), priority: 28 },

  // Testing
  { code: "jest", label: "JEST", iconPath: null, priority: 40 },
  { code: "vitest", label: "VITEST", iconPath: null, priority: 38 },
  { code: "playwright", label: "PLAYWRIGHT", iconPath: null, priority: 36 },
  { code: "cypress", label: "CYPRESS", iconPath: null, priority: 34 },
  {
    code: "testing-library",
    label: "TESTING LIBRARY",
    iconPath: null,
    priority: 32,
  },

  // Dev tooling
  {
    code: "storybook",
    label: "STORYBOOK",
    iconPath: icon("storybook.svg"),
    priority: 42,
  },
  { code: "git", label: "GIT", iconPath: icon("git.svg"), priority: 65 },
  { code: "github", label: "GITHUB", iconPath: icon("github.svg"), invertOnDark: true, priority: 62 },
  { code: "gitlab", label: "GITLAB", iconPath: icon("gitlab.svg"), priority: 60 },
  { code: "bitbucket", label: "BITBUCKET", iconPath: icon("bitbucket.svg"), priority: 50 },
  { code: "github-copilot", label: "GITHUB COPILOT", iconPath: icon("github-copilot.svg"), priority: 55 },

  // AI tools
  { code: "openai", label: "OPENAI", iconPath: icon("openai.svg"), priority: 55 },
  { code: "claude", label: "CLAUDE CODE", iconPath: icon("claude.svg"), priority: 52 },
  { code: "codex", label: "CODEX", iconPath: icon("codex.svg"), priority: 48 },

  // Special frontend targets
  {
    code: "pwa",
    label: "PWA",
    iconPath: icon("pwa.svg"),
    invertOnDark: true,
    priority: 45,
  },
  {
    code: "chrome-extension",
    label: "CHROME EXTENSION",
    iconPath: icon("chrome-extension.svg"),
    priority: 35,
  },
  {
    code: "micro-frontends",
    label: "MICRO-FRONTENDS",
    iconPath: null,
    priority: 40,
  },

  // Backend — Runtime & frameworks
  {
    code: "nodejs",
    label: "NODE.JS",
    iconPath: icon("nodejs.svg"),
    priority: 73,
  },
  {
    code: "nestjs",
    label: "NESTJS",
    iconPath: icon("nestjs.svg"),
    priority: 72,
  },
  {
    code: "expressjs",
    label: "EXPRESS.JS",
    iconPath: icon("expressjs.svg"),
    priority: 55,
  },
  { code: "fastify", label: "FASTIFY", iconPath: null, priority: 40 },
  { code: "hono", label: "HONO", iconPath: icon("hono.svg"), priority: 35 },

  // Databases
  {
    code: "postgresql",
    label: "POSTGRESQL",
    iconPath: icon("postgresql.svg"),
    priority: 48,
  },
  { code: "mysql", label: "MYSQL", iconPath: null, priority: 38 },
  { code: "mongodb", label: "MONGODB", iconPath: null, priority: 45 },
  { code: "redis", label: "REDIS", iconPath: icon("redis.svg"), priority: 42 },
  { code: "sqlite", label: "SQLITE", iconPath: null, priority: 25 },
  {
    code: "elasticsearch",
    label: "ELASTICSEARCH",
    iconPath: null,
    priority: 22,
  },

  // ORMs
  {
    code: "prisma",
    label: "PRISMA",
    iconPath: icon("prisma.svg"),
    invertOnDark: true,
    priority: 62,
  },
  { code: "typeorm", label: "TYPEORM", iconPath: null, priority: 35 },
  { code: "drizzle", label: "DRIZZLE ORM", iconPath: null, priority: 32 },
  { code: "mongoose", label: "MONGOOSE", iconPath: null, priority: 30 },
  { code: "sequelize", label: "SEQUELIZE", iconPath: null, priority: 28 },

  // Auth
  { code: "jwt", label: "JWT", iconPath: icon("jwt.svg"), priority: 45 },
  { code: "oauth2", label: "OAUTH2", iconPath: null, priority: 38 },
  { code: "passport", label: "PASSPORT.JS", iconPath: null, priority: 32 },

  // API styles & protocols
  { code: "graphql", label: "GRAPHQL", iconPath: null, priority: 40 },
  { code: "rest-api", label: "REST API", iconPath: null, priority: 45 },
  { code: "websocket", label: "WEBSOCKET", iconPath: null, priority: 42 },
  {
    code: "socket-io",
    label: "SOCKET.IO",
    iconPath: icon("socket-io.svg"),
    invertOnDark: true,
    priority: 41,
  },
  {
    code: "webrtc",
    label: "WEBRTC",
    iconPath: icon("webrtc.svg"),
    priority: 40,
  },
  { code: "grpc", label: "GRPC", iconPath: null, priority: 28 },
  { code: "trpc", label: "TRPC", iconPath: null, priority: 30 },

  // Storage
  { code: "aws-s3", label: "AWS S3", iconPath: null, priority: 40 },
  { code: "aws-lambda", label: "AWS LAMBDA", iconPath: null, priority: 35 },

  // DevOps / infra
  {
    code: "docker",
    label: "DOCKER",
    iconPath: icon("docker.svg"),
    priority: 58,
  },
  { code: "vercel", label: "VERCEL", iconPath: icon("vercel.svg"), invertOnDark: true, priority: 55 },
  { code: "cloudflare", label: "CLOUDFLARE", iconPath: icon("cloudflare.svg"), priority: 52 },
  { code: "kubernetes", label: "KUBERNETES", iconPath: null, priority: 32 },
  { code: "nginx", label: "NGINX", iconPath: icon("nginx.svg"), priority: 30 },

  // Message queues / async
  { code: "kafka", label: "APACHE KAFKA", iconPath: null, priority: 22 },
  { code: "rabbitmq", label: "RABBITMQ", iconPath: null, priority: 20 },
  { code: "bullmq", label: "BULLMQ", iconPath: null, priority: 18 },
];

const stackMap = new Map(STACKS.map((s) => [s.code, s]));

export function getStack(code: string): StackDef {
  return (
    stackMap.get(code) ?? {
      code,
      label: code.toUpperCase(),
      iconPath: null,
      priority: 0,
    }
  );
}

export function sortedStackCodes(codes: string[]): string[] {
  return [...codes].sort((a, b) => getStack(b).priority - getStack(a).priority);
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

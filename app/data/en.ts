import type { Portfolio } from "./types";
import {
  ContactType,
  EmploymentType,
  ExperienceType,
  LocationType,
  ProfileStatus,
} from "./types";

const en: Portfolio = {
  profile: {
    first_name: "Soheil",
    last_name: "Hasanjani Mir",
    headline: "Senior Frontend Engineer | Backend Developer (NestJS)",
    industry: "Computer Software",
    location: "Tehran, Iran",
    website: "https://soheilhasanjani.dev",
    status: ProfileStatus.OpenToWork,
    contacts: [
      {
        type: ContactType.Email,
        value: "soheilhasanjani@gmail.com",
        href: "mailto:soheilhasanjani@gmail.com",
      },
      {
        type: ContactType.Phone,
        value: "09390286828",
        href: "tel:09390286828",
      },
      {
        type: ContactType.GitHub,
        value: "github.com/soheilhasanjani",
        href: "https://github.com/soheilhasanjani",
      },
      {
        type: ContactType.LinkedIn,
        value: "linkedin.com/in/soheilhasanjani",
        href: "https://www.linkedin.com/in/soheilhasanjani/",
      },
      {
        type: ContactType.Telegram,
        value: "@Stele1999",
        href: "https://t.me/Stele1999",
      },
    ],
    languages: {
      persian: "native",
      english: "reading_and_basic_communication",
    },
  },

  about: {
    summary:
      "Frontend developer with 8–9 years of professional experience building scalable web applications. Background in financial (Crypto/Forex), e-commerce, enterprise, and data-driven platforms. Limited but real backend experience with NestJS and Prisma.",
  },

  domains: [
    "FinTech (Crypto Exchange, Forex, Wallet, Swap)",
    "E-commerce",
    "Enterprise Systems (CRM, Automation)",
    "Education (University Management System)",
    "Healthcare Platforms",
    "Social Media Analytics",
    "Influencer Marketing Platforms",
  ],

  projects: { featured: [], all: [] },

  experience: [
    {
      title: "Elegant Hoopoe",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "United Arab Emirates", city: "Dubai" },
      period: { start: "2025-06", end: "2026-01" },
      description:
        "Premium slimming, aesthetics, and wellness brand operating across the UAE, building an integrated product ecosystem covering EMR, nutrition, distribution, and at-home care.",
      responsibilities: [
        "Led frontend development across 4 simultaneous product lines within a unified wellness ecosystem",
        "Designed and maintained a shared component library adopted across EMR, nutrition, and care delivery products",
        "Integrated REST APIs and orchestrated server/client state with React Query and Zustand across all products",
        "Drove performance optimization across patient-facing and internal clinical tools",
        "Shaped cross-functional architecture decisions with product, design, and backend teams",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          type: ExperienceType.Project,
          description:
            "Next-generation EMR for luxury wellness clinics. Integrates booking, customer engagement, loyalty, real-time treatment tracking, and AI-assisted workflow automation aimed at reducing no-shows and improving staff productivity.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
          ],
        },
        {
          title: "Hoopoe Diet",
          type: ExperienceType.Project,
          description:
            "AI-driven nutrition and lifestyle platform inside the Hoopoe ecosystem. Translates everyday actions — meals, training, sleep, recovery — into measurable, clinically validated outcomes, supported by an extensive library of professional training content.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
          ],
        },
        {
          title: "Grishana",
          type: ExperienceType.Project,
          description:
            "Internal Hoopoe brand and project — the official distributor of Cutera — focused on aesthetics and dermatology products. Built the customer-facing surface for the brand.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
          ],
        },
        {
          title: "Hoopoe Home Care",
          type: ExperienceType.Project,
          description:
            "In-home medical and aesthetic services product within the Hoopoe ecosystem, covering booking, support, and service delivery for at-home treatments in Dubai.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
          ],
        },
      ],
    },
    {
      title: "Coinlocally",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "Armenia", city: "Yerevan" },
      period: { start: "2024-11", end: "2025-06" },
      description:
        "Approved Bybit broker offering trading and investing across spot, demo, copy trading, and bot trading, with onboarding paths from beginner to pro.",
      responsibilities: [
        "Architected a micro-frontend platform with Nx, enabling independent deployments across exchange products",
        "Designed and shipped a company-wide UI component library and design system documented with Storybook",
        "Refactored and performance-tuned the legacy exchange codebase for scalability and long-term maintainability",
        "Delivered seasonal branded trading experiences tied to major global holidays across all platform surfaces",
        "Integrated AI-assisted development workflows (GitHub Copilot) to accelerate feature delivery cycles",
      ],
      children: [
        {
          title: "Coinlocally Exchange",
          type: ExperienceType.Project,
          description:
            "Main cryptocurrency exchange platform supporting spot, demo, copy trading, and bot trading, with seasonal branded experiences for major holidays.",
          stacks: [
            "nextjs",
            "react",
            "redux",
            "ant-design",
            "tailwindcss",
            "micro-frontends",
            "storybook",
            "nx",
          ],
        },
        {
          title: "Coinlocally Forex",
          type: ExperienceType.Project,
          description:
            "Standalone forex-trading platform within the Coinlocally ecosystem, offering currency pair trading alongside the main exchange.",
          stacks: [
            "nextjs",
            "react",
            "redux",
            "ant-design",
            "tailwindcss",
            "micro-frontends",
            "storybook",
            "nx",
          ],
        },
      ],
    },
    {
      title: "Innovation Center of Cognitive Sciences and Technologies, IUST",
      type: ExperienceType.Company,
      role: "Senior Frontend Developer (Frontend Lead)",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Tehran" },
      period: { start: "2022-12", end: "2024-09" },
      description:
        "Interdisciplinary R&D center at Iran University of Science and Technology working at the intersection of AI, cognitive sciences, and social science.",
      responsibilities: [
        "Served as Frontend Lead, coordinating development across multiple concurrent product teams",
        "Built and optimized high-performance dashboards with advanced charting for large-scale dataset visualization",
        "Developed a mobile-first PWA and a Chrome Extension as complementary platform surfaces",
        "Standardized shadcn/ui and pnpm across all products, authoring shared component and layout patterns",
        "Architected and delivered multiple admin panels, driving technical decisions across the center's portfolio",
      ],
      children: [
        {
          title: "Wiki Knowledge Management Platform",
          type: ExperienceType.Project,
          description:
            "Wikipedia-style platform where contributors author content and a separate group of reviewers approves it for publication.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "mui",
            "redux",
            "react-query",
          ],
        },
        {
          title: "Message Engineering",
          type: ExperienceType.Project,
          description:
            "Social-network analysis platform built around cognitive-science parameters, with content generation for social channels and extensive analytical charting.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "shadcn-ui",
            "tailwindcss",
            "react-query",
            "pnpm",
          ],
        },
        {
          title: "Robotics — Social Action Automation",
          type: ExperienceType.Project,
          description:
            "First-generation centralized platform that connects to social networks and lets operators manage accounts at scale (likes, comments, content generation, etc.) in a human-like fashion.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "tailwindcss",
            "react-query",
            "tanstack-table",
            "radix-ui",
            "axios",
            "nivo",
            "d3",
            "react-select",
            "pnpm",
          ],
        },
        {
          title: "Campaign Management Platform",
          type: ExperienceType.Project,
          description:
            "Mobile-first PWA bundling training videos and messenger-channel broadcasting for campaign operators. Delivered as two applications — a client app for end users and an admin panel for content and operations.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "redux",
            "react-query",
            "react-hook-form",
            "zod",
            "axios",
            "tailwindcss",
            "radix-ui",
            "react-select",
            "date-fns",
            "ffmpeg",
            "pwa",
            "chrome-extension",
          ],
        },
      ],
    },
    {
      title: "Saminray ICT",
      type: ExperienceType.Company,
      role: "Senior Frontend Developer (Frontend Lead)",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2021-05", end: "2022-12" },
      description:
        "Fintech company (founded 2002) specializing in core banking, card and payment solutions, Islamic banking, and BI for small- to medium-sized banks.",
      responsibilities: [
        "Served as Frontend Lead, introducing feature-based project architecture and engineering standards across the team",
        "Delivered the company's first crypto exchange platform with SSR via Next.js for SEO-optimized financial pages",
        "Integrated WebSocket for real-time order books, live trading charts, and market data feeds",
        "Built a shared frontend starter template adopted across all company projects, standardizing scaffolding",
        "Collaborated with DevOps to Dockerize frontend apps and configured custom Webpack bundles for production",
      ],
      children: [
        {
          title: "Dolphintex Exchange (Web App)",
          type: ExperienceType.Project,
          description:
            "Cryptocurrency exchange web application with a full-featured trading interface for spot trading and portfolio management.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "chakra-ui",
            "react-hook-form",
            "zod",
            "socket-io",
            "webpack",
            "nivo",
            "chartjs",
          ],
        },
        {
          title: "Dolphintex Corporate Website",
          type: ExperienceType.Project,
          description: "Marketing site for the Dolphintex exchange.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "tailwindcss",
          ],
        },
      ],
    },
    {
      title: "Local Influencers",
      type: ExperienceType.Company,
      role: "Mid-Level Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "Canada", city: "Chilliwack, British Columbia" },
      period: { start: "2020-12", end: "2021-09" },
      description:
        "Marketing-services platform connecting businesses with influencers in a controlled, transaction-driven environment that bypasses noisy DM flows.",
      responsibilities: [
        "First international, fully remote engineering role — established async workflows and cross-timezone collaboration",
        "Rebuilt the project architecture from scratch, significantly improving codebase organization and developer experience",
        "Integrated social media platform APIs (TikTok, Facebook) to enable automated influencer campaign flows",
        "Enforced robust form validation with Formik and Yup across onboarding and transactional user flows",
        "Shipped a high volume of features under rapid iteration cycles using Next.js and TypeScript",
      ],
      children: [
        {
          title: "Local Influencers Platform",
          type: ExperienceType.Project,
          description:
            "Platform that lets influencers publish priced offers via shareable profile URLs (e.g. localinfluencers.io/bbc) and lets businesses book paid promotions in a few steps.",
          stacks: [
            "typescript",
            "react",
            "nextjs",
            "mui",
            "axios",
            "react-query",
            "redux",
            "formik",
            "yarn",
            "yup",
          ],
        },
      ],
    },
    {
      title: "Ertebat Sabz Asia",
      type: ExperienceType.Company,
      role: "Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Hybrid,
      location: { country: "Iran", city: "Sari" },
      period: { start: "2020-03", end: "2021-05" },
      description:
        "Software company (founded 2003) building financial, administrative, and clinical software, including the Parsiz Teb clinic/hospital management suite and the Obak backup product.",
      responsibilities: [
        "Built the company's first React application, establishing reusable component patterns and a scalable project architecture",
        "Implemented real-time video conferencing with WebRTC inside the enterprise office automation platform",
        "Integrated REST APIs via Swagger, resolving CORS, multipart form-data, and binary blob response challenges",
        "Extended and maintained legacy HTML/jQuery codebases alongside the modern React-based product suite",
        "Applied React Query and Ant Design to deliver consistent, data-driven UI components across the automation product",
      ],
      children: [
        {
          title: "Parsiz Teb Website",
          type: ExperienceType.Project,
          description:
            "Marketing site for the Parsiz Teb clinic and hospital management suite.",
          stacks: ["html5", "css3", "javascript", "jquery", "bootstrap", "gulp"],
        },
        {
          title: "Parsiz Office Automation",
          type: ExperienceType.Project,
          description:
            "Enterprise office automation web application with a broad feature set covering document management, task tracking, and complex multi-step approval workflows.",
          stacks: [
            "react",
            "redux",
            "react-query",
            "axios",
            "ant-design",
            "javascript",
            "webrtc",
            "npm",
          ],
        },
        {
          title: "Parsiz Corporate Website",
          type: ExperienceType.Project,
          description:
            "Corporate site presenting the company's full product portfolio.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp"],
        },
      ],
    },
    {
      title: "Abar Rayane Tabarestan",
      type: ExperienceType.Company,
      role: "Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2018-09", end: "2020-03" },
      description:
        "Knowledge-based IT services company delivering solutions across networking, software development, and AI.",
      responsibilities: [
        "Delivered responsive e-commerce and corporate web projects across multiple industries as the primary frontend developer",
        "Collaborated directly with clients and business owners, translating requirements into production-ready interfaces",
        "Automated asset optimization pipelines with Gulp and Grunt, reducing image, HTML, and CSS bundle sizes",
        "Integrated Leaflet.js maps and Swiper-powered carousels into multiple client-facing applications",
        "Built hands-on experience with diverse JavaScript libraries, establishing the foundation for modern framework adoption",
      ],
      children: [
        {
          title: "Eshgh o Choob",
          type: ExperienceType.Project,
          description:
            "E-commerce site for handcrafted wooden marquetry and engraving products, with product pages integrated into an MVC backend.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper"],
        },
        {
          title: "Abar Rayane Corporate Website",
          type: ExperienceType.Project,
          description:
            "Corporate website presenting the company's IT services portfolio spanning networking, software development, and AI.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper"],
        },
        {
          title: "Daadyab",
          type: ExperienceType.Project,
          description:
            "Legal-tech platform connecting lawyers and clients for case referrals, lawyer comparison, and online consultations.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper", "leaflet"],
        },
        {
          title: "Sazeh For You",
          type: ExperienceType.Project,
          description: "Landing page for an industrial-products manufacturer.",
          stacks: ["html5", "css3", "javascript", "jquery", "bootstrap", "swiper", "grunt"],
        },
        {
          title: "Babol Carpet",
          type: ExperienceType.Project,
          description:
            "E-commerce site and admin panel for a long-established carpet and tufted-moquette manufacturer that exports to 20+ countries.",
          stacks: ["html5", "css3", "javascript", "jquery", "gulp", "bootstrap", "swiper", "leaflet"],
        },
      ],
    },
    {
      title: "Freelance",
      type: ExperienceType.Company,
      employment_type: EmploymentType.Freelance,
      location_type: LocationType.Remote,
      period: { start: "2020-01", end: "present" },
      description:
        "Independent client work spanning e-commerce, AI-assisted media tooling, computer-vision dashboards, crypto wallets, interactive 3D retail experiences, and landing pages.",
      children: [
        {
          title: "MS Cosmetic",
          type: ExperienceType.Project,
          role: "Full-Stack Developer",
          description:
            "End-to-end build of a cosmetics and personal-care e-commerce platform with a customer-facing site and a dedicated admin panel, covering both frontend and backend.",
          responsibilities: [
            "Sole developer across the full stack: Next.js storefront, Vite admin panel, NestJS REST API, Prisma ORM, and Docker infrastructure",
            "Implemented JWT authentication, AWS S3 media management, real-time WebSocket notifications, and containerized deployment",
            "First end-to-end full-stack ownership — responsible for architecture decisions across frontend, backend, and DevOps",
          ],
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "tailwindcss",
            "shadcn-ui",
            "react-query",
            "mui",
            "vite",
            "nestjs",
            "prisma",
            "aws-s3",
            "jwt",
            "socket-io",
            "docker",
          ],
        },
        {
          title: "AI Podcast & Audio Editing Platform",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "AI-powered audio editing studio: upload an audio file, generate a transcript, then edit the waveform or the transcript with full bidirectional sync.",
          responsibilities: [
            "Built a bidirectional waveform-transcript sync editor enabling simultaneous waveform and text-based audio editing",
            "Implemented an interactive audio visualization environment for a browser-native, timeline-driven editing experience",
          ],
          stacks: ["react", "vite", "typescript", "chakra-ui", "react-query"],
        },
        {
          title: "Driving-Assistance Object Detection Platform",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "Web dashboard that frame-splits driving video and lets users tag objects (e.g., 'white car'), then visualizes per-frame detections.",
          responsibilities: [
            "Engineered client-side video frame-splitting with FFmpeg.wasm for in-browser processing without server roundtrips",
            "Built a per-frame object annotation interface feeding labeled data into the detection model pipeline",
          ],
          stacks: ["react", "typescript", "tailwindcss", "react-query", "ffmpeg"],
        },
        {
          title: "Cosmetics E-Commerce Site",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "E-commerce platform for a cosmetics and personal-care brand with a full product catalog and checkout flow.",
          responsibilities: [
            "Delivered a complete e-commerce platform with product catalog, cart, checkout flow, and a dedicated admin management panel",
            "Applied SSR with Next.js for SEO-optimized product and category pages with fast initial page loads",
          ],
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "tailwindcss",
            "react-query",
          ],
        },
        {
          title: "360° Interactive Storefront",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "E-commerce experience with 360°/panoramic views of retail spaces and clickable in-scene products, giving customers an in-store feel from the browser.",
          responsibilities: [
            "Built a 360°/panoramic 3D retail environment with Three.js and GSAP, enabling clickable in-scene product interactions",
            "Delivered an immersive WebGL-based shopping experience replicating in-store browsing from the browser",
          ],
          stacks: ["nextjs", "react", "three", "mui", "gsap", "axios"],
        },
        {
          title: "Crypto Wallet Manager",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "Self-custody-style platform for managing crypto wallets, asset transfers, and swaps — not an exchange.",
          responsibilities: [
            "Delivered a self-custody crypto wallet with multi-asset management, transfer, and swap functionality",
            "Implemented real-time portfolio and transaction history tracking with Redux and React Query",
          ],
          stacks: [
            "nextjs",
            "react",
            "redux",
            "react-query",
            "tailwindcss",
          ],
        },
        {
          title: "Tabasgardi",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description: "Promotional landing page for a travel and tourism service.",
          responsibilities: [
            "Built a responsive promotional travel landing page with Bootstrap layout and a Gulp-based asset optimization pipeline",
          ],
          stacks: ["html5", "css3", "sass", "gulp", "bootstrap"],
        },
        {
          title: "Hermes Shop",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description: "Template-based e-commerce frontend for a retail brand.",
          responsibilities: [
            "Developed a template-engine-driven e-commerce frontend with Handlebars and a Gulp-automated build pipeline",
          ],
          stacks: ["handlebars", "tailwindcss", "gulp", "bootstrap"],
        },
        {
          title: "Quiz",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description: "Interactive quiz interface with chart visualizations and a carousel-driven UI.",
          responsibilities: [
            "Implemented an interactive quiz platform with Chart.js-powered analytics and a Swiper-driven carousel UI",
          ],
          stacks: ["handlebars", "vite", "tailwindcss", "swiper", "chartjs"],
        },
      ],
    },
  ],

  education: [
    {
      school: "Mazandaran University of Science and Technology",
      degree: "Bachelor's degree",
      field_of_study: "Computer Software Engineering",
      period: { start: "2017-09", end: "2021-08" },
      stacks: ["javascript", "html5", "css3", "git"],
    },
  ],

  achievements: [],

  services: [
    "Frontend Development",
    "Next.js Applications",
    "UI/UX Implementation",
    "Dashboard Development",
    "Performance Optimization",
    "Backend APIs (NestJS)",
  ],

  preferences: {
    portfolio_goal: null,
    tone: "professional",
    languages_output: ["fa", "en"],
  },
};

export default en;

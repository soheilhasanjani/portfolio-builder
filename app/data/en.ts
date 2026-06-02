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
    headline: "Senior Frontend Engineer",
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
        value: "+98 939 028 6828",
        href: "tel:+989390286828",
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
      english: "professional_working_proficiency",
    },
  },

  about: {
    summary:
      "Senior Frontend Engineer with 8+ years of experience building production web platforms across FinTech (crypto exchanges, forex, wallets), healthcare, and enterprise systems. Specialized in React, Next.js, TypeScript, micro-frontends, and design systems, with a strong track record of contributing to architecture and technology decisions across cross-functional teams. Experienced in designing scalable frontend solutions, modernizing legacy applications, and delivering high-performance user experiences. Comfortable extending into backend development with NestJS, Prisma, and Docker when end-to-end ownership is required. Experienced working remotely with international teams across UAE, Armenia, and North America.",
  },

  impact_highlights: [
    {
      title: "Broad framework & ecosystem expertise",
      description:
        "Production experience across React, Next.js, TypeScript, micro-frontends (Nx), and design systems (Storybook), with deep familiarity in the wider ecosystem — state (Redux, React Query, Zustand), forms (React Hook Form, Zod, Formik), and UI kits (Tailwind, MUI, Chakra, Ant Design, shadcn/ui, Radix).",
    },
    {
      title: "Vibe coding with AI-assisted delivery",
      description:
        "Daily driver of AI development workflows — GitHub Copilot, Claude Code, and Codex — integrated into real product delivery cycles to accelerate feature shipping, refactors, and design-system authoring.",
    },
    {
      title: "Diverse domains shipped end-to-end",
      description:
        "Built production systems across FinTech (crypto exchanges, forex, wallets), healthcare (EMR for luxury wellness clinics), e-commerce (storefronts + admin panels), interactive 3D retail (Three.js/GSAP), AI media tools, and enterprise automation.",
    },
    {
      title: "Real-time financial UI under reliability constraints",
      description:
        "Implemented WebSocket-based market-data streaming for live order books, trading charts, and high-throughput exchange UIs where latency and correctness directly affect user trust and revenue.",
    },
    {
      title: "Cross-product architecture & design systems",
      description:
        "Designed and standardized shared component libraries, layout patterns, and folder structures across multi-product organizations — most recently a 4-product wellness ecosystem and an Nx-based micro-frontend exchange platform.",
    },
    {
      title: "Full-stack ownership when scope requires it",
      description:
        "Comfortable extending into backend with NestJS, Prisma, JWT, AWS S3, and Docker — most recently shipping an end-to-end e-commerce platform (Next.js storefront, Vite admin, NestJS API) as the sole developer.",
    },
  ],

  experience: [
    {
      title: "Elegant Hoopoe",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.Contract,
      location_type: LocationType.Remote,
      location: { country: "United Arab Emirates", city: "Dubai" },
      period: { start: "2025-06", end: "2026-03" },
      description:
        "Premium slimming, aesthetics, and wellness brand operating across the UAE, building an integrated product ecosystem covering EMR, nutrition, distribution, and at-home care.",
      responsibilities: [
        "Defined cross-product frontend architecture patterns across 4 product lines within the unified wellness ecosystem; collaborated within a ~6-engineer frontend team in a ~40-person cross-functional organization",
        "Built and maintained a shared component system of ~10–30 reusable UI components adopted across EMR, nutrition, and care delivery products",
        "Standardized authentication, routing, layout, and folder organization patterns to ensure consistency and scalability across all 4 products",
        "Orchestrated server/client state with React Query and Zustand; integrated REST APIs across the product ecosystem",
        "Led significant refactoring to resolve performance bottlenecks and complex frontend bugs causing UI degradation across key user flows",
        "Participated in cross-functional technical decision-making with product, design, and backend teams",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          type: ExperienceType.Project,
          value: 90,
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
          value: 65,
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
          value: 55,
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
          value: 60,
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
        "Drove frontend architecture decisions for the scalable crypto trading platform, including an Nx-based micro-frontend split into 4 independently deployable exchange products",
        "Contributed within a 4-engineer frontend team inside a ~15-person product organization; led technology selection across the React ecosystem, state management, and API integration patterns",
        "Designed and shipped a company-wide UI component library of ~10–15 core reusable components, documented with Storybook",
        "Owned UI architecture and modularization strategy for the multi-module exchange platform",
        "Defined the performance optimization and refactoring direction for the legacy frontend codebase, improving scalability and long-term maintainability",
        "Delivered seasonal branded trading experiences tied to major global holidays across all platform surfaces",
      ],
      children: [
        {
          title: "Coinlocally Exchange",
          type: ExperienceType.Project,
          value: 95,
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
          value: 70,
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
      role: "Senior Frontend Engineer, Frontend Lead",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Tehran" },
      period: { start: "2022-12", end: "2024-09" },
      description:
        "Interdisciplinary R&D center at Iran University of Science and Technology working at the intersection of AI, cognitive sciences, and social science.",
      responsibilities: [
        "Served as Frontend Lead within a 6–7 engineer frontend team in a 20–30 person R&D organization; led architecture and technology decisions across multiple data-intensive systems",
        "Architected and delivered 5+ admin panels and analytics dashboards for research and operational use cases",
        "Built complex data visualization interfaces handling datasets up to hundreds of thousands of records, with multi-chart filtering and interactive analytics",
        "Standardized shadcn/ui and pnpm across the portfolio, authoring shared component and layout patterns",
        "Developed a mobile-first PWA and a Chrome Extension as complementary platform surfaces",
        "Drove performance optimization and frontend scalability for data-heavy applications",
      ],
      children: [
        {
          title: "Wiki Knowledge Management Platform",
          type: ExperienceType.Project,
          value: 60,
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
          value: 65,
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
          value: 80,
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
          value: 70,
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
      role: "Senior Frontend Engineer, Frontend Lead",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2021-05", end: "2022-12" },
      description:
        "Fintech company (founded 2002) specializing in core banking, card and payment solutions, Islamic banking, and BI for small- to medium-sized banks.",
      responsibilities: [
        "Progressed from Frontend Engineer to Frontend Lead, defining frontend architecture and technical direction for a 4–5 engineer frontend team within a 10–15 person cross-functional organization",
        "Led development of the company's first real-time crypto exchange platform with SSR via Next.js for SEO-optimized financial pages",
        "Implemented WebSocket-based market-data streaming for real-time order books, live trading charts, and high-performance financial UI under strict reliability and latency requirements",
        "Built and rolled out a shared frontend starter template adopted across all company projects, standardizing scaffolding and engineering practices",
        "Mentored frontend engineers and guided implementation practices across the team",
        "Collaborated with DevOps to Dockerize frontend apps and tune custom Webpack production bundles",
      ],
      children: [
        {
          title: "Dolphintex Exchange (Web App)",
          type: ExperienceType.Project,
          value: 75,
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
          value: 30,
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
        "Delivered features async across timezones with the Canada-based team, establishing remote engineering workflows from scratch",
        "Rebuilt the project architecture from scratch, significantly improving codebase organization and developer experience",
        "Integrated social media platform APIs (TikTok, Facebook) to enable automated influencer campaign flows",
        "Enforced robust form validation with Formik and Yup across onboarding and transactional user flows",
        "Shipped a high volume of features under rapid iteration cycles using Next.js and TypeScript",
      ],
      children: [
        {
          title: "Local Influencers Platform",
          type: ExperienceType.Project,
          value: 55,
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
        "Introduced React as the company's primary frontend stack, replacing legacy jQuery codebases and establishing reusable component patterns and a scalable project architecture",
        "Implemented real-time video conferencing with WebRTC inside the enterprise office automation platform",
        "Integrated REST APIs via Swagger, resolving CORS, multipart form-data, and binary blob response challenges",
        "Extended and maintained legacy HTML/jQuery codebases alongside the modern React-based product suite",
        "Applied React Query and Ant Design to deliver consistent, data-driven UI components across the automation product",
      ],
      children: [
        {
          title: "Parsiz Teb Website",
          type: ExperienceType.Project,
          value: 25,
          description:
            "Marketing site for the Parsiz Teb clinic and hospital management suite.",
          stacks: ["html5", "css3", "javascript", "jquery", "bootstrap", "gulp"],
        },
        {
          title: "Parsiz Office Automation",
          type: ExperienceType.Project,
          value: 60,
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
          value: 25,
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
          value: 35,
          description:
            "E-commerce site for handcrafted wooden marquetry and engraving products, with product pages integrated into an MVC backend.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper"],
        },
        {
          title: "Daadyab",
          type: ExperienceType.Project,
          value: 45,
          description:
            "Legal-tech platform connecting lawyers and clients for case referrals, lawyer comparison, and online consultations.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper", "leaflet"],
        },
        {
          title: "Babol Carpet",
          type: ExperienceType.Project,
          value: 40,
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
          period: { start: "2024-12", end: "present" },
          value: 90,
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
          value: 75,
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
          value: 65,
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
          value: 45,
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
          value: 70,
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
          value: 65,
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
          value: 20,
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
          value: 25,
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
          value: 30,
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

  additional_information: [
    {
      label: "Languages",
      value: "Persian (Native) · English (Professional Working Proficiency)",
    },
    {
      label: "Work Mode",
      value: "Open to remote globally and on-site opportunities in Tehran",
    },
    {
      label: "Availability",
      value: "Immediate",
    },
    {
      label: "Status",
      value: "Open to Senior Frontend Engineer roles",
    },
  ],

  preferences: {
    portfolio_goal: null,
    tone: "professional",
    languages_output: ["fa", "en"],
  },
};

export default en;

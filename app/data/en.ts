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
    last_name: "Hasanjani",
    headline: "Senior Frontend Engineer",
    industry: "Computer Software",
    location: "Tehran, Iran",
    website: "https://soheilhasanjani.dev",
    status: ProfileStatus.OpenToWork,
    contacts: [
      {
        type: ContactType.Phone,
        value: "+98 939 028 6828",
        href: "tel:+989390286828",
      },
      {
        type: ContactType.Email,
        value: "soheilhasanjani@gmail.com",
        href: "mailto:soheilhasanjani@gmail.com",
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
      'Senior Frontend Engineer with 8+ years of experience building scalable web applications in FinTech, healthcare, e-commerce, and enterprise domains. Focused on frontend architecture, performance, and developer experience, with a strong track record of modernizing legacy systems and delivering production-grade products.\n\nExperienced in React and Next.js ecosystems, design systems, and scalable UI architecture, including state management and data-fetching strategies for complex applications. Recently leveraged AI-assisted development and "vibe coding" workflows to speed up delivery while maintaining clean, maintainable code.\n\nComfortable working across the stack when needed (Node.js, NestJS, Prisma, REST, WebSockets) and collaborating with distributed teams across UAE, Armenia, and North America.',
  },

  impact_highlights: [
    {
      icon: "layers",
      title: "Modern web architecture",
      description:
        "Built scalable React, Next.js, and TypeScript applications with clean architecture and reusable UI systems.",
    },
    {
      icon: "zap",
      title: "AI-enhanced engineering workflow",
      description:
        "Used Claude Code and OpenAI tools to speed up development, debugging, and delivery.",
    },
    {
      icon: "globe",
      title: "Cross-industry experience",
      description:
        "Shipped production software for FinTech, healthcare, e-commerce, and real-time trading products.",
    },
    {
      icon: "star",
      title: "Design systems & scalability",
      description:
        "Improved UI consistency by building shared components and design systems across multiple products.",
    },
  ],

  experience: [
    {
      title: "Elegant Hoopoe",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "United Arab Emirates", city: "Dubai" },
      period: { start: "2025-04", end: "2026-04" },
      description:
        "Luxury wellness and aesthetics company based in Dubai, specializing in non-invasive body contouring, weight management, skin rejuvenation, and personalized wellness treatments through advanced medical technologies.",
      responsibilities: [
        "Refactored the frontend codebase to improve maintainability, developer experience, and overall performance",
        "Developed 10+ reusable UI components with well-defined APIs, increasing consistency across the application",
        "Contributed to architecture and technology decisions, and provided technical support and code reviews across the frontend team",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          type: ExperienceType.Project,
          value: 90,
          description:
            "EMR platform for luxury wellness clinics with booking, customer engagement, loyalty, real-time treatment tracking, and AI-assisted workflows.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
            "claude",
          ],
        },
        {
          title: "Hoopoe Diet",
          type: ExperienceType.Project,
          value: 65,
          description:
            "AI nutrition and lifestyle platform that tracks meals, training, sleep, and recovery against measurable health goals.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
            "claude",
          ],
        },
        {
          title: "Grishana",
          type: ExperienceType.Project,
          value: 55,
          description:
            "Customer-facing website for Grishana, the official Cutera distributor for aesthetics and dermatology products.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
            "claude",
          ],
        },
        {
          title: "Hoopoe Home Care",
          type: ExperienceType.Project,
          value: 80,
          description:
            "At-home medical and aesthetic services product for booking, support, and service delivery in Dubai.",
          stacks: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "zustand",
            "axios",
            "claude",
          ],
        },
      ],
    },
    {
      title: "Coinlocally",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.Contract,
      location_type: LocationType.Remote,
      location: { country: "Armenia", city: "Yerevan" },
      period: { start: "2024-10", end: "2025-04" },
      description:
        "Approved Bybit broker offering spot trading, demo trading, copy trading, and trading bots.",
      responsibilities: [
        "Split the exchange platform into 4 Nx-based micro-frontends for independent releases",
        "Contributed to React architecture, state management, API integration, and UI design decisions",
        "Built and documented 10+ reusable React components in Storybook",
        "Refactored legacy code and improved frontend maintainability",
        "Delivered trading and marketing features using Next.js, React, Redux, Tailwind CSS, and Ant Design",
      ],
      children: [
        {
          title: "Coinlocally Exchange",
          type: ExperienceType.Project,
          value: 95,
          description:
            "Main crypto exchange platform supporting spot trading, demo trading, copy trading, trading bots, and branded campaigns.",
          stacks: [
            "nextjs",
            "react",
            "redux",
            "ant-design",
            "tailwindcss",
            "micro-frontends",
            "storybook",
            "nx",
            "openai",
          ],
        },
        {
          title: "Coinlocally Forex",
          type: ExperienceType.Project,
          value: 70,
          description:
            "Forex trading platform inside the Coinlocally ecosystem for currency pair trading.",
          stacks: [
            "nextjs",
            "react",
            "redux",
            "ant-design",
            "tailwindcss",
            "micro-frontends",
            "storybook",
            "nx",
            "openai",
          ],
        },
      ],
    },
    {
      title: "Innovation Center of Cognitive Sciences and Technologies, IUST",
      type: ExperienceType.Company,
      role: "Senior Frontend Developer, Frontend Lead",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Tehran" },
      period: { start: "2023-03", end: "2024-08" },
      description:
        "R&D center at Iran University of Science and Technology focused on AI, cognitive science, and social science.",
      responsibilities: [
        "Led frontend architecture for multiple data-heavy systems in a 6-7 engineer frontend team and a 20-30 person R&D organization",
        "Delivered 5+ admin panels and analytics dashboards for research, operations, and social-network analysis",
        "Built data visualization interfaces for datasets with hundreds of thousands of records, multi-chart filters, and interactive analytics",
        "Improved delivery speed by setting shared shadcn/ui, pnpm, component, and layout patterns across projects",
        "Expanded platform access by building a mobile-first PWA and a Chrome Extension",
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
          value: 80,
          description:
            "Social-network analysis platform with cognitive-science metrics, content generation, and analytical charts.",
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
            "Central platform for managing social-network accounts, actions, comments, and generated content at scale.",
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
            "Mobile-first PWA with training videos and messenger broadcasting, delivered as a client app and an admin panel.",
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
      role: "Senior Frontend Developer, Frontend Lead",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2021-07", end: "2023-01" },
      description:
        "FinTech company building core banking, card and payment systems, Islamic banking, and BI products.",
      responsibilities: [
        "Promoted from Frontend Engineer to Frontend Lead by setting frontend architecture and technical direction for a 4-5 engineer team",
        "Led the company's first real-time crypto exchange frontend using Next.js SSR for SEO-friendly financial pages",
        "Improved live trading UX by building WebSocket market-data streams for order books, trading charts, and financial dashboards",
        "Reduced project setup work by creating a shared frontend starter template used across company projects",
        "Improved production delivery by working with DevOps on Dockerized frontend apps and custom Webpack builds",
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
      period: { start: "2020-07", end: "2021-07" },
      description:
        "Marketing platform connecting businesses with influencers through paid campaign flows.",
      responsibilities: [
        "Improved code quality by rebuilding the frontend architecture from scratch with Next.js and TypeScript",
        "Enabled automated campaign flows by integrating TikTok and Facebook APIs",
        "Reduced form errors by adding reliable Formik and Yup validation across onboarding and payment-related flows",
      ],
      children: [
        {
          title: "Local Influencers Platform",
          type: ExperienceType.Project,
          value: 55,
          description:
            "Platform where influencers publish paid offers through shareable profiles and businesses book promotions in a few steps.",
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
      period: { start: "2019-07", end: "2020-07" },
      description:
        "Software company building financial, office automation, and clinic management products.",
      responsibilities: [
        "Modernized the frontend stack by introducing React, reusable components, and scalable project structure alongside legacy jQuery products",
        "Added real-time video conferencing to the office automation product using WebRTC",
        "Improved API integration reliability by connecting Swagger-based REST APIs and handling CORS, multipart uploads, and binary file responses",
        "Delivered consistent data-driven screens using React Query and Ant Design",
      ],
      children: [
        {
          title: "Parsiz Teb Website",
          type: ExperienceType.Project,
          value: 25,
          description:
            "Marketing site for the Parsiz Teb clinic and hospital management suite.",
          stacks: [
            "html5",
            "css3",
            "javascript",
            "jquery",
            "bootstrap",
            "gulp",
          ],
        },
        {
          title: "Parsiz Office Automation",
          type: ExperienceType.Project,
          value: 60,
          description:
            "Enterprise office automation app for document management, task tracking, and multi-step approvals.",
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
          stacks: [
            "html5",
            "css3",
            "bootstrap",
            "javascript",
            "jquery",
            "gulp",
          ],
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
      period: { start: "2018-07", end: "2019-07" },
      description:
        "IT services company delivering networking, software, and AI solutions.",
      responsibilities: [
        "Delivered responsive e-commerce and corporate websites as the primary frontend developer",
        "Improved client delivery by turning business requirements into production-ready HTML, CSS, and JavaScript interfaces",
        "Reduced static asset size by automating image, HTML, and CSS optimization with Gulp and Grunt",
        "Added interactive maps and carousels to client websites using Leaflet.js and Swiper",
      ],
      children: [
        {
          title: "Daadyab",
          type: ExperienceType.Project,
          value: 45,
          description:
            "Legal-tech platform connecting lawyers and clients for case referrals, lawyer comparison, and online consultations.",
          stacks: [
            "html5",
            "css3",
            "bootstrap",
            "javascript",
            "jquery",
            "gulp",
            "swiper",
            "leaflet",
          ],
        },
        {
          title: "Babol Carpet",
          type: ExperienceType.Project,
          value: 40,
          description:
            "E-commerce site and admin panel for a carpet and tufted-moquette manufacturer exporting to 20+ countries.",
          stacks: [
            "html5",
            "css3",
            "javascript",
            "jquery",
            "gulp",
            "bootstrap",
            "swiper",
            "leaflet",
          ],
        },
      ],
    },
    {
      title: "Freelance Software Engineer",
      type: ExperienceType.Company,
      employment_type: EmploymentType.Freelance,
      location_type: LocationType.Remote,
      period: { start: "2019-07", end: "present" },
      description:
        "Independent client work across e-commerce, AI media tools, computer-vision dashboards, crypto wallets, 3D retail, and landing pages.",
      children: [
        {
          title: "MS Cosmetic",
          type: ExperienceType.Project,
          role: "Full-Stack Developer",
          period: { start: "2024-12", end: "present" },
          value: 90,
          description:
            "Full-stack cosmetics e-commerce platform with a storefront, admin panel, REST API, media storage, and deployment setup.",
          responsibilities: [
            "Delivered the full platform as the sole developer using Next.js, Vite, NestJS, Prisma, Docker, and AWS S3",
            "Improved platform security and operations by adding JWT authentication, media management, WebSocket notifications, and containerized deployment",
            "Owned architecture decisions across frontend, backend, database, and deployment",
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
            "AI audio editing studio where users upload audio, generate a transcript, and edit the audio from the waveform or text.",
          responsibilities: [
            "Improved editing speed by building two-way sync between the audio waveform and transcript text",
            "Built browser-native timeline editing and audio visualization with React, Vite, and TypeScript",
          ],
          stacks: ["react", "vite", "typescript", "chakra-ui", "react-query"],
        },
        {
          title: "Driving-Assistance Object Detection Platform",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          value: 80,
          description:
            "Web dashboard that splits driving videos into frames, lets users tag objects, and shows per-frame detections.",
          responsibilities: [
            "Reduced server processing needs by splitting video frames in the browser with FFmpeg.wasm",
            "Built a per-frame object annotation UI that feeds labeled data into the detection model pipeline",
          ],
          stacks: [
            "react",
            "typescript",
            "tailwindcss",
            "react-query",
            "ffmpeg",
          ],
        },
        {
          title: "Cosmetics E-Commerce Site",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          value: 45,
          description:
            "E-commerce platform for a cosmetics and personal-care brand with a full product catalog and checkout flow.",
          responsibilities: [
            "Delivered product catalog, cart, checkout, and admin management features for a cosmetics e-commerce platform",
            "Improved SEO and first page load by using Next.js SSR for product and category pages",
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
            "E-commerce experience with 360° retail views and clickable products inside the scene.",
          responsibilities: [
            "Improved online shopping discovery by building a 360° 3D retail environment with Three.js and GSAP",
            "Added clickable in-scene product interactions for a browser-based WebGL shopping experience",
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
            "Delivered a crypto wallet interface for multi-asset management, transfers, and swaps",
            "Improved account visibility by adding real-time portfolio and transaction history tracking with Redux and React Query",
          ],
          stacks: ["nextjs", "react", "redux", "react-query", "tailwindcss"],
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

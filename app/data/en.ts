import type { Portfolio } from "./types";
import {
  ContactType,
  EmploymentType,
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
    top_skills: [
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "nodejs",
      "nestjs",
    ],
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
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "United Arab Emirates", city: "Dubai" },
      period: { start: "2025-06", end: "2026-01" },
      description:
        "Premium slimming, aesthetics, and wellness brand operating across the UAE, building an integrated product ecosystem covering EMR, nutrition, distribution, and at-home care.",
      skills: [
        "nextjs",
        "react",
        "typescript",
        "react-query",
        "zustand",
        "axios",
      ],
      responsibilities: [
        "Built and maintained scalable frontend architectures",
        "Authored reusable UI components and application modules",
        "Integrated frontends with backend APIs",
        "Managed server and client state cohesively",
        "Optimized application performance and user experience",
        "Collaborated with product, design, and backend teams",
        "Participated in architecture and technical decision-making",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          period: { start: "2025-06", end: "2026-01" },
          description:
            "Next-generation EMR for luxury wellness clinics. Integrates booking, customer engagement, loyalty, real-time treatment tracking, and AI-assisted workflow automation aimed at reducing no-shows and improving staff productivity.",
          skills: [
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
          period: { start: "2025-06", end: "2026-01" },
          description:
            "AI-driven nutrition and lifestyle platform inside the Hoopoe ecosystem. Translates everyday actions — meals, training, sleep, recovery — into measurable, clinically validated outcomes, supported by an extensive library of professional training content.",
          skills: [
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
          period: { start: "2025-06", end: "2026-01" },
          description:
            "Internal Hoopoe brand and project — the official distributor of Cutera — focused on aesthetics and dermatology products. Built the customer-facing surface for the brand.",
          skills: [
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
          period: { start: "2025-06", end: "2026-01" },
          description:
            "In-home medical and aesthetic services product within the Hoopoe ecosystem, covering booking, support, and service delivery for at-home treatments in Dubai.",
          skills: [
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
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "Armenia", city: "Yerevan" },
      period: { start: "2024-11", end: "2025-06" },
      description:
        "Approved Bybit broker offering trading and investing across spot, demo, copy trading, and bot trading, with onboarding paths from beginner to pro.",
      skills: [
        "nextjs",
        "react",
        "typescript",
        "redux",
        "ant-design",
        "tailwindcss",
        "micro-frontends",
      ],
      children: [
        {
          title: "Coinlocally Exchange",
          period: { start: "2024-11", end: "2025-06" },
          description:
            "Main cryptocurrency exchange site. Contributed to a micro-frontend setup and shipped seasonal themed experiences for events like Christmas and Halloween.",
          skills: ["nextjs", "react", "redux", "ant-design", "tailwindcss"],
        },
        {
          title: "Coinlocally Forex",
          period: { start: "2024-11", end: "2025-06" },
          description:
            "Standalone forex-trading site built on the same stack as the main exchange.",
          skills: ["nextjs", "react", "redux", "ant-design", "tailwindcss"],
        },
      ],
    },
    {
      title: "Innovation Center of Cognitive Sciences and Technologies, IUST",
      role: "Senior Frontend Developer (Frontend Lead)",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Tehran" },
      period: { start: "2022-12", end: "2024-09" },
      description:
        "Interdisciplinary R&D center at Iran University of Science and Technology working at the intersection of AI, cognitive sciences, and social science.",
      skills: [
        "nextjs",
        "react",
        "typescript",
        "redux",
        "zustand",
        "react-query",
        "mui",
        "shadcn-ui",
        "tailwindcss",
        "pwa",
        "chrome-extension",
      ],
      children: [
        {
          title: "Wiki Knowledge Management Platform",
          period: { start: "2022-12", end: "2024-09" },
          description:
            "Wikipedia-style platform where contributors author content and a separate group of reviewers approves it for publication.",
          skills: [
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
          period: { start: "2022-12", end: "2024-09" },
          description:
            "Social-network analysis platform built around cognitive-science parameters, with content generation for social channels and extensive analytical charting.",
          skills: [
            "nextjs",
            "react",
            "typescript",
            "shadcn-ui",
            "tailwindcss",
            "react-query",
          ],
        },
        {
          title: "Robotics — Social Action Automation",
          period: { start: "2022-12", end: "2024-09" },
          description:
            "First-generation centralized platform that connects to social networks and lets operators manage accounts at scale (likes, comments, content generation, etc.) in a human-like fashion.",
          skills: [
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
          ],
        },
        {
          title: "Campaign Management Platform",
          period: { start: "2022-12", end: "2024-09" },
          description:
            "Mobile-first PWA bundling training videos and messenger-channel broadcasting for campaign operators. Delivered as two applications — a client app for end users and an admin panel for content and operations.",
          skills: [
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
          ],
        },
      ],
    },
    {
      title: "Saminray ICT",
      role: "Senior Frontend Developer (Frontend Lead)",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2021-05", end: "2022-12" },
      description:
        "Fintech company (founded 2002) specializing in core banking, card and payment solutions, Islamic banking, and BI for small- to medium-sized banks.",
      skills: [
        "nextjs",
        "react",
        "typescript",
        "react-query",
        "chakra-ui",
        "tailwindcss",
      ],
      children: [
        {
          title: "Dolphintex Exchange (Web App)",
          role: "Frontend Lead",
          period: { start: "2021-05", end: "2022-12" },
          description:
            "Cryptocurrency exchange web application. Led the frontend and, on delivery, executed a major refactor covering architecture, performance, and long-term maintainability.",
          skills: [
            "nextjs",
            "react",
            "typescript",
            "react-query",
            "chakra-ui",
          ],
        },
        {
          title: "Dolphintex Corporate Website",
          period: { start: "2021-05", end: "2022-12" },
          description: "Marketing site for the Dolphintex exchange.",
          skills: [
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
      role: "Mid-Level Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "Canada", city: "Chilliwack, British Columbia" },
      period: { start: "2020-12", end: "2021-09" },
      description:
        "Marketing-services platform connecting businesses with influencers in a controlled, transaction-driven environment that bypasses noisy DM flows.",
      skills: [
        "typescript",
        "react",
        "nextjs",
        "mui",
        "axios",
        "react-query",
        "redux",
      ],
      children: [
        {
          title: "Local Influencers Platform",
          period: { start: "2020-12", end: "2021-09" },
          description:
            "Platform that lets influencers publish priced offers via shareable profile URLs (e.g. localinfluencers.io/bbc) and lets businesses book paid promotions in a few steps.",
          skills: [
            "typescript",
            "react",
            "nextjs",
            "mui",
            "axios",
            "react-query",
            "redux",
          ],
        },
      ],
    },
    {
      title: "Ertebat Sabz Asia",
      role: "Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Hybrid,
      location: { country: "Iran", city: "Sari" },
      period: { start: "2020-03", end: "2021-05" },
      description:
        "Software company (founded 2003) building financial, administrative, and clinical software, including the Parsiz Teb clinic/hospital management suite and the Obak backup product.",
      skills: [
        "html5",
        "css3",
        "bootstrap",
        "javascript",
        "jquery",
        "react",
        "redux",
        "react-query",
        "axios",
        "ant-design",
      ],
      children: [
        {
          title: "Parsiz Teb Website",
          period: { start: "2020-03", end: "2021-05" },
          description:
            "Marketing site for the Parsiz Teb clinic and hospital management suite.",
          skills: ["html5", "css3", "javascript", "jquery"],
        },
        {
          title: "Parsiz Office Automation",
          period: { start: "2020-03", end: "2021-05" },
          description:
            "First professional React project — an enterprise office automation web app with a large feature surface and complex workflows. Owned the frontend end-to-end.",
          skills: [
            "react",
            "redux",
            "react-query",
            "axios",
            "ant-design",
            "javascript",
          ],
        },
        {
          title: "Parsiz Corporate Website",
          period: { start: "2020-03", end: "2021-05" },
          description:
            "Corporate site presenting the company's full product portfolio.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
      ],
    },
    {
      title: "Abar Rayane Tabarestan",
      role: "Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "Iran", city: "Babol" },
      period: { start: "2018-09", end: "2020-03" },
      description:
        "Knowledge-based IT services company delivering solutions across networking, software development, and AI.",
      skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
      children: [
        {
          title: "Eshgh o Choob",
          period: { start: "2018-09", end: "2020-03" },
          description:
            "E-commerce site for handcrafted wooden marquetry and engraving products. Implemented all storefront pages and delivered the markup for MVC integration.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Abar Rayane Corporate Website",
          period: { start: "2018-09", end: "2020-03" },
          description:
            "Designed and implemented the company's own corporate site end-to-end, including in-flight UI design (without Figma/Adobe XD).",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Daadyab",
          period: { start: "2018-09", end: "2020-03" },
          description:
            "Legal-tech platform connecting lawyers and clients for case referrals, lawyer comparison, and online consultations. Built the main site from Adobe XD designs.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Sazeh For You",
          period: { start: "2018-09", end: "2020-03" },
          description: "Landing page for an industrial-products manufacturer.",
          skills: ["html5", "css3", "javascript", "jquery"],
        },
        {
          title: "Babol Carpet",
          period: { start: "2018-09", end: "2020-03" },
          description:
            "Storefront and admin panel for a long-established carpet and tufted-moquette manufacturer that exports to 20+ countries.",
          skills: ["html5", "css3", "javascript", "jquery"],
        },
      ],
    },
    {
      title: "Freelance",
      role: "Full-Stack Developer",
      employment_type: EmploymentType.Freelance,
      location_type: LocationType.Remote,
      period: { start: "2020-01", end: "present" },
      description:
        "Independent client work spanning e-commerce, AI-assisted media tooling, computer-vision dashboards, crypto wallets, interactive 3D storefronts, and conventional landing pages.",
      skills: [
        "nextjs",
        "react",
        "typescript",
        "tailwindcss",
        "shadcn-ui",
        "react-query",
        "mui",
        "chakra-ui",
        "vite",
        "redux",
        "axios",
        "three",
        "gsap",
        "html5",
        "css3",
        "sass",
        "handlebars",
        "gulp",
        "swiper",
        "chartjs",
        "nestjs",
        "prisma",
        "aws-s3",
        "jwt",
        "websocket",
        "docker",
      ],
      children: [
        {
          title: "MS Cosmetic",
          role: "Full-Stack Developer",
          period: { start: "2024-11", end: "present" },
          description:
            "End-to-end build of a cosmetics and personal-care e-commerce platform with a customer-facing storefront and a dedicated admin panel. Owned both frontend and backend.",
          skills: [
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
            "websocket",
            "docker",
          ],
        },
        {
          title: "AI Podcast & Audio Editing Platform",
          period: { start: "2020-01", end: "present" },
          description:
            "AI-powered audio editing studio with a professional editor: upload an audio file, generate a transcript, then edit either the waveform or the transcript with bidirectional sync.",
          skills: ["react", "vite", "typescript", "chakra-ui", "react-query"],
        },
        {
          title: "Driving-Assistance Object Detection Platform",
          period: { start: "2020-01", end: "present" },
          description:
            "Web app that frame-splits driving video and lets users tag objects (e.g., 'white car'), then visualizes per-frame detections.",
          skills: ["react", "typescript", "tailwindcss", "react-query"],
        },
        {
          title: "Cosmetics E-Commerce Site",
          period: { start: "2020-01", end: "present" },
          description:
            "Storefront for a separate cosmetics and personal-care brand.",
          skills: [
            "nextjs",
            "react",
            "typescript",
            "tailwindcss",
            "react-query",
          ],
        },
        {
          title: "360° Interactive Storefront",
          period: { start: "2020-01", end: "present" },
          description:
            "Differentiated e-commerce concept: 360°/panoramic views of retail spaces with clickable products throughout, giving customers an in-store feel from the browser.",
          skills: ["nextjs", "react", "three", "mui", "gsap", "axios"],
        },
        {
          title: "Crypto Wallet Manager",
          period: { start: "2020-01", end: "present" },
          description:
            "Self-custody-style platform for managing crypto wallets, transfers, and swaps. Not an exchange.",
          skills: [
            "nextjs",
            "react",
            "redux",
            "react-query",
            "tailwindcss",
          ],
        },
        {
          title: "Tabasgardi",
          period: { start: "2020-01", end: "present" },
          description: "Landing-page-only project.",
          skills: ["html5", "css3", "sass", "gulp"],
        },
        {
          title: "Hermes Shop",
          period: { start: "2020-01", end: "present" },
          description: "Templated storefront frontend.",
          skills: ["handlebars", "tailwindcss", "gulp"],
        },
        {
          title: "Quiz",
          period: { start: "2020-01", end: "present" },
          description: "Interactive quiz interface with charts and carousel UI.",
          skills: ["handlebars", "vite", "tailwindcss", "swiper", "chartjs"],
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
      skills: ["javascript", "html5", "css3", "git"],
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

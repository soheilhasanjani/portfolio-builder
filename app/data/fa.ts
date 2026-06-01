import type { Portfolio } from "./types";
import {
  ContactType,
  EmploymentType,
  LocationType,
  ProfileStatus,
} from "./types";

const fa: Portfolio = {
  profile: {
    first_name: "سهیل",
    last_name: "حسن جانی میر",
    headline: "Senior Frontend Engineer | Backend Developer (NestJS)",
    industry: "نرم‌افزار رایانه",
    location: "تهران، ایران",
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
      "توسعه‌دهنده فرانت‌اند با بیش از ۸ تا ۹ سال تجربه حرفه‌ای در ساخت وب‌اپلیکیشن‌های مقیاس‌پذیر. تجربه کار در پروژه‌های مالی (Crypto/Forex)، فروشگاهی، سازمانی و پلتفرم‌های داده‌محور. تجربه محدود ولی واقعی در بک‌اند با NestJS و Prisma.",
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
      location: { country: "امارات متحده عربی", city: "دبی" },
      period: { start: "2025-06", end: "2026-01" },
      description:
        "برند پریمیوم در حوزه‌ی لاغری، زیبایی و wellness با حضور گسترده در امارات، در حال ساخت یک اکوسیستم محصول یکپارچه شامل EMR، تغذیه، توزیع و خدمات درمانی در منزل.",
      responsibilities: [
        "توسعه و نگهداری معماری مقیاس‌پذیر فرانت‌اند",
        "طراحی و پیاده‌سازی کامپوننت‌های UI و ماژول‌های کاربردی قابل استفاده‌ی مجدد",
        "یکپارچه‌سازی فرانت‌اند با APIهای بک‌اند",
        "مدیریت یکپارچه‌ی state سمت سرور و سمت کلاینت",
        "بهینه‌سازی عملکرد و تجربه‌ی کاربری اپلیکیشن",
        "همکاری نزدیک با تیم‌های محصول، طراحی و بک‌اند",
        "مشارکت در تصمیم‌گیری‌های معماری و فنی",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          description:
            "پلتفرم نسل بعدی EMR ویژه‌ی کلینیک‌های لاکچری wellness. ادغام رزرواسیون، تعامل با مشتری، باشگاه مشتریان، رهگیری زنده‌ی تریتمنت‌ها و اتوماسیون فرایندها به کمک هوش مصنوعی با هدف کاهش no-show و افزایش بهره‌وری تیم.",
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
          description:
            "پلتفرم تغذیه و سبک زندگی مبتنی بر هوش مصنوعی در اکوسیستم Hoopoe. اقدامات روزانه‌ی کاربر — وعده‌های غذایی، تمرین، خواب و ریکاوری — را به خروجی‌های قابل اندازه‌گیری و از نظر بالینی معتبر تبدیل می‌کند و از کتابخانه‌ی گسترده‌ای از محتوای آموزشی حرفه‌ای پشتیبانی می‌گیرد.",
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
          description:
            "برند و پروژه‌ی داخلی Hoopoe و توزیع‌کننده‌ی رسمی محصولات Cutera، با تمرکز بر محصولات زیبایی و درماتولوژی. توسعه‌ی سطح مشتری‌محور برند.",
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
          description:
            "محصول ارائه‌ی خدمات پزشکی و زیبایی در منزل در اکوسیستم Hoopoe، شامل رزرواسیون، پشتیبانی و ارائه‌ی خدمت برای درمان‌های در منزل در دبی.",
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
      location: { country: "ارمنستان", city: "ایروان" },
      period: { start: "2024-11", end: "2025-06" },
      description:
        "بروکر تأییدشده‌ی Bybit با ارائه‌ی خدمات معامله و سرمایه‌گذاری در حوزه‌های Spot، Demo، Copy Trading و Bot Trading، و مسیرهای آنبوردینگ از سطح مبتدی تا حرفه‌ای.",
      children: [
        {
          title: "Coinlocally Exchange",
          description:
            "وب‌سایت اصلی صرافی ارز دیجیتال. مشارکت در ساختار Micro-Frontend و توسعه‌ی تجربه‌های فصلی و مناسبتی برای رویدادهایی همچون کریسمس و هالووین.",
          skills: ["nextjs", "react", "redux", "ant-design", "tailwindcss"],
        },
        {
          title: "Coinlocally Forex",
          description:
            "وب‌سایت مستقل معاملات فارکس Coinlocally، با همان استک پلتفرم اصلی.",
          skills: ["nextjs", "react", "redux", "ant-design", "tailwindcss"],
        },
      ],
    },
    {
      title: "Innovation Center of Cognitive Sciences and Technologies, IUST",
      role: "Senior Frontend Developer (Frontend Lead)",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "ایران", city: "تهران" },
      period: { start: "2022-12", end: "2024-09" },
      description:
        "مرکز پژوهش و توسعه‌ی بین‌رشته‌ای دانشگاه علم و صنعت در تلاقی هوش مصنوعی، علوم شناختی و علوم اجتماعی.",
      children: [
        {
          title: "Wiki Knowledge Management Platform",
          description:
            "پلتفرمی مشابه ویکی‌پدیا که کاربران در آن محتوا تولید می‌کنند و گروهی مستقل از داوران، انتشار آن را تأیید می‌کنند.",
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
          description:
            "پلتفرم تحلیل شبکه‌های اجتماعی بر اساس پارامترهای علوم شناختی، به همراه تولید محتوا برای شبکه‌ها و نمودارهای تحلیلی گسترده.",
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
          description:
            "نسخه‌ی نخست یک پلتفرم متمرکز که به شبکه‌های اجتماعی متصل می‌شود و امکان مدیریت گسترده‌ی حساب‌ها (لایک، کامنت، تولید محتوا و …) را به شکلی انسان‌گونه فراهم می‌کند.",
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
          description:
            "یک PWA با رویکرد mobile-first برای ارائه‌ی محتوای آموزشی ویدئویی و ارسال پیام به کانال‌های مسنجری. متشکل از دو اپلیکیشن جداگانه: اپ کاربر نهایی و پنل ادمین برای مدیریت محتوا و عملیات.",
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
      location: { country: "ایران", city: "بابل" },
      period: { start: "2021-05", end: "2022-12" },
      description:
        "شرکت فین‌تک تأسیس ۲۰۰۲، متخصص در حوزه‌ی Core Banking، راهکارهای کارت و پرداخت، بانکداری اسلامی و BI برای بانک‌های کوچک تا متوسط.",
      children: [
        {
          title: "Dolphintex Exchange (Web App)",
          role: "Frontend Lead",
          description:
            "وب اپلیکیشن صرافی ارز دیجیتال. سرپرستی فرانت‌اند پروژه و انجام یک ریفکتور اساسی در زمان تحویل، شامل بازنگری معماری، بهینه‌سازی عملکرد و افزایش قابلیت نگهداری بلندمدت.",
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
          description: "وب‌سایت معرفی صرافی Dolphintex.",
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
      location: { country: "کانادا", city: "چیلیواک، بریتیش کلمبیا" },
      period: { start: "2020-12", end: "2021-09" },
      description:
        "پلتفرم خدمات مارکتینگ برای ارتباط مستقیم میان کسب‌وکارها و اینفلوئنسرها در یک بستر کنترل‌شده و تراکنش‌محور، که فرآیند معامله را از مسیر پرحاشیه‌ی DMها خارج می‌کند.",
      children: [
        {
          title: "Local Influencers Platform",
          description:
            "پلتفرمی که به اینفلوئنسرها امکان می‌دهد پیشنهادهای قیمت‌دار خود را از طریق URL اختصاصی پروفایل (مانند localinfluencers.io/bbc) منتشر کنند و کسب‌وکارها بتوانند در چند مرحله، تبلیغ پولی رزرو نمایند.",
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
      location: { country: "ایران", city: "ساری" },
      period: { start: "2020-03", end: "2021-05" },
      description:
        "شرکت نرم‌افزاری تأسیس ۲۰۰۳، فعال در تولید نرم‌افزارهای مالی، اداری و درمانی، از جمله مجموعه‌ی مدیریت کلینیک و بیمارستان «پارسیزطب» و نرم‌افزار پشتیبان‌گیری «اُباک».",
      children: [
        {
          title: "Parsiz Teb Website",
          description:
            "وب‌سایت معرفی محصول مجموعه‌ی مدیریت کلینیک و بیمارستان پارسیز طب.",
          skills: ["html5", "css3", "javascript", "jquery"],
        },
        {
          title: "Parsiz Office Automation",
          description:
            "نخستین پروژه‌ی حرفه‌ای من با React؛ یک وب اپلیکیشن سازمانی اتوماسیون اداری با دامنه‌ی گسترده‌ی قابلیت‌ها و فرآیندهای پیچیده. مالکیت کامل سمت فرانت‌اند.",
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
          description: "وب‌سایت شرکتی برای معرفی پورتفولیوی کامل محصولات.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
      ],
    },
    {
      title: "Abar Rayane Tabarestan",
      role: "Frontend Developer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.OnSite,
      location: { country: "ایران", city: "بابل" },
      period: { start: "2018-09", end: "2020-03" },
      description:
        "شرکت دانش‌بنیان فعال در حوزه‌ی خدمات IT با تمرکز بر شبکه، توسعه‌ی نرم‌افزار و هوش مصنوعی.",
      children: [
        {
          title: "Eshgh o Choob",
          description:
            "وب‌سایت فروشگاهی محصولات منبت و معرق چوبی دست‌ساز. تمامی صفحات فروشگاه را پیاده‌سازی کردم و خروجی را جهت یکپارچه‌سازی در ساختار MVC به تیم بک‌اند تحویل دادم.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Abar Rayane Corporate Website",
          description:
            "طراحی و پیاده‌سازی end-to-end وب‌سایت شرکتی به همراه طراحی UI درون‌پروژه‌ای، بدون استفاده از ابزارهایی نظیر Figma یا Adobe XD.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Daadyab",
          description:
            "پلتفرم لیگال‌تک برای ارتباط وکلا و موکلین، ارجاع پرونده، مقایسه‌ی وکلا و مشاوره‌ی آنلاین. وب‌سایت اصلی را بر اساس طراحی Adobe XD پیاده‌سازی کردم.",
          skills: ["html5", "css3", "bootstrap", "javascript", "jquery"],
        },
        {
          title: "Sazeh For You",
          description: "لندینگ پیج معرفی محصولات یک شرکت تولیدی صنعتی.",
          skills: ["html5", "css3", "javascript", "jquery"],
        },
        {
          title: "Babol Carpet",
          description:
            "وب‌سایت فروشگاه و پنل مدیریت یکی از تولیدکنندگان قدیمی فرش و موکت کشور با صادرات به بیش از ۲۰ کشور.",
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
        "همکاری مستقل با کارفرمایان در پروژه‌های متنوعی شامل فروشگاه‌های آنلاین، ابزارهای رسانه‌ای مبتنی بر هوش مصنوعی، داشبوردهای computer vision، ولت‌های ارز دیجیتال، فروشگاه‌های تعاملی سه‌بعدی و لندینگ پیج‌های متعارف.",
      children: [
        {
          title: "MS Cosmetic",
          role: "Full-Stack Developer",
          description:
            "پیاده‌سازی end-to-end یک پلتفرم فروشگاهی محصولات آرایشی و بهداشتی شامل وب‌سایت مشتری و پنل ادمین اختصاصی. مالکیت کامل سمت فرانت‌اند و بک‌اند.",
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
          description:
            "استودیوی ویرایش صوت مبتنی بر هوش مصنوعی با ادیتور حرفه‌ای: فایل صوتی آپلود می‌شود، متن آن تولید می‌گردد، و ویرایش به صورت دو طرفه میان waveform و متن همگام می‌شود.",
          skills: ["react", "vite", "typescript", "chakra-ui", "react-query"],
        },
        {
          title: "Driving-Assistance Object Detection Platform",
          description:
            "وب اپلیکیشنی که ویدئوی رانندگی را به فریم تقسیم می‌کند و به کاربر امکان می‌دهد اشیاء مشخصی (مثلاً «خودروی سفید») را تگ‌گذاری کرده و تشخیص‌ها را در هر فریم مشاهده کند.",
          skills: ["react", "typescript", "tailwindcss", "react-query"],
        },
        {
          title: "Cosmetics E-Commerce Site",
          description: "وب‌سایت فروشگاهی برای یک برند آرایشی و بهداشتی مستقل.",
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
          description:
            "کانسپت متفاوت e-commerce: نمایش ۳۶۰ درجه/پانوراما از فضای فروشگاه با محصولات قابل کلیک در سرتاسر صحنه، تا کاربر تجربه‌ای نزدیک به حضور فیزیکی در فروشگاه داشته باشد.",
          skills: ["nextjs", "react", "three", "mui", "gsap", "axios"],
        },
        {
          title: "Crypto Wallet Manager",
          description:
            "پلتفرمی self-custody-style برای مدیریت ولت‌های ارز دیجیتال، انتقال دارایی و Swap. صرافی نیست.",
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
          description: "پروژه‌ای صرفاً در حد لندینگ پیج.",
          skills: ["html5", "css3", "sass", "gulp"],
        },
        {
          title: "Hermes Shop",
          description: "فرانت‌اند فروشگاهی مبتنی بر تمپلیت.",
          skills: ["handlebars", "tailwindcss", "gulp"],
        },
        {
          title: "Quiz",
          description: "رابط تعاملی کوییز با نمودار و کاروسل.",
          skills: ["handlebars", "vite", "tailwindcss", "swiper", "chartjs"],
        },
      ],
    },
  ],

  education: [
    {
      school: "دانشگاه علوم و فناوری مازندران",
      degree: "کارشناسی",
      field_of_study: "مهندسی نرم‌افزار کامپیوتر",
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

export default fa;

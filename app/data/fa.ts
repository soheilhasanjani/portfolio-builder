import type { Portfolio } from "./types";
import {
  ContactType,
  EmploymentType,
  ExperienceType,
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
  },

  impact_highlights: [
    {
      title: "تخصص گسترده در فریم‌ورک‌ها و اکوسیستم",
      description:
        "تجربه پروداکشن در React، Next.js، TypeScript، میکروفرانت‌اند (Nx) و دیزاین سیستم (Storybook) همراه با اشراف عمیق به اکوسیستم — مدیریت state (Redux, React Query, Zustand)، فرم (React Hook Form, Zod, Formik) و UI kit ها (Tailwind, MUI, Chakra, Ant Design, shadcn/ui, Radix).",
    },
    {
      title: "وایب‌کدینگ و توسعه با کمک هوش مصنوعی",
      description:
        "استفاده روزانه از ابزارهای توسعه مبتنی بر AI — GitHub Copilot، Claude Code و Codex — به‌صورت یکپارچه در چرخه‌های واقعی محصول برای تسریع تحویل فیچرها، ری‌فکتورها و طراحی دیزاین سیستم.",
    },
    {
      title: "حوزه‌های متنوع از ابتدا تا انتها",
      description:
        "ساخت سیستم‌های پروداکشن در فین‌تک (صرافی رمزارز، فارکس، کیف پول)، سلامت (EMR کلینیک‌های لاکچری)، فروشگاه آنلاین، فضای ۳۶۰ تعاملی (Three.js/GSAP)، ابزارهای رسانه‌ای مبتنی بر AI و اتوماسیون سازمانی.",
    },
    {
      title: "UI مالی بلادرنگ تحت محدودیت قابلیت اطمینان",
      description:
        "پیاده‌سازی استریم داده بازار با WebSocket برای order book زنده، چارت‌های ترید و UI صرافی پرترافیک که در آن latency و صحت داده مستقیماً اعتماد کاربر و درآمد را تحت تأثیر قرار می‌دهد.",
    },
    {
      title: "معماری چند محصولی و دیزاین سیستم",
      description:
        "طراحی و یکسان‌سازی کتابخانه‌های مشترک کامپوننت، الگوهای لایه‌بندی و ساختار پوشه‌ها در سازمان‌های چندمحصولی — به‌تازگی یک اکوسیستم ۴ محصولی wellness و یک پلتفرم micro-frontend صرافی مبتنی بر Nx.",
    },
    {
      title: "مالکیت Full-Stack در صورت نیاز",
      description:
        "تجربه گسترش به بک‌اند با NestJS، Prisma، JWT، AWS S3 و Docker — به‌تازگی تحویل یک پلتفرم e-commerce کامل (Next.js storefront، Vite admin، NestJS API) به‌صورت تنها توسعه‌دهنده.",
    },
  ],

  experience: [
    {
      title: "Elegant Hoopoe",
      type: ExperienceType.Company,
      role: "Senior Frontend Engineer",
      employment_type: EmploymentType.FullTime,
      location_type: LocationType.Remote,
      location: { country: "امارات متحده عربی", city: "دبی" },
      period: { start: "2025-06", end: "2026-01" },
      description:
        "برند پریمیوم در حوزه‌ی لاغری، زیبایی و wellness با حضور گسترده در امارات، در حال ساخت یک اکوسیستم محصول یکپارچه شامل EMR، تغذیه، توزیع و خدمات درمانی در منزل.",
      responsibilities: [
        "رهبری توسعه‌ی فرانت‌اند در ۴ خط محصول موازی در قالب یک اکوسیستم یکپارچه‌ی سلامت",
        "طراحی و نگهداری کتابخانه‌ی کامپوننت مشترک، مورد استفاده در محصولات EMR، تغذیه و خدمات درمانی در منزل",
        "یکپارچه‌سازی REST API و مدیریت State سرور و کلاینت با React Query و Zustand در تمامی محصولات",
        "بهینه‌سازی عملکرد در ابزارهای بالینی داخلی و محصولات مشتری‌محور",
        "مشارکت در تصمیم‌گیری‌های معماری با تیم‌های محصول، طراحی و بک‌اند",
      ],
      children: [
        {
          title: "Hoopoe EMR",
          type: ExperienceType.Project,
          description:
            "پلتفرم نسل بعدی EMR ویژه‌ی کلینیک‌های لاکچری wellness. ادغام رزرواسیون، تعامل با مشتری، باشگاه مشتریان، رهگیری زنده‌ی تریتمنت‌ها و اتوماسیون فرایندها به کمک هوش مصنوعی با هدف کاهش no-show و افزایش بهره‌وری تیم.",
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
            "پلتفرم تغذیه و سبک زندگی مبتنی بر هوش مصنوعی در اکوسیستم Hoopoe. اقدامات روزانه‌ی کاربر — وعده‌های غذایی، تمرین، خواب و ریکاوری — را به خروجی‌های قابل اندازه‌گیری و از نظر بالینی معتبر تبدیل می‌کند و از کتابخانه‌ی گسترده‌ای از محتوای آموزشی حرفه‌ای پشتیبانی می‌گیرد.",
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
            "برند و پروژه‌ی داخلی Hoopoe و توزیع‌کننده‌ی رسمی محصولات Cutera، با تمرکز بر محصولات زیبایی و درماتولوژی. توسعه‌ی سطح مشتری‌محور برند.",
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
            "محصول ارائه‌ی خدمات پزشکی و زیبایی در منزل در اکوسیستم Hoopoe، شامل رزرواسیون، پشتیبانی و ارائه‌ی خدمت برای درمان‌های در منزل در دبی.",
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
      location: { country: "ارمنستان", city: "ایروان" },
      period: { start: "2024-11", end: "2025-06" },
      description:
        "بروکر تأییدشده‌ی Bybit با ارائه‌ی خدمات معامله و سرمایه‌گذاری در حوزه‌های Spot، Demo، Copy Trading و Bot Trading، و مسیرهای آنبوردینگ از سطح مبتدی تا حرفه‌ای.",
      responsibilities: [
        "طراحی و پیاده‌سازی معماری میکرو فرانت‌اند با Nx برای استقرار مستقل محصولات صرافی",
        "ساخت و راه‌اندازی کتابخانه‌ی UI و دیزاین سیستم سراسری شرکت با مستندسازی در Storybook",
        "ری‌فکتور و بهینه‌سازی کدبیس قدیمی صرافی برای مقیاس‌پذیری و نگهداری بلندمدت",
        "پیاده‌سازی تجربه‌های برندینگ مناسبتی برای مناسبت‌های بزرگ جهانی در تمامی سطوح پلتفرم",
        "یکپارچه‌سازی ابزارهای کدنویسی هوشمند (GitHub Copilot) برای تسریع چرخه‌های ارائه‌ی فیچر",
      ],
      children: [
        {
          title: "Coinlocally Exchange",
          type: ExperienceType.Project,
          description:
            "پلتفرم اصلی صرافی ارز دیجیتال Coinlocally با پشتیبانی از Spot، Demo، Copy Trading و Bot Trading، همراه با تجربه‌های برندینگ مناسبتی برای رویدادهای مهم.",
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
            "پلتفرم مستقل معاملات فارکس Coinlocally، با امکان معامله‌ی جفت‌ارزها در کنار صرافی اصلی.",
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
      location: { country: "ایران", city: "تهران" },
      period: { start: "2022-12", end: "2024-09" },
      description:
        "مرکز پژوهش و توسعه‌ی بین‌رشته‌ای دانشگاه علم و صنعت در تلاقی هوش مصنوعی، علوم شناختی و علوم اجتماعی.",
      responsibilities: [
        "رهبری فرانت‌اند (Frontend Lead) و هماهنگی توسعه در چندین تیم محصول موازی",
        "ساخت و بهینه‌سازی داشبوردهای داده‌محور با نمودارهای پیشرفته برای مجموعه‌های داده‌ی حجیم",
        "توسعه‌ی PWA موبایل‌اول و Chrome Extension به عنوان سطوح تکمیلی پلتفرم",
        "استانداردسازی shadcn/ui و pnpm در تمامی محصولات و تدوین الگوهای مشترک کامپوننت",
        "معماری و تحویل چندین پنل مدیریتی با هدایت تصمیم‌های فنی در سراسر پورتفولیوی مرکز",
      ],
      children: [
        {
          title: "Wiki Knowledge Management Platform",
          type: ExperienceType.Project,
          description:
            "پلتفرمی مشابه ویکی‌پدیا که کاربران در آن محتوا تولید می‌کنند و گروهی مستقل از داوران، انتشار آن را تأیید می‌کنند.",
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
            "پلتفرم تحلیل شبکه‌های اجتماعی بر اساس پارامترهای علوم شناختی، به همراه تولید محتوا برای شبکه‌ها و نمودارهای تحلیلی گسترده.",
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
            "نسخه‌ی نخست یک پلتفرم متمرکز که به شبکه‌های اجتماعی متصل می‌شود و امکان مدیریت گسترده‌ی حساب‌ها (لایک، کامنت، تولید محتوا و …) را به شکلی انسان‌گونه فراهم می‌کند.",
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
            "یک PWA با رویکرد mobile-first برای ارائه‌ی محتوای آموزشی ویدئویی و ارسال پیام به کانال‌های مسنجری. متشکل از دو اپلیکیشن جداگانه: اپ کاربر نهایی و پنل ادمین برای مدیریت محتوا و عملیات.",
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
      location: { country: "ایران", city: "بابل" },
      period: { start: "2021-05", end: "2022-12" },
      description:
        "شرکت فین‌تک تأسیس ۲۰۰۲، متخصص در حوزه‌ی Core Banking، راهکارهای کارت و پرداخت، بانکداری اسلامی و BI برای بانک‌های کوچک تا متوسط.",
      responsibilities: [
        "رهبری فرانت‌اند (Frontend Lead) با معرفی معماری feature-based و استانداردهای مهندسی برای تیم",
        "تحویل اولین پلتفرم صرافی ارز دیجیتال شرکت با SSR در Next.js برای بهینه‌سازی SEO صفحات مالی",
        "یکپارچه‌سازی WebSocket برای آپدیت‌های زنده‌ی دفتر سفارشات، نمودارهای معاملاتی و داده‌های بازار",
        "ساخت پروژه‌ی Starter مشترک فرانت‌اند که در تمامی پروژه‌های شرکت به کار گرفته شد",
        "همکاری با تیم DevOps برای Dockerize کردن اپلیکیشن‌های فرانت‌اند و پیکربندی Webpack برای محیط production",
      ],
      children: [
        {
          title: "Dolphintex Exchange (Web App)",
          type: ExperienceType.Project,
          description:
            "وب اپلیکیشن صرافی ارز دیجیتال با رابط معاملاتی کامل برای Spot Trading و مدیریت پورتفولیو.",
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
          description: "وب‌سایت معرفی صرافی Dolphintex.",
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
      location: { country: "کانادا", city: "چیلیواک، بریتیش کلمبیا" },
      period: { start: "2020-12", end: "2021-09" },
      description:
        "پلتفرم خدمات مارکتینگ برای ارتباط مستقیم میان کسب‌وکارها و اینفلوئنسرها در یک بستر کنترل‌شده و تراکنش‌محور، که فرآیند معامله را از مسیر پرحاشیه‌ی DMها خارج می‌کند.",
      responsibilities: [
        "اولین تجربه‌ی کاری بین‌المللی و کاملاً ریموت — برقراری فرآیندهای async و همکاری بین منطقه‌های زمانی مختلف",
        "بازسازی کامل معماری پروژه از ابتدا و بهبود چشمگیر سازماندهی کدبیس و تجربه‌ی توسعه‌دهنده",
        "یکپارچه‌سازی APIهای شبکه‌های اجتماعی (TikTok، Facebook) برای خودکارسازی جریان‌های کمپین اینفلوئنسری",
        "پیاده‌سازی اعتبارسنجی قوی فرم با Formik و Yup در جریان‌های آنبوردینگ و تراکنشی",
        "تحویل حجم زیادی از فیچرها در چرخه‌های تکرار سریع با استفاده از Next.js و TypeScript",
      ],
      children: [
        {
          title: "Local Influencers Platform",
          type: ExperienceType.Project,
          description:
            "پلتفرمی که به اینفلوئنسرها امکان می‌دهد پیشنهادهای قیمت‌دار خود را از طریق URL اختصاصی پروفایل (مانند localinfluencers.io/bbc) منتشر کنند و کسب‌وکارها بتوانند در چند مرحله، تبلیغ پولی رزرو نمایند.",
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
      location: { country: "ایران", city: "ساری" },
      period: { start: "2020-03", end: "2021-05" },
      description:
        "شرکت نرم‌افزاری تأسیس ۲۰۰۳، فعال در تولید نرم‌افزارهای مالی، اداری و درمانی، از جمله مجموعه‌ی مدیریت کلینیک و بیمارستان «پارسیزطب» و نرم‌افزار پشتیبان‌گیری «اُباک».",
      responsibilities: [
        "ساخت اولین اپلیکیشن React شرکت، ایجاد الگوهای کامپوننت قابل استفاده‌ی مجدد و معماری پروژه‌ی مقیاس‌پذیر",
        "پیاده‌سازی ویدیوکنفرانس زنده با WebRTC در پلتفرم اتوماسیون اداری سازمانی",
        "یکپارچه‌سازی REST API از طریق Swagger و رفع چالش‌های CORS، multipart form-data و پاسخ‌های binary blob",
        "نگهداری و توسعه‌ی کدبیس‌های قدیمی HTML/jQuery در کنار محصولات مدرن مبتنی بر React",
        "استفاده از React Query و Ant Design برای ارائه‌ی کامپوننت‌های UI داده‌محور و یکپارچه در محصول اتوماسیون",
      ],
      children: [
        {
          title: "Parsiz Teb Website",
          type: ExperienceType.Project,
          description:
            "وب‌سایت معرفی محصول مجموعه‌ی مدیریت کلینیک و بیمارستان پارسیز طب.",
          stacks: ["html5", "css3", "javascript", "jquery", "bootstrap", "gulp"],
        },
        {
          title: "Parsiz Office Automation",
          type: ExperienceType.Project,
          description:
            "وب اپلیکیشن سازمانی اتوماسیون اداری با دامنه‌ی گسترده‌ای از قابلیت‌ها شامل مدیریت اسناد، پیگیری وظایف و فرآیندهای تأیید چندمرحله‌ای پیچیده.",
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
          description: "وب‌سایت شرکتی برای معرفی پورتفولیوی کامل محصولات.",
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
      location: { country: "ایران", city: "بابل" },
      period: { start: "2018-09", end: "2020-03" },
      description:
        "شرکت دانش‌بنیان فعال در حوزه‌ی خدمات IT با تمرکز بر شبکه، توسعه‌ی نرم‌افزار و هوش مصنوعی.",
      responsibilities: [
        "تحویل پروژه‌های وب ریسپانسیو در حوزه‌های e-commerce و شرکتی در صنایع مختلف به عنوان توسعه‌دهنده‌ی اصلی فرانت‌اند",
        "تعامل مستقیم با کارفرمایان و صاحبان کسب‌وکار، تبدیل نیازمندی‌ها به رابط‌های آماده‌ی production",
        "خودکارسازی پایپلاین‌های بهینه‌سازی Asset با Gulp و Grunt برای کاهش حجم تصاویر، HTML و CSS",
        "یکپارچه‌سازی نقشه‌های Leaflet.js و کاروسل‌های Swiper در اپلیکیشن‌های مشتری‌محور",
        "کسب تجربه‌ی عملی با کتابخانه‌های متنوع JavaScript، پایه‌گذاری زمینه برای جهش به فریم‌ورک‌های مدرن",
      ],
      children: [
        {
          title: "Eshgh o Choob",
          type: ExperienceType.Project,
          description:
            "وب‌سایت فروش آنلاین محصولات منبت و معرق چوبی دست‌ساز، با صفحات محصول یکپارچه در ساختار MVC بک‌اند.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper"],
        },
        {
          title: "Abar Rayane Corporate Website",
          type: ExperienceType.Project,
          description:
            "وب‌سایت شرکتی برای معرفی پورتفولیوی خدمات IT شرکت در حوزه‌های شبکه، توسعه‌ی نرم‌افزار و هوش مصنوعی.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper"],
        },
        {
          title: "Daadyab",
          type: ExperienceType.Project,
          description:
            "پلتفرم لیگال‌تک برای ارتباط وکلا و موکلین، ارجاع پرونده، مقایسه‌ی وکلا و مشاوره‌ی آنلاین.",
          stacks: ["html5", "css3", "bootstrap", "javascript", "jquery", "gulp", "swiper", "leaflet"],
        },
        {
          title: "Sazeh For You",
          type: ExperienceType.Project,
          description: "لندینگ پیج معرفی محصولات یک شرکت تولیدی صنعتی.",
          stacks: ["html5", "css3", "javascript", "jquery", "bootstrap", "swiper", "grunt"],
        },
        {
          title: "Babol Carpet",
          type: ExperienceType.Project,
          description:
            "پلتفرم فروش آنلاین و پنل مدیریت برای یکی از تولیدکنندگان قدیمی فرش و موکت کشور با صادرات به بیش از ۲۰ کشور.",
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
        "همکاری مستقل با کارفرمایان در پروژه‌های متنوعی شامل فروشگاه‌های آنلاین، ابزارهای رسانه‌ای مبتنی بر هوش مصنوعی، داشبوردهای computer vision، ولت‌های ارز دیجیتال، تجربه‌های خرده‌فروشی تعاملی سه‌بعدی و لندینگ پیج.",
      children: [
        {
          title: "MS Cosmetic",
          type: ExperienceType.Project,
          role: "Full-Stack Developer",
          description:
            "پلتفرم فروش آنلاین محصولات آرایشی و بهداشتی، ساخته شده از صفر تا صد شامل وب‌سایت مشتری و پنل ادمین اختصاصی، با پوشش کامل فرانت‌اند و بک‌اند.",
          responsibilities: [
            "توسعه‌دهنده‌ی تنها در کل استک: فروشگاه Next.js، پنل ادمین Vite، REST API با NestJS، Prisma ORM و زیرساخت Docker",
            "پیاده‌سازی احراز هویت JWT، مدیریت رسانه با AWS S3، اعلان‌های زنده‌ی WebSocket و استقرار containerized",
            "اولین تجربه‌ی کامل مالکیت full-stack — مسئولیت کامل تصمیم‌های معماری در فرانت‌اند، بک‌اند و DevOps",
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
            "استودیوی ویرایش صوت مبتنی بر هوش مصنوعی: فایل صوتی آپلود می‌شود، متن آن تولید می‌گردد، و ویرایش به صورت دو طرفه میان waveform و متن همگام می‌شود.",
          responsibilities: [
            "ساخت ویرایشگر دوطرفه‌ی waveform-transcript با همگام‌سازی کامل بین ویرایش صوتی و متنی",
            "پیاده‌سازی محیط ویژوال تعاملی صوت برای تجربه‌ی ویرایش timeline‌محور در مرورگر",
          ],
          stacks: ["react", "vite", "typescript", "chakra-ui", "react-query"],
        },
        {
          title: "Driving-Assistance Object Detection Platform",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "داشبورد وب که ویدئوی رانندگی را به فریم تقسیم می‌کند و به کاربر امکان می‌دهد اشیاء مشخصی را تگ‌گذاری کرده و تشخیص‌ها را در هر فریم مشاهده کند.",
          responsibilities: [
            "مهندسی پردازش ویدیو در سمت کلاینت با FFmpeg.wasm برای تقسیم فریم‌ها بدون نیاز به سرور",
            "ساخت رابط annotation برای برچسب‌گذاری اشیاء به ازای هر فریم، برای تغذیه‌ی مدل تشخیص",
          ],
          stacks: ["react", "typescript", "tailwindcss", "react-query", "ffmpeg"],
        },
        {
          title: "Cosmetics E-Commerce Site",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "پلتفرم فروش آنلاین برای یک برند آرایشی و بهداشتی با کاتالوگ محصول کامل و جریان خرید.",
          responsibilities: [
            "تحویل یک پلتفرم e-commerce کامل با کاتالوگ محصول، سبد خرید، جریان خرید و پنل ادمین اختصاصی",
            "استفاده از SSR با Next.js برای بهینه‌سازی SEO صفحات محصول و دسته‌بندی با زمان بارگذاری سریع",
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
            "تجربه‌ی e-commerce با نمایش ۳۶۰ درجه/پانوراما از فضای خرده‌فروشی و محصولات قابل کلیک در صحنه، به گونه‌ای که کاربر احساس حضور در فروشگاه را از مرورگر تجربه کند.",
          responsibilities: [
            "ساخت محیط خرده‌فروشی سه‌بعدی ۳۶۰ درجه با Three.js و GSAP با امکان تعامل با محصولات در صحنه",
            "ارائه‌ی تجربه‌ی خرید WebGL‌محور و ایمرسیو که گشت‌وگذار درون فروشگاه را از مرورگر شبیه‌سازی می‌کند",
          ],
          stacks: ["nextjs", "react", "three", "mui", "gsap", "axios"],
        },
        {
          title: "Crypto Wallet Manager",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description:
            "پلتفرم self-custody-style برای مدیریت ولت‌های ارز دیجیتال، انتقال دارایی و Swap — نه صرافی.",
          responsibilities: [
            "تحویل ولت ارز دیجیتال self-custody با مدیریت چند دارایی، انتقال و قابلیت Swap",
            "پیاده‌سازی رهگیری زنده‌ی پورتفولیو و تاریخچه‌ی تراکنش‌ها با Redux و React Query",
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
          description: "لندینگ پیج تبلیغاتی برای یک سرویس گردشگری.",
          responsibilities: [
            "ساخت لندینگ پیج تبلیغاتی ریسپانسیو برای یک سرویس گردشگری با Bootstrap و پایپلاین بهینه‌سازی Gulp",
          ],
          stacks: ["html5", "css3", "sass", "gulp", "bootstrap"],
        },
        {
          title: "Hermes Shop",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description: "فرانت‌اند فروش آنلاین مبتنی بر تمپلیت برای یک برند خرده‌فروشی.",
          responsibilities: [
            "توسعه‌ی فرانت‌اند فروشگاهی مبتنی بر template engine با Handlebars و پایپلاین ساخت خودکار Gulp",
          ],
          stacks: ["handlebars", "tailwindcss", "gulp", "bootstrap"],
        },
        {
          title: "Quiz",
          type: ExperienceType.Project,
          role: "Senior Frontend Engineer",
          description: "رابط تعاملی کوییز با نمودارهای تحلیلی و رابط کاروسل‌محور.",
          responsibilities: [
            "پیاده‌سازی پلتفرم کوییز تعاملی با داشبورد تحلیلی Chart.js و رابط کاروسل‌محور با Swiper",
          ],
          stacks: ["handlebars", "vite", "tailwindcss", "swiper", "chartjs"],
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
      stacks: ["javascript", "html5", "css3", "git"],
    },
  ],

  additional_information: [
    {
      label: "زبان‌ها",
      value: "فارسی (مادری) · انگلیسی (سطح کاری حرفه‌ای)",
    },
    {
      label: "نحوه همکاری",
      value: "پذیرای فرصت‌های ریموت بین‌المللی و حضوری در تهران",
    },
    {
      label: "آمادگی شروع",
      value: "فوری",
    },
    {
      label: "وضعیت",
      value: "آماده موقعیت‌های مهندس ارشد فرانت‌اند",
    },
  ],

  preferences: {
    portfolio_goal: null,
    tone: "professional",
    languages_output: ["fa", "en"],
  },
};

export default fa;

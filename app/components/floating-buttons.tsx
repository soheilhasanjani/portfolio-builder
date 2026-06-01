"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Props {
  lang: string;
}

export function FloatingButtons({ lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => setMounted(true), []);

  function switchLang() {
    const otherLocale = lang === "fa" ? "en" : "fa";
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/") || "/");
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  async function downloadPdf() {
    const main = document.querySelector("main");
    if (!main || downloading) return;

    setDownloading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);

      const isDark = document.documentElement.classList.contains("dark");
      const bg = isDark ? "#030712" : "#ffffff";

      const canvas = await html2canvas(main as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: bg,
      });

      // one continuous page sized to exact content — no splits
      const w = canvas.width / 2;
      const h = canvas.height / 2;

      const pdf = new jsPDF({
        unit: "pt",
        format: [w, h],
        orientation: "portrait",
      });

      pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, w, h);
      pdf.save("resume.pdf");
    } finally {
      setDownloading(false);
    }
  }

  const btnClass =
    "w-11 h-11 rounded-full bg-[#ffffff] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333] shadow-[0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#4d4d4d] dark:text-[#a1a1a1] hover:bg-[#fafafa] dark:hover:bg-[#2a2a2a] transition-colors disabled:opacity-50";

  return (
    <div className="no-print fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Language */}
      <button onClick={switchLang} title="Switch language" className={btnClass}>
        <span className="mono text-xs font-bold">{lang === "fa" ? "EN" : "FA"}</span>
      </button>

      {/* Dark / Light */}
      <button onClick={toggleTheme} title="Toggle theme" className={btnClass}>
        {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Download PDF */}
      <button
        onClick={downloadPdf}
        title="Download as PDF"
        disabled={downloading}
        className={btnClass}
      >
        {downloading ? <SpinnerIcon /> : <DownloadIcon />}
      </button>
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

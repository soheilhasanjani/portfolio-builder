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
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("compact") === "true";
    setCompact(stored);
    document.documentElement.classList.toggle("compact", stored);
  }, []);

  function switchLang() {
    const otherLocale = lang === "fa" ? "en" : "fa";
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    router.push(segments.join("/") || "/");
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function toggleCompact() {
    const next = !compact;
    setCompact(next);
    localStorage.setItem("compact", String(next));
    document.documentElement.classList.toggle("compact", next);
  }

  async function downloadPdf() {
    const main = document.querySelector("main");
    if (!main || downloading) return;

    setDownloading(true);
    try {
      const [{ toPng }, { default: jsPDF }] = await Promise.all([
        import("html-to-image"),
        import("jspdf"),
      ]);

      const el = main as HTMLElement;
      const isDark = document.documentElement.classList.contains("dark");
      const bgColor = isDark ? "#171717" : "#fafafa";
      const w = el.scrollWidth;
      const h = el.scrollHeight;

      const opts = { pixelRatio: 2, backgroundColor: bgColor, width: w, height: h };

      // first call embeds fonts; second call renders with them loaded
      await toPng(el, opts);
      const dataUrl = await toPng(el, opts);

      // convert CSS px → PDF pt  (96 dpi screen → 72 pt/in)
      const ptW = (w * 72) / 96;
      const ptH = (h * 72) / 96;

      const pdf = new jsPDF({ unit: "pt", format: [ptW, ptH], orientation: "portrait" });
      pdf.addImage(dataUrl, "PNG", 0, 0, ptW, ptH);
      pdf.save("resume.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloading(false);
    }
  }

  const btnClass =
    "w-11 h-11 rounded-full bg-[#ffffff] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333] shadow-[0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#4d4d4d] dark:text-[#a1a1a1] hover:bg-[#fafafa] dark:hover:bg-[#2a2a2a] transition-colors disabled:opacity-50";

  const activeBtnClass =
    "w-11 h-11 rounded-full bg-[#171717] dark:bg-[#ffffff] border border-[#171717] dark:border-[#ffffff] shadow-[0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#ffffff] dark:text-[#171717] transition-colors";

  return (
    <div className="no-print fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Language */}
      <button onClick={switchLang} title="Switch language" className={btnClass}>
        <span className="mono text-xs font-bold">{lang === "fa" ? "EN" : "FA"}</span>
      </button>

      {/* Compact toggle */}
      <button
        onClick={toggleCompact}
        title={compact ? "Show full view" : "Compact view"}
        className={mounted && compact ? activeBtnClass : btnClass}
      >
        {mounted && compact ? <ExpandIcon /> : <CompactIcon />}
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

// Full view active → click to compress (shows lines with paragraph lines between headers)
function CompactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="5" x2="21" y2="5" />
      <line x1="3" y1="9" x2="15" y2="9" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="3" y1="18" x2="13" y2="18" />
    </svg>
  );
}

// Compact active → click to expand (shows header-only lines)
function ExpandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

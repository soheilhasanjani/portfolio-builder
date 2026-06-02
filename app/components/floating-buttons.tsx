"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface Props {
  lang: string;
}

type PdfMode = "visual" | "cv";

export function FloatingButtons({ lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [downloading, setDownloading] = useState<PdfMode | null>(null);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("compact") === "true";
    setCompact(stored);
    document.documentElement.classList.toggle("compact", stored);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

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

  async function downloadPdf(mode: PdfMode) {
    if (downloading) return;
    setDownloading(mode);
    setMenuOpen(false);

    try {
      const themeForExport = resolvedTheme === "dark" ? "dark" : "light";
      const endpoint =
        mode === "cv"
          ? `/api/cv?lang=${lang}`
          : `/api/portfolio-pdf?lang=${lang}&theme=${themeForExport}`;
      const res = await fetch(endpoint);
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({ error: res.statusText }));
        throw new Error(errBody.error ?? "PDF generation failed");
      }
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download =
        mode === "cv" ? `cv-${lang}.pdf` : `portfolio-${lang}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error("PDF download failed:", err);
      alert(
        `PDF download failed: ${
          err instanceof Error ? err.message : "unknown error"
        }`,
      );
    } finally {
      setDownloading(null);
    }
  }

  const btnClass =
    "w-11 h-11 rounded-full bg-surface border border-border shadow-[0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.05)] flex items-center justify-center text-muted hover:bg-hover transition-colors disabled:opacity-50";

  const activeBtnClass =
    "w-11 h-11 rounded-full bg-inverse border border-inverse shadow-[0px_2px_2px_rgba(0,0,0,0.04),0px_8px_16px_-4px_rgba(0,0,0,0.04)] flex items-center justify-center text-on-inverse transition-colors";

  const isDownloading = downloading !== null;

  return (
    <div className="no-print fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button onClick={switchLang} title="Switch language" className={btnClass}>
        <span className="mono text-xs font-bold">{lang === "fa" ? "EN" : "FA"}</span>
      </button>

      <button
        onClick={toggleCompact}
        title={compact ? "Show full view" : "Compact view"}
        className={mounted && compact ? activeBtnClass : btnClass}
      >
        {mounted && compact ? <ExpandIcon /> : <CompactIcon />}
      </button>

      <button onClick={toggleTheme} title="Toggle theme" className={btnClass}>
        {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <div ref={menuRef} className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          title="Download as PDF"
          disabled={isDownloading}
          className={btnClass}
        >
          {isDownloading ? <SpinnerIcon /> : <DownloadIcon />}
        </button>
        {menuOpen && !isDownloading && (
          <div className="absolute bottom-0 right-full mr-3 w-56 rounded-lg border border-border bg-surface shadow-[0px_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
            <button
              onClick={() => downloadPdf("visual")}
              className="block w-full text-left px-4 py-3 text-sm text-ink-soft hover:bg-hover border-b border-border"
            >
              <div className="font-medium">Portfolio (WYSIWYG)</div>
              <div className="text-xs text-dim mt-0.5">
                Visual replica of the page
              </div>
            </button>
            <button
              onClick={() => downloadPdf("cv")}
              className="block w-full text-left px-4 py-3 text-sm text-ink-soft hover:bg-hover"
            >
              <div className="font-medium">CV (ATS-friendly)</div>
              <div className="text-xs text-dim mt-0.5">
                Single-column, plain text
              </div>
            </button>
          </div>
        )}
      </div>
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

function ExpandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

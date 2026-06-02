import puppeteer from "puppeteer-core";

export const runtime = "nodejs";
export const maxDuration = 60;

const DEFAULT_CHROME_PATHS = [
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  // Linux
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

function resolveChromePath(): string | null {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  return DEFAULT_CHROME_PATHS[0];
}

const HIDE_NOISE_CSS = `
  /* Hide floating UI */
  .no-print { display: none !important; }
  /* Hide Next.js dev indicator */
  nextjs-portal,
  #__next-build-watcher,
  [data-nextjs-toast],
  [data-nextjs-dialog-overlay],
  [data-nextjs-dialog] { display: none !important; }
  /* Strip page padding */
  html, body { margin: 0 !important; padding: 0 !important; }
  main { padding-top: 24px !important; padding-bottom: 24px !important; }
`;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const langParam = url.searchParams.get("lang") ?? "en";
  const lang = ["en", "fa"].includes(langParam) ? langParam : "en";
  const themeParam = url.searchParams.get("theme");
  const theme = themeParam === "dark" ? "dark" : "light";

  const origin = url.origin;
  const targetUrl = `${origin}/${lang}?print=1`;

  const executablePath = resolveChromePath();
  if (!executablePath) {
    return new Response(
      JSON.stringify({
        error:
          "Chrome executable path not found. Set CHROME_PATH env var to a local Chrome/Chromium binary.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;
  try {
    browser = await puppeteer.launch({
      executablePath,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Inject theme into localStorage before the page loads so next-themes
    // picks it up on its initial hydration.
    await page.evaluateOnNewDocument((t) => {
      try {
        window.localStorage.setItem("theme", t);
      } catch {
        /* ignore */
      }
    }, theme);

    // Set viewport wide enough to render desktop layout.
    await page.setViewport({ width: 900, height: 1200, deviceScaleFactor: 2 });

    await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });

    // Inject styles to hide floating UI and Next dev indicator, and clean
    // up padding around the document.
    await page.addStyleTag({ content: HIDE_NOISE_CSS });

    // Wait briefly so the injected CSS settles before measuring.
    await new Promise((r) => setTimeout(r, 100));

    // Measure full rendered content height and produce a single-page PDF.
    const dimensions = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const width = Math.max(body.scrollWidth, html.scrollWidth);
      return { width, height };
    });

    const pdf = await page.pdf({
      printBackground: true,
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: false,
    });

    const fileName = `portfolio-${lang}-${theme}.pdf`;
    return new Response(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "PDF generation failed";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    if (browser) await browser.close();
  }
}

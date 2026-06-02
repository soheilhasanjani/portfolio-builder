import { getData, hasLocale } from "@/app/[lang]/dictionaries";
import { renderCVPdf } from "./render";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const langParam = url.searchParams.get("lang") ?? "en";
  const lang = hasLocale(langParam) ? langParam : "en";

  const portfolio = await getData(lang);
  const buffer = await renderCVPdf(portfolio);

  const fileName = `${portfolio.profile.first_name}_${portfolio.profile.last_name}_CV.pdf`;

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}

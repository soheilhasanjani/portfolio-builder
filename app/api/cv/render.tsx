import { renderToBuffer } from "@react-pdf/renderer";
import type { Portfolio } from "@/app/data/types";
import { CVDocument } from "./CVDocument";

export function renderCVPdf(portfolio: Portfolio): Promise<Buffer> {
  return renderToBuffer(<CVDocument portfolio={portfolio} />);
}

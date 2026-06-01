import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

const handleI18nRouting = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Skip Next.js internals, static asset routes, and any path with a file
  // extension (e.g. /images/react.svg, /favicon.ico) so they aren't run
  // through i18n routing.
  matcher: ["/((?!_next|_vercel|images|favicon.ico|.*\\..*).*)"],
};

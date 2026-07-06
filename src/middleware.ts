import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Parked while the site is on hold (single English landing page only).
// The i18n middleware is preserved but disabled via an empty matcher so `/`
// is not redirected into the parked `_onhold` locale tree.
// To bring the full site back: rename `src/app/_onhold` → `src/app/[locale]`,
// remove `src/app/{layout,page}.tsx` + `holding.css` + `icon.svg`, and restore
// the matcher below to: "/((?!api|_next|_vercel|.*\\..*).*)".
export default createMiddleware(routing);

export const config = {
  matcher: [],
};

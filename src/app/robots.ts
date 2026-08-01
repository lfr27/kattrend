import type { MetadataRoute } from "next";
import { IS_PRODUCTION, PRODUCTION_ORIGIN } from "./site";

// Preview deployments serve the same content as production; blocking them at the
// robots level keeps dev.kattrend.com out of search results.
export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${PRODUCTION_ORIGIN}/sitemap.xml`,
  };
}

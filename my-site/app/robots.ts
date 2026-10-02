import type { MetadataRoute } from "next";
import { BASE_PATH, SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: `${BASE_PATH || ""}/`,
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

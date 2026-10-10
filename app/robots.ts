import type { MetadataRoute } from "next";

// Required by `output: export` — Next 16 rejects route handlers that are not
// explicitly static.
export const dynamic = "force-static";

/**
 * No production domain is confirmed yet, so this deliberately emits rules
 * only — no `Sitemap:` line and no canonical/OG URLs. Add `metadataBase`
 * in `app/layout.tsx` and a `app/sitemap.ts` once the domain is live.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

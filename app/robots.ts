import type { MetadataRoute } from "next";

// Required by `output: export` — Next 16 rejects route handlers that are not
// explicitly static.
export const dynamic = "force-static";

/**
 * Emits rules only — no `Sitemap:` line until an `app/sitemap.ts` exists.
 * The production origin is configured as `metadataBase` in `app/layout.tsx`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: no server code, no dynamic routes. A static
  // export keeps the whole site on a CDN with nothing in the request path.
  output: "export",
  images: {
    // No image optimiser exists in a static export.
    unoptimized: true,
    // The brand mark, lockup and favicon are our own first-party SVGs from
    // the official Nexavora logo package; nothing third-party is loaded.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  trailingSlash: true,
};

export default nextConfig;

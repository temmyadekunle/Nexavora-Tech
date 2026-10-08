import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: no server code, no dynamic routes. A static
  // export keeps the whole site on a CDN with nothing in the request path.
  output: "export",
  images: {
    // No image optimiser exists in a static export.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

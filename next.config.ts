import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "Kosh-studios";
// If you connect your custom domain to GitHub Pages, set USE_BASEPATH to false
const useBasePath = process.env.USE_CUSTOM_DOMAIN !== "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && useBasePath ? `/${repoName}` : "",
  assetPrefix: isProd && useBasePath ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const repoName = "friday-page";
const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(githubPages ? { basePath } : {}),
};

export default nextConfig;

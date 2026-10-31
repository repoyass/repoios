const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/repoios",
  assetPrefix: "/repoios/",
  images: {
    unoptimized: true,
  },
  // Pin the workspace root so Next.js doesn't get confused by the lockfile
  // sitting in the parent home directory.
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;

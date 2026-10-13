// A project site on GitHub Pages is served from /<repo-name>; a user site
// (<user>.github.io) is served from the root. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH accordingly, and local dev leaves it empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to ./out
  output: "export",
  basePath,
  // /news/ -> news/index.html, which every static host serves reliably
  trailingSlash: true,
  // The image optimizer needs a server, which GitHub Pages doesn't have
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

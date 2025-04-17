import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // Core settings for reliability
  reactStrictMode: true,
  // Ignore checks during builds for faster deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Required for static export
  images: {
    unoptimized: true
  },
  // Static export mode
  output: 'export',
  // Required for static HTML file paths
  trailingSlash: true,
  // Disable all experimental features
  experimental: {}
};

export default withMDX(config);

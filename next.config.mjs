import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // Static site generation
  output: 'export',
  // Disable certain features for static export
  trailingSlash: true,
  // Minimal experimental features
  experimental: {
    // No server actions needed
  }
};

export default withMDX(config);

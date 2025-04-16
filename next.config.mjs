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
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
  },
  // Reduce build times
  onDemandEntries: {
    // Keep pages in memory for longer
    maxInactiveAge: 60 * 60 * 1000,
    // Have more pages loaded at once
    pagesBufferLength: 5,
  },
  // Cache build output
  output: 'standalone',
};

export default withMDX(config);

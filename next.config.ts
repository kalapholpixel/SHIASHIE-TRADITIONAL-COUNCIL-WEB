import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: process.env.SKIP_IMAGE_OPTIMIZATION === 'true', // For Netlify
  },

  // Build optimization
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    turbopack: process.env.TURBOPACK === 'true' ? {} : undefined,
  },

  // Increase build timeout settings
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Disable static optimization for pages with dynamic content
  staticPageGenerationTimeout: 120,

  // Enable React strict mode for development
  reactStrictMode: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
};

export default nextConfig;

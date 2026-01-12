import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
  },

  // Configure webpack for better tree-shaking and bundle splitting
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize client-side bundle
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            ...((config.optimization?.splitChunks as { cacheGroups?: Record<string, unknown> })?.cacheGroups || {}),
            three: {
              test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
              name: "three",
              chunks: "all",
              priority: 20,
            },
            copilotkit: {
              test: /[\\/]node_modules[\\/]@copilotkit[\\/]/,
              name: "copilotkit",
              chunks: "all",
              priority: 20,
            },
            hume: {
              test: /[\\/]node_modules[\\/]@humeai[\\/]/,
              name: "hume",
              chunks: "all",
              priority: 20,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;

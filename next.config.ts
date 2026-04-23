import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.shadcnspace.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

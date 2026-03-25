import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ai.hamburg",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;

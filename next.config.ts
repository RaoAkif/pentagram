import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This will allow any HTTPS source
      },
      // If you want to limit to specific domains or patterns:
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https",
        hostname: "public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "**.vercel-storage.com", // Handles subdomains like gzljyytzoegjdvci.public.blob.vercel-storage.com
      },
    ],
  },
};

export default nextConfig;

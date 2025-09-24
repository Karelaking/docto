import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useLightningcss: false, // Disable Lightning CSS
  },
};

export default nextConfig;

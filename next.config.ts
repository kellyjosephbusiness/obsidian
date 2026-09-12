import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: { qualities: [60, 75] },
};

export default nextConfig;

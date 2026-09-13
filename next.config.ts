import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Vercel does its own output tracing; standalone output breaks its build (.nft.json ENOENT).
  output: process.env.VERCEL ? undefined : "standalone",
  images: { qualities: [60, 75] },
};

export default nextConfig;

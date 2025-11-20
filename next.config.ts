import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    domains: ["kclub.me"],
    unoptimized: true,
  },
    output: 'export',

};

export default nextConfig;


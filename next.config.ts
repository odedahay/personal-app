import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["tailwindui.com", "images.unsplash.com", "eincode.com", "thrangra.sirv.com"]
  }
};

export default nextConfig;

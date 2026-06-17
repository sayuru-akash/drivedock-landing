import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Vercel best practice: optimizePackageImports eliminates barrel import cost
    // Prevents loading 1,583+ modules from lucide-react on every cold start
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;

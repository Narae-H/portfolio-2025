import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {  
  basePath: isProd ? '/portfolio-2025' : '',     
  assetPrefix: isProd ? '/portfolio-2025/' : '', 
};

export default nextConfig;

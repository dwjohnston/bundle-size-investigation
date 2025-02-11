import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  /* config options here */

  webpack: (config, { isServer }) => {


    config.optimization.splitChunks = {
      'chunks': 'all',
    };


    return config;
  }
}
 
export default nextConfig
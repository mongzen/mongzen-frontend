import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'tremendous-confidence-db98bf7d24.strapiapp.com',
        pathname: '/uploads/**',
      },
    ],
    // Alternative older syntax (if above doesn't work)
    domains: [
      'localhost:1337',
      'tremendous-confidence-db98bf7d24.strapiapp.com',
    ],
  },
};

export default nextConfig;

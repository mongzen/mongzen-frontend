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
        hostname: 'tremendous-confidence-db98bf7d24.media.strapiapp.com',
        pathname: '/**',
      },
    ],
    // Alternative older syntax (if above doesn't work)
    domains: [
      'localhost:1337',
      'your-strapi-backend.com',
      'tremendous-confidence-db98bf7d24.media.strapiapp.com',
    ],
  },
};

export default nextConfig;

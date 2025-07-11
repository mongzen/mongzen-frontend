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
        hostname: 'your-strapi-backend.com',
        pathname: '/uploads/**',
      },
    ],
    // Alternative older syntax (if above doesn't work)
    domains: ['localhost:1337', 'your-strapi-backend.com'],
  },
};

export default nextConfig;

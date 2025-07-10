# API Configuration Guide

## Environment Setup

This application uses environment variables to configure API endpoints. This allows you to easily switch between different environments (development, staging, production) without changing the code.

### Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```bash
# For local development with Strapi running on localhost
NEXT_PUBLIC_API_URL=http://localhost:1337

# For production deployment
# NEXT_PUBLIC_API_URL=https://your-production-api.com

# For staging environment
# NEXT_PUBLIC_API_URL=https://your-staging-api.com
```

### Important Notes

1. **NEXT*PUBLIC* prefix**: All environment variables that need to be available in the browser must start with `NEXT_PUBLIC_`

2. **Default fallback**: If no environment variable is set, the application will default to `http://localhost:1337`

3. **Restart required**: After changing environment variables, you need to restart your Next.js development server

### Usage in Code

The API configuration is handled automatically by:

- **API Service** (`src/services/api.ts`): Handles all API requests
- **Image Utils** (`src/utils/imageUtils.ts`): Handles image URL formatting
- **Constants** (`src/constants/index.ts`): Provides configuration values

### Testing Different Environments

```bash
# Development (default)
npm run dev

# Production build
npm run build
npm run start

# With custom API URL
NEXT_PUBLIC_API_URL=https://your-api.com npm run dev
```

### Deployment

For deployment platforms like Vercel, Netlify, or others:

1. Add environment variables in your deployment platform's settings
2. Set `NEXT_PUBLIC_API_URL` to your production API URL
3. Deploy your application

The application will automatically use the correct API endpoint based on the environment variable.

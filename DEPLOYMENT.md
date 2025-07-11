# Mongzen CI/CD Setup Guide

This project includes comprehensive CI/CD configuration for automated deployment to Vercel.

## 🚀 Production URLs

- **Website**: <https://www.mongzen.space/>
- **API Backend**: Set via environment variable `NEXT_PUBLIC_API_URL`

## 📁 CI/CD Files

```
├── .github/workflows/ci-cd.yml   # GitHub Actions workflow
├── vercel.json                   # Vercel deployment config
├── deploy.sh                     # Deployment script
├── .env.local.example           # Environment template
└── package.json                 # Scripts and dependencies
```

## 🔧 Vercel Setup Instructions

### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm ci`

### 2. Environment Variables in Vercel

Add these environment variables in your Vercel project settings:

**Environment Variables**:

```bash
NEXT_PUBLIC_API_URL = https://your-strapi-backend.com
```

> **Note**: Replace `https://your-strapi-backend.com` with your actual Strapi backend URL.

### 3. Custom Domain Setup

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add custom domain: `www.mongzen.space`
3. Configure DNS records as instructed by Vercel

### 4. GitHub Actions Setup (Optional)

If you want to use GitHub Actions for additional CI/CD:

1. **Repository Secrets** (GitHub Settings → Secrets):

   ```
   VERCEL_TOKEN              # Your Vercel token
   VERCEL_ORG_ID            # Your Vercel organization ID
   VERCEL_PROJECT_ID        # Your Vercel project ID
   ```

2. **Get Vercel Token**:

   ```bash
   npx vercel login
   npx vercel link
   npx vercel env pull .env.local
   ```

## 🔄 Deployment Workflow

### Automatic Deployment (Recommended)

Vercel automatically deploys when you push to GitHub:

- **Push to `main` branch** → Production deployment (`www.mongzen.space`)
- **Push to `develop` branch** → Preview deployment
- **Pull Requests** → Preview deployment

### Manual Deployment

Using the deployment script:

```bash
# Development
npm run deploy:dev

# Staging
npm run deploy:staging

# Production
npm run deploy
```

Using Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 🛠 Available Commands

```bash
# Development
npm run dev                    # Start development server
npm run build                  # Build for production
npm run start                  # Start production server

# Quality Checks
npm run lint                  # Run ESLint
npm run lint:fix             # Fix ESLint issues
npm run format               # Format code with Prettier
npm run format:check         # Check formatting
npm run type-check           # TypeScript type checking
npm run check-all            # Run all quality checks

# Deployment
npm run deploy               # Deploy to production
npm run deploy:staging       # Deploy to staging
npm run deploy:dev          # Start development server
```

## 🏷 Branch Strategy

- **`main`**: Production branch
  - Auto-deploys to `www.mongzen.space`
  - Requires all CI checks to pass

- **`develop`**: Staging branch
  - Auto-deploys to Vercel preview URL
  - Integration testing environment

- **`feature/*`**: Feature branches
  - Creates preview deployments
  - Runs CI tests

## 🔒 Security & Performance

- **Security Headers**: Configured in `vercel.json`
- **API Proxy**: Direct connection to Strapi backend
- **Environment Variables**: Secure handling of API URLs
- **SSL**: Automatically handled by Vercel

## 📊 Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Deployment Logs**: Available in Vercel dashboard
- **Build Status**: GitHub Actions status badges

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:

   ```bash
   # Test locally first
   npm run check-all
   npm run build
   ```

2. **API Connection Issues**:
   - Verify `NEXT_PUBLIC_API_URL` in Vercel settings
   - Check Strapi backend status
   - Test API endpoints directly

3. **Domain Issues**:
   - Verify DNS configuration
   - Check Vercel domain settings
   - Ensure SSL certificate is active

4. **Environment Variables**:
   - Check Vercel project settings
   - Verify variable names (must start with `NEXT_PUBLIC_`)
   - Redeploy after changing environment variables

### Debug Commands

```bash
# Check build locally
npm run build

# Test API connection
curl $NEXT_PUBLIC_API_URL/api/homepage

# Check Vercel deployment
vercel logs
```

## 📞 Support

For deployment issues:

1. Check Vercel deployment logs
2. Verify environment variables
3. Test local build process
4. Check GitHub Actions workflow (if used)

## 🎯 Next Steps

1. Push your code to GitHub
2. Connect repository to Vercel
3. Configure domain `www.mongzen.space`
4. Set environment variables
5. Deploy! 🚀

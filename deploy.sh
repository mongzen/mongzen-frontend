#!/bin/bash

# Mongzen Frontend Deployment Script
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-development}
BUILD_DIR=".next"

echo "🚀 Starting deployment for Mongzen $ENVIRONMENT environment"

# Check if environment is valid
if [[ ! "$ENVIRONMENT" =~ ^(development|staging|production)$ ]]; then
    echo "❌ Invalid environment. Use: development, staging, or production"
    exit 1
fi

# Load environment variables
if [ -f ".env.$ENVIRONMENT" ]; then
    echo "📄 Loading environment variables from .env.$ENVIRONMENT"
    export $(cat .env.$ENVIRONMENT | grep -v '^#' | xargs)
elif [ -f ".env.local" ] && [ "$ENVIRONMENT" = "development" ]; then
    echo "📄 Loading environment variables from .env.local"
    export $(cat .env.local | grep -v '^#' | xargs)
fi

# Set API URL based on environment
case $ENVIRONMENT in
    "development")
        export NEXT_PUBLIC_API_URL="${NEXT_PUBLIC_API_URL:-http://localhost:1337}"
        ;;
    "staging")
        if [ -z "$NEXT_PUBLIC_API_URL" ]; then
            echo "❌ NEXT_PUBLIC_API_URL environment variable is required for staging deployment"
            exit 1
        fi
        ;;
    "production")
        if [ -z "$NEXT_PUBLIC_API_URL" ]; then
            echo "❌ NEXT_PUBLIC_API_URL environment variable is required for production deployment"
            exit 1
        fi
        ;;
esac

echo "🔧 API URL: $NEXT_PUBLIC_API_URL"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run quality checks
echo "🔍 Running quality checks..."
npm run lint
npm run type-check

# Build application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Build failed - $BUILD_DIR directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Environment-specific deployment
case $ENVIRONMENT in
    "development")
        echo "🚀 Starting development server..."
        npm run dev
        ;;
    "staging"|"production")
        echo "🚀 Deploying to $ENVIRONMENT..."
        if command -v vercel &> /dev/null; then
            if [ "$ENVIRONMENT" = "production" ]; then
                vercel --prod
            else
                vercel
            fi
        else
            echo "⚠️  Vercel CLI not found. Install with: npm i -g vercel"
            echo "📝 Manual deployment: Push to GitHub for automatic deployment"
        fi
        ;;
esac

echo "🎉 Deployment process completed for $ENVIRONMENT!"
echo "🌐 Production URL: https://www.mongzen.space/"

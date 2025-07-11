# Mongzen Frontend

A modern Next.js frontend application for Mongzen, designed to work with a Strapi backend API.

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Responsive Design** that works on all devices
- 🔌 **Strapi Integration** for content management
- 🎯 **TypeScript** for type safety
- 📋 **ESLint & Prettier** for code quality
- 🚀 **CI/CD** with GitHub Actions
- ⚡ **Performance Optimized** with modern best practices

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Linting**: ESLint
- **Formatting**: Prettier
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components (Button, Card, etc.)
├── hooks/              # Custom React hooks
│   └── useApi.ts       # API hooks
├── lib/                # Utility libraries
├── services/           # API services
│   └── api.ts          # Strapi API service
├── types/              # TypeScript type definitions
│   ├── api.ts          # API response types
│   ├── common.ts       # Common types
│   └── index.ts        # Type exports
└── utils/              # Utility functions
    └── index.ts        # Helper functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Strapi backend running on `http://localhost:1337` (optional - fallback data provided)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd digital-agency/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:1337
   NODE_ENV=development
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## API Integration

The application integrates with a Strapi backend API. The main API endpoints used are:

- `GET /api/home?populate=*` - Homepage content
- `GET /api/about?populate=*` - About page content
- `GET /api/projects?populate=*` - Projects listing
- `GET /api/services?populate=*` - Services listing
- `POST /api/contact-forms` - Contact form submission

### Fallback Content

The application includes fallback content that displays when the Strapi backend is not available, ensuring the site remains functional during development or if the API is down.

## Components

### UI Components

- **Button** - Customizable button with variants
- **Card** - Content container with header, content, and footer
- **LoadingSpinner** - Loading indicators

### Layout Components

- **Header** - Navigation header with mobile menu
- **Footer** - Site footer with links and social media

### Hooks

- **useApi** - Custom hooks for API calls (useHomePage, useAboutPage, etc.)

## Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Manual Deployment

```bash
npm run build
npm run start
```

## CI/CD

The project includes GitHub Actions workflows for:

- **Code Quality**: ESLint and Prettier checks
- **Build Testing**: Ensures the application builds successfully
- **Deployment**: Automatic deployment to Vercel
- **Strapi Deployment**: Deployment configuration for Heroku/DigitalOcean

### Required GitHub Secrets

For the CI/CD pipeline to work, add these secrets to your GitHub repository:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
NEXT_PUBLIC_API_URL=your_strapi_api_url
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

Run `npm run lint:fix` and `npm run format` before committing.

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue on GitHub or contact our team.

---

**Happy coding! 🚀**

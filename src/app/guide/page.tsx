'use client';

import { Button, LoadingSpinner, TypographyShowcase } from '@/components/ui';
import ColorShowcase from '@/components/ui/ColorShowcase';
import { useHomePage } from '@/hooks/useApi';

export default function Home() {
  const { loading, error } = useHomePage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600">Loading homepage content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading homepage: {error}</p>
          <p className="text-gray-600 mb-4">
            Make sure your Strapi backend is running on{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              http://localhost:1337
            </code>
          </p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TypographyShowcase />
      <ColorShowcase />
    </div>
  );
}

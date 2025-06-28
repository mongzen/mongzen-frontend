'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  LoadingSpinner,
  TypographyShowcase,
} from '@/components/ui';
import ColorShowcase from '@/components/ui/ColorShowcase';
import { useHomePage } from '@/hooks/useApi';
import { getImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const { data: homeData, loading, error } = useHomePage();
  const [activeTab, setActiveTab] = useState<'home' | 'typography' | 'colors'>(
    'home'
  );

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

  // Fallback content when Strapi is not available
  const fallbackData = {
    hero_title: 'Welcome to Digital Agency',
    hero_subtitle: 'We Create Digital Experiences',
    hero_description:
      'Transform your business with our cutting-edge digital solutions. From web development to mobile apps, we help you reach your goals.',
    hero_cta_text: 'Get Started',
    hero_cta_link: '/contact',
    services_section_title: 'Our Services',
    services_section_description:
      'We offer a comprehensive range of digital services to help your business thrive in the digital world.',
  };

  const displayData = homeData?.attributes || fallbackData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {displayData.hero_title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
                {displayData.hero_subtitle}
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                {displayData.hero_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={displayData.hero_cta_link || '/contact'}>
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    {displayData.hero_cta_text || 'Get Started'}
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              {homeData?.attributes?.hero_image?.data &&
              !Array.isArray(homeData.attributes.hero_image.data) ? (
                <Image
                  src={getImageUrl(
                    homeData.attributes.hero_image.data.attributes.url
                  )}
                  alt={
                    homeData.attributes.hero_image.data.attributes
                      .alternativeText || 'Hero Image'
                  }
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              ) : (
                <div className="bg-white/10 rounded-lg p-12 text-center">
                  <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                    <p className="text-white/80">Hero Image Placeholder</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {displayData.services_section_title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {displayData.services_section_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards - These would come from Strapi in a real implementation */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Custom web applications built with modern technologies and
                  best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <CardTitle>Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Native and cross-platform mobile applications for iOS and
                  Android.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <CardTitle>UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Beautiful and intuitive user interfaces that enhance user
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s work together to bring your digital vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* API Status Indicator */}
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className={`px-3 py-2 rounded-full text-sm font-medium ${
            homeData
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {homeData ? '🟢 Strapi Connected' : '🟡 Using Fallback Data'}
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Button
              variant={activeTab === 'home' ? 'primary' : 'outline'}
              className="flex-1"
              onClick={() => setActiveTab('home')}
            >
              Home Content
            </Button>
            <Button
              variant={activeTab === 'typography' ? 'secondary' : 'outline'}
              className="flex-1"
              onClick={() => setActiveTab('typography')}
            >
              Typography & Icons
            </Button>
            <Button
              variant={activeTab === 'colors' ? 'accent' : 'outline'}
              className="flex-1"
              onClick={() => setActiveTab('colors')}
            >
              Color Palette
            </Button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="min-h-screen">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-heading mb-6">
                  Transform Your Digital Presence
                </h1>
                <p className="text-paragraph mb-8">
                  {homeData?.attributes?.hero_description ||
                    'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.'}
                </p>
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </div>
            </div>
            {/* Add more home content here */}
          </>
        )}

        {activeTab === 'typography' && <TypographyShowcase />}
        {activeTab === 'colors' && <ColorShowcase />}
      </div>
    </div>
  );
}

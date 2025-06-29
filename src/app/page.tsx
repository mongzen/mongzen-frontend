'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  LoadingSpinner,
  TypographyShowcase,
  WipeButton,
} from '@/components/ui';
import ColorShowcase from '@/components/ui/ColorShowcase';
import { useHomePage } from '@/hooks/useApi';
import { getImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const { data: homeData, loading, error } = useHomePage();
  const [activeTab, setActiveTab] = useState<
    'home' | 'typography' | 'colors' | 'wipe-buttons'
  >('home');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-60">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-neutral-20">Loading homepage content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-60">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading homepage: {error}</p>
          <p className="text-neutral-20 mb-4">
            Make sure your Strapi backend is running on{' '}
            <code className="bg-neutral-50/20 px-2 py-1 rounded text-primary-50">
              http://localhost:1337
            </code>
          </p>
          <Button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60 hover:from-primary-60 hover:to-secondary-60 font-semibold shadow-xl shadow-primary-50/30"
          >
            Try Again
          </Button>
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
    <div className="min-h-screen bg-neutral-60">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-60 via-neutral-55 to-neutral-50 text-neutral-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/5 to-secondary-50/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,255,0,0.1),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-50 to-secondary-50 bg-clip-text text-transparent">
                {displayData.hero_title}
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-neutral-15">
                {displayData.hero_subtitle}
              </h2>
              <p className="text-lg mb-8 text-neutral-20">
                {displayData.hero_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={displayData.hero_cta_link || '/contact'}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60 hover:from-primary-60 hover:to-secondary-60 font-semibold shadow-xl shadow-primary-50/30 transform hover:scale-105 transition-all duration-300"
                  >
                    {displayData.hero_cta_text || 'Get Started'}
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-neutral-30 text-neutral-15 hover:border-primary-50 hover:text-primary-50 hover:bg-primary-50/5 transition-all duration-300"
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
                  className="rounded-xl shadow-2xl"
                />
              ) : (
                <div className="bg-gradient-to-br from-neutral-50/20 to-neutral-40/20 rounded-xl p-12 text-center backdrop-blur-sm border border-neutral-40/20">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-50/10 to-secondary-50/10 rounded-xl flex items-center justify-center border border-neutral-40/20">
                    <p className="text-neutral-20">Hero Image Placeholder</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-60 to-neutral-55">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-0 mb-4">
              {displayData.services_section_title}
            </h2>
            <p className="text-xl text-neutral-20 max-w-3xl mx-auto">
              {displayData.services_section_description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards - These would come from Strapi in a real implementation */}
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm hover:bg-neutral-50/70 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-50/20 to-secondary-50/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-50/30">
                  <svg
                    className="w-8 h-8 text-primary-50"
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
                <CardTitle className="text-neutral-0">
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-20">
                  Custom web applications built with modern technologies and
                  best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm hover:bg-neutral-50/70 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-success-50/20 to-info-50/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-success-50/30">
                  <svg
                    className="w-8 h-8 text-success-50"
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
                <CardTitle className="text-neutral-0">Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-20">
                  Native and cross-platform mobile applications for iOS and
                  Android.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm hover:bg-neutral-50/70 transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent-50/20 to-danger-50/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-50/30">
                  <svg
                    className="w-8 h-8 text-accent-50"
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
                <CardTitle className="text-neutral-0">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-20">
                  Beautiful and intuitive user interfaces that enhance user
                  experience.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60 hover:from-primary-60 hover:to-secondary-60 font-semibold shadow-xl shadow-primary-50/30 transform hover:scale-105 transition-all duration-300"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neutral-55 to-neutral-50 text-neutral-0 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/10 to-secondary-50/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-neutral-20">
            Let&apos;s work together to bring your digital vision to life.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60 hover:from-primary-60 hover:to-secondary-60 font-semibold shadow-xl shadow-primary-50/30 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* API Status Indicator */}
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className={`px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
            homeData
              ? 'bg-success-50/20 text-success-50 border border-success-50/30'
              : 'bg-warning-50/20 text-warning-50 border border-warning-50/30'
          }`}
        >
          {homeData ? '🟢 Strapi Connected' : '🟡 Using Fallback Data'}
        </div>
      </div>

      {/* Navigation Links Section */}
      <div className="bg-neutral-55 border-b border-neutral-50/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Button
              variant={activeTab === 'home' ? 'primary' : 'outline'}
              className={`flex-1 ${
                activeTab === 'home'
                  ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60'
                  : 'border-neutral-30 text-neutral-15 hover:border-primary-50 hover:text-primary-50'
              }`}
              onClick={() => setActiveTab('home')}
            >
              Home Content
            </Button>
            <Button
              variant={activeTab === 'typography' ? 'primary' : 'outline'}
              className={`flex-1 ${
                activeTab === 'typography'
                  ? 'bg-gradient-to-r from-secondary-50 to-accent-50 text-neutral-60'
                  : 'border-neutral-30 text-neutral-15 hover:border-secondary-50 hover:text-secondary-50'
              }`}
              onClick={() => setActiveTab('typography')}
            >
              Typography & Icons
            </Button>
            <Button
              variant={activeTab === 'colors' ? 'primary' : 'outline'}
              className={`flex-1 ${
                activeTab === 'colors'
                  ? 'bg-gradient-to-r from-accent-50 to-primary-50 text-neutral-60'
                  : 'border-neutral-30 text-neutral-15 hover:border-accent-50 hover:text-accent-50'
              }`}
              onClick={() => setActiveTab('colors')}
            >
              Color Palette
            </Button>
            <Button
              variant={activeTab === 'wipe-buttons' ? 'primary' : 'outline'}
              className={`flex-1 ${
                activeTab === 'wipe-buttons'
                  ? 'bg-gradient-to-r from-secondary-50 to-accent-50 text-neutral-60'
                  : 'border-neutral-30 text-neutral-15 hover:border-secondary-50 hover:text-secondary-50'
              }`}
              onClick={() => setActiveTab('wipe-buttons')}
            >
              Wipe Buttons
            </Button>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="min-h-screen bg-neutral-60">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-neutral-55 to-neutral-50 py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-heading mb-6 bg-gradient-to-r from-primary-50 to-secondary-50 bg-clip-text text-transparent">
                  Transform Your Digital Presence
                </h1>
                <p className="text-paragraph mb-8 text-neutral-20">
                  {homeData?.attributes?.hero_description ||
                    'We create digital experiences that help businesses grow and connect with their audience in meaningful ways.'}
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-50 to-secondary-50 text-neutral-60 hover:from-primary-60 hover:to-secondary-60 font-semibold shadow-xl shadow-primary-50/30 transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </Button>
              </div>
            </div>
            {/* Add more home content here */}
          </>
        )}

        {activeTab === 'typography' && <TypographyShowcase />}
        {activeTab === 'colors' && <ColorShowcase />}
        {activeTab === 'wipe-buttons' && (
          <div className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-neutral-0 mb-4">
                  Wipe Button Components
                </h2>
                <p className="text-xl text-neutral-20 max-w-3xl mx-auto">
                  Interactive buttons with smooth left-to-right wipe animations
                  using Framer Motion
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Outline Variant */}
                <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
                  <CardHeader>
                    <CardTitle className="text-neutral-0 mb-4">
                      Outline Variant
                    </CardTitle>
                    <p className="text-neutral-30 text-sm">
                      Transparent background, colored border and text
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <WipeButton variant="outline" color="primary" size="sm">
                      Primary
                    </WipeButton>
                    <WipeButton variant="outline" color="secondary" size="sm">
                      Secondary
                    </WipeButton>
                    <WipeButton variant="outline" color="danger" size="sm">
                      Danger
                    </WipeButton>
                    <WipeButton variant="outline" color="success" size="sm">
                      Success
                    </WipeButton>
                  </CardContent>
                </Card>

                {/* Ghost Variant */}
                <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
                  <CardHeader>
                    <CardTitle className="text-neutral-0 mb-4">
                      Ghost Variant
                    </CardTitle>
                    <p className="text-neutral-30 text-sm">
                      No border, transparent background, colored text
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <WipeButton variant="ghost" color="primary" size="sm">
                      Primary
                    </WipeButton>
                    <WipeButton variant="ghost" color="secondary" size="sm">
                      Secondary
                    </WipeButton>
                    <WipeButton variant="ghost" color="danger" size="sm">
                      Danger
                    </WipeButton>
                    <WipeButton variant="ghost" color="success" size="sm">
                      Success
                    </WipeButton>
                  </CardContent>
                </Card>

                {/* Filled Variant */}
                <Card className="bg-neutral-50/50 border-neutral-40/20 backdrop-blur-sm p-8 text-center">
                  <CardHeader>
                    <CardTitle className="text-neutral-0 mb-4">
                      Filled Variant
                    </CardTitle>
                    <p className="text-neutral-30 text-sm">
                      Filled background with contrast text
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <WipeButton variant="filled" color="primary" size="sm">
                      Primary
                    </WipeButton>
                    <WipeButton variant="filled" color="secondary" size="sm">
                      Secondary
                    </WipeButton>
                    <WipeButton variant="filled" color="danger" size="sm">
                      Danger
                    </WipeButton>
                    <WipeButton variant="filled" color="success" size="sm">
                      Success
                    </WipeButton>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-16">
                <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
                  All Color Variations
                </h3>
                <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
                  Complete color palette showcase with outline variant
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  <WipeButton variant="outline" color="primary" size="sm">
                    Primary
                  </WipeButton>
                  <WipeButton variant="outline" color="secondary" size="sm">
                    Secondary
                  </WipeButton>
                  <WipeButton variant="outline" color="accent" size="sm">
                    Accent
                  </WipeButton>
                  <WipeButton variant="outline" color="warning" size="sm">
                    Warning
                  </WipeButton>
                  <WipeButton variant="outline" color="danger" size="sm">
                    Danger
                  </WipeButton>
                  <WipeButton variant="outline" color="success" size="sm">
                    Success
                  </WipeButton>
                  <WipeButton variant="outline" color="info" size="sm">
                    Info
                  </WipeButton>
                </div>
              </div>

              <div className="text-center mt-16">
                <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
                  Custom Examples
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <WipeButton
                    variant="outline"
                    onClick={() => alert('Inquire clicked!')}
                  >
                    Inquire
                  </WipeButton>
                  <WipeButton
                    variant="filled"
                    color="primary"
                    onClick={() => alert('Get Quote clicked!')}
                  >
                    Get Quote
                  </WipeButton>
                  <WipeButton
                    variant="filled"
                    color="secondary"
                    onClick={() => alert('Schedule Call clicked!')}
                  >
                    Schedule Call
                  </WipeButton>
                </div>
              </div>

              <div className="text-center mt-16">
                <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
                  Character Animation Demo
                </h3>
                <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
                  Each character animates individually with staggered timing.
                  Hover over the buttons to see the character-by-character wipe
                  effect.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <WipeButton variant="outline" size="sm">
                    Hi
                  </WipeButton>
                  <WipeButton variant="outline" size="md">
                    Hello
                  </WipeButton>
                  <WipeButton variant="outline" size="lg">
                    Welcome
                  </WipeButton>
                  <WipeButton variant="filled" color="primary" size="md">
                    Contact Us
                  </WipeButton>
                  <WipeButton variant="filled" color="secondary" size="md">
                    Let&apos;s Talk
                  </WipeButton>
                  <WipeButton variant="outline" size="lg">
                    Get Started Today
                  </WipeButton>
                </div>
              </div>

              <div className="text-center mt-16">
                <h3 className="text-2xl font-semibold text-neutral-0 mb-8">
                  Left-to-Right Reveal Effect
                </h3>
                <p className="text-neutral-30 mb-8 max-w-2xl mx-auto">
                  Background wipes left-to-right, characters reveal with 100ms
                  delay from bottom-to-top. Original text moves up while new
                  text slides up from below.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <WipeButton variant="outline" size="md">
                    INQUIRE
                  </WipeButton>
                  <WipeButton variant="filled" color="primary" size="md">
                    DISCOVER
                  </WipeButton>
                  <WipeButton variant="filled" color="secondary" size="md">
                    EXPLORE
                  </WipeButton>
                  <WipeButton variant="outline" size="lg">
                    INNOVATION
                  </WipeButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

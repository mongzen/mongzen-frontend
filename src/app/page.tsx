'use client';

import {
  ButtonBlur,
  LoadingSpinner,
  PageHeader,
  ServiceCard,
  TrustedByCompanies,
  WipeButton,
} from '@/components/ui';
import { useHomePage } from '@/hooks/useApi';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data: homeData, loading, error } = useHomePage();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-neutral-20">Loading homepage content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading homepage: {error}</p>
          <p className="text-neutral-20 mb-4">
            Make sure your backend is running on{' '}
            <code className="bg-neutral-50/20 px-2 py-1 rounded text-primary-50">
              http://localhost:1337
            </code>
          </p>
          <WipeButton
            variant="filled"
            color="danger"
            onClick={() => window.location.reload()}
          >
            Try Again
          </WipeButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-60">
      {/* Hero Section */}
      <section
        className="flex w-full max-w-[1596px] mx-auto flex-col items-center border-r border-l border-b border-dark-15 relative min-h-[790px] justify-center"
        style={{
          gap: '-174px',
          background: 'url(/images/squares.png) 0% 0% / 22px 22px repeat',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Abstract Animation Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image
            src="/AbstractDesign.svg"
            alt="Abstract Background"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            className="w-full h-full"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-0 mb-6 leading-tight whitespace-nowrap">
            {homeData?.hero_title}
          </h1>
          <div className="flex gap-3 justify-center">
            <ButtonBlur size="lg" href="/works">
              Our Works
            </ButtonBlur>
            <Link href={'/contact'}>
              <WipeButton
                variant="filled"
                color="primary"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Contact
              </WipeButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Companies Section */}
      <TrustedByCompanies
        title={homeData?.trustedByTitle || 'Trusted by Leading Companies'}
        // Repeat companies for many items
        companies={
          homeData?.trustedByCompanies
            ? [...homeData?.trustedByCompanies, ...homeData?.trustedByCompanies]
            : []
        }
      />

      {/* Our Services */}
      <section className="border-x border-b border-dark-15">
        <div className="max-w-[1596px] mx-auto">
          <PageHeader
            title={homeData?.servicesTitle || 'Our Services'}
            subtitle={
              homeData?.servicesSubtitle ||
              'We offer comprehensive digital solutions'
            }
            backgroundImage={homeData?.servicesBanner.url}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Service Cards */}
            {homeData?.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                buttonText={service.linkText}
                buttonHref={service.linkUrl}
                description={service.description}
                className={index === 1 ? 'border-x border-dark-15' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="border-x border-b border-dark-15">
        <div className="max-w-[1596px] mx-auto">
          <PageHeader
            title={homeData?.whyChooseTitle || 'Why Choose Us'}
            subtitle={homeData?.whyChooseSubtitle}
            backgroundImage={homeData?.whyChooseBanner?.url}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {homeData?.whyChooseFeaturesList.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className={index === 1 ? 'border-x border-dark-15' : ''}
              />
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';

import {
  ButtonBlur,
  ContactSection,
  FAQAccordion,
  LoadingSpinner,
  PageHeader,
  ServiceCard,
  TestimonialCard,
  TrustedByCompanies,
  WhyChooseCard,
  WipeButton,
} from '@/components/ui';
import { DEFAULTS } from '@/constants';
import { useGlobal, useHomePage } from '@/hooks/useApi';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';

export default function Home() {
  const { data: homeData, loading, error } = useHomePage();
  const { data: globalData, loading: globalLoading } = useGlobal();

  if (loading || globalLoading) {
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
              {process.env.NEXT_PUBLIC_API_URL || DEFAULTS.API_URL}
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
        className="flex w-full mx-auto flex-col items-center border-r-0 sm:border-r border-l-0 sm:border-l border-b border-dark-15 relative min-h-[500px] sm:min-h-[600px] lg:min-h-[790px] justify-center px-4 sm:px-6 lg:px-8"
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
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-0 mb-6 sm:mb-8 lg:mb-10 leading-tight break-words px-2">
            {homeData?.hero_title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <ButtonBlur
              size="lg"
              href="/works"
              className="w-full sm:w-auto min-w-[160px]"
            >
              Our Works
            </ButtonBlur>
            <WipeButton
              variant="filled"
              color="primary"
              size="lg"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-w-[160px]"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </WipeButton>
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
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={homeData?.servicesTitle || 'Our Services'}
            subtitle={
              homeData?.servicesSubtitle ||
              'We offer comprehensive digital solutions'
            }
            backgroundImage={formatImageUrl(homeData?.servicesBanner.url)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {homeData?.services.map((service, index: number) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                buttonText={service.linkText}
                buttonHref={service.linkUrl}
                description={service.description}
                className={clsx(
                  'border-dark-15',
                  // Mobile: all cards have bottom border except last
                  index < homeData?.services.length - 1 &&
                    'border-b md:border-b-0',
                  // Tablet: right card has left border
                  index % 2 === 1 && 'md:border-l',
                  // Tablet: bottom borders for all except last row
                  index < homeData?.services.length - 2 &&
                    'md:border-b xl:border-b-0',
                  // Desktop: middle card has left and right borders
                  index === 1 && 'xl:border-x',
                  // Desktop: bottom borders for all except last row
                  index < homeData?.services.length - 3 && 'xl:border-b'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={homeData?.whyChooseTitle || 'Why Choose Us'}
            subtitle={homeData?.whyChooseSubtitle}
            backgroundImage={formatImageUrl(homeData?.whyChooseBanner?.url)}
          />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {homeData?.whyChooseFeaturesList.map((service, index: number) => (
              <WhyChooseCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
                aspectRatio={790 / 378} // Maintain aspect ratio
                className={clsx(
                  'border-dark-15 sm:min-h-[240px] md:min-h-[280px] lg:min-h-[318px]',
                  // Mobile: bottom border for all except last
                  index < homeData?.whyChooseFeaturesList.length - 1 &&
                    'border-b',
                  // Tablet & Desktop: even indices get right border
                  index % 2 === 0 && 'border-r',
                  // Tablet & Desktop: bottom borders for all except last row
                  index < homeData?.whyChooseFeaturesList.length - 2 &&
                    'border-b'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What our Clients Say Section */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={
              homeData?.testimonialsTitle || 'What our Clients say About us'
            }
            subtitle={homeData?.testimonialsSubtitle}
            backgroundImage={formatImageUrl(homeData?.testimonialsBanner?.url)}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {homeData?.testimonialsList.map((testimonial, index: number) => (
              <TestimonialCard
                key={testimonial.id}
                title={testimonial.quote}
                authorName={testimonial.authorName}
                authorRole={testimonial.authorRole}
                icon={testimonial.authorPhoto}
                className={clsx(
                  // Mobile: bottom border for all except last
                  index < homeData?.testimonialsList.length - 1 && 'border-b',
                  // Desktop: even indices get right border
                  index % 2 === 0 && 'lg:border-r',
                  // Desktop: bottom borders for all except last row
                  index < homeData?.testimonialsList.length - 2 && 'border-b'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={globalData?.faqBanner?.title || 'Frequently Asked Questions'}
            subtitle={globalData?.faqBanner?.subtitle}
            backgroundImage={formatImageUrl(
              globalData?.faqBanner?.background?.url
            )}
          />
          {globalData?.faqList && (
            <FAQAccordion items={globalData?.faqList} maxItems={8} />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={
              globalData?.ProjectCTA.title ||
              'Thank you for your Interest in Mongzen.'
            }
            subtitle={globalData?.ProjectCTA.subtitle}
            icon={formatImageUrl(globalData?.ProjectCTA.icon?.url)}
            backgroundImage={formatImageUrl(
              globalData?.ProjectCTA.background?.url
            )}
            className="h-[400px] sm:h-[500px] lg:h-[597px]"
          >
            <div className="mt-6 sm:mt-8">
              <WipeButton
                variant="filled"
                color="primary"
                size="lg"
                className="min-w-[160px]"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {globalData?.ProjectCTA.button_text || 'Contact Us'}
              </WipeButton>
            </div>
          </PageHeader>
          {/* Contact Section */}
          <ContactSection contactForm={globalData?.contactForm} />
        </div>
      </section>
    </div>
  );
}

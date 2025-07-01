'use client';

import {
  ButtonBlur,
  LoadingSpinner,
  PageHeader,
  ServiceCard,
  TestimonialCard,
  TrustedByCompanies,
  WhyChooseCard,
  WipeButton,
} from '@/components/ui';
import { useHomePage } from '@/hooks/useApi';
import clsx from 'clsx';
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
        className="flex w-full max-w-container mx-auto flex-col items-center border-r-0 sm:border-r border-l-0 sm:border-l border-b border-dark-15 relative min-h-[500px] sm:min-h-[600px] lg:min-h-[790px] justify-center px-4 sm:px-6 lg:px-8"
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
            <Link href={'/contact'} className="w-full sm:w-auto">
              <WipeButton
                variant="filled"
                color="primary"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-w-[160px]"
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
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="max-w-container mx-auto">
          <PageHeader
            title={homeData?.servicesTitle || 'Our Services'}
            subtitle={
              homeData?.servicesSubtitle ||
              'We offer comprehensive digital solutions'
            }
            backgroundImage={homeData?.servicesBanner.url}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {homeData?.services.map((service, index) => (
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
        <div className="max-w-container mx-auto">
          <PageHeader
            title={homeData?.whyChooseTitle || 'Why Choose Us'}
            subtitle={homeData?.whyChooseSubtitle}
            backgroundImage={homeData?.whyChooseBanner?.url}
          />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {homeData?.whyChooseFeaturesList.map((service, index) => (
              <WhyChooseCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
                aspectRatio={790 / 378} // Maintain aspect ratio
                className={clsx(
                  'border-dark-15 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[318px]',
                  // Mobile: bottom border for all except last
                  index < homeData?.whyChooseFeaturesList.length - 1 &&
                    'border-b md:border-b-0',
                  // Tablet & Desktop: even indices get right border
                  index % 2 === 0 && 'md:border-r',
                  // Tablet & Desktop: bottom borders for all except last row
                  index < homeData?.whyChooseFeaturesList.length - 2 &&
                    'md:border-b'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What our Clients Say Section */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="max-w-container mx-auto">
          <PageHeader
            title={
              homeData?.testimonialsTitle || 'What our Clients say About us'
            }
            subtitle={homeData?.testimonialsSubtitle}
            backgroundImage={homeData?.testimonialsBanner?.url}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {homeData?.testimonialsList.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                title={testimonial.quote}
                authorName={testimonial.authorName}
                authorRole={testimonial.authorRole}
                icon={testimonial.authorPhoto}
                aspectRatio={798 / 574}
                className={clsx(
                  'border-dark-15 min-h-[350px] sm:min-h-[450px] lg:min-h-[574px]',
                  // Mobile: bottom border for all except last
                  index < homeData?.testimonialsList.length - 1 &&
                    'border-b lg:border-b-0',
                  // Desktop: even indices get right border
                  index % 2 === 0 && 'lg:border-r',
                  // Desktop: bottom borders for all except last row
                  index < homeData?.testimonialsList.length - 2 && 'lg:border-b'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="max-w-container mx-auto">
          <PageHeader
            title={homeData?.faqTitle || 'Frequently Asked Questions'}
            subtitle={homeData?.faqSubtitle}
            backgroundImage={homeData?.faqBanner?.url}
          />
          <div className="space-y-0">
            <ul className="grid grid-cols-1 lg:grid-cols-2">
              {homeData?.faqItems?.map((faq, index) => (
                <li
                  key={faq.id}
                  className={clsx(
                    'border-b border-dark-15 p-[20px] sm:p-[30px] lg:p-[30px_50px] flex gap-4 sm:gap-6 lg:gap-8',
                    // Desktop: even indices get right border
                    index % 2 === 0 && 'lg:border-r lg:border-dark-15',
                    // Mobile: all items have bottom border except last
                    index === homeData?.faqItems.length - 1 &&
                      'border-b-0 lg:border-b',
                    // Desktop: ensure proper borders for last row
                    index >= homeData?.faqItems.length - 2 && 'lg:border-b-0'
                  )}
                >
                  <div
                    className="flex p-3 sm:p-4 lg:p-5 flex-col gap-2.5 aspect-square rounded-xl text-lg sm:text-xl lg:text-[28px] font-medium leading-[150%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 items-center justify-center shrink-0"
                    style={{
                      border: '1px solid #2E2E2E',
                      background:
                        'linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)',
                    }}
                  >
                    {faq.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-0 mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-20 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-x border-b border-dark-15">
        <div className="max-w-[1596px] mx-auto">
          <PageHeader
            title={
              homeData?.ctaSection.title ||
              'Thank you for your Interest in SquareUp.'
            }
            subtitle={homeData?.ctaSection.subtitle}
            icon={homeData?.ctaSection.icon?.url}
            backgroundImage={homeData?.ctaSection.ctaBanner?.url}
            className="h-[400px] sm:h-[500px] lg:h-[597px]"
          >
            <div className="mt-6 sm:mt-8">
              <WipeButton
                variant="filled"
                color="primary"
                size="lg"
                className="min-w-[160px]"
              >
                Contact
              </WipeButton>
            </div>
          </PageHeader>
        </div>
      </section>
    </div>
  );
}

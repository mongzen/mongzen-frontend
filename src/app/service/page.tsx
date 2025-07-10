'use client';

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';

import {
  LoadingSpinner,
  PageHeader,
  ServiceCard,
  WipeButton,
} from '@/components/ui';
import { DEFAULTS } from '@/constants';
import { useGlobal, useServicePage } from '@/hooks/useApi';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Link from 'next/link';

export default function Service() {
  const { data: serviceData, loading, error } = useServicePage();
  const { data: globalData, loading: globalLoading } = useGlobal();

  if (loading || globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-neutral-20">Loading services...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading services: {error}</p>
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
    <div className="min-h-screen">
      {/* Section Banner */}
      <section className="border-0 sm:border-x border-dark-15">
        <PageHeader
          title={serviceData?.SectionBanner.title || 'Our Services'}
          subtitle={
            serviceData?.SectionBanner.subtitle ||
            'Comprehensive digital solutions for your business'
          }
          backgroundImage={formatImageUrl(
            serviceData?.SectionBanner.background?.url
          )}
        />
      </section>

      {/* Services Sections */}
      {serviceData?.Services.map((serviceSection) => (
        <section
          key={serviceSection.id}
          className="border-x-0 sm:border-x border-dark-15"
        >
          <div className="mx-auto">
            {/* Section Header */}
            <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 space-y-3.5 border-b border-dark-15">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-0 mb-4 sm:mb-6">
                {serviceSection.title}
              </h2>
              {serviceSection.description && (
                <p className="text-base sm:text-lg text-dark-90 leading-relaxed">
                  {serviceSection.description}
                </p>
              )}
              <div className="flex items-center">
                <span className="rounded-lg bg-dark-15 flex py-3 px-3.5 justify-center items-center">
                  {serviceSection.intro_cta}
                </span>
              </div>
            </div>

            {/* Service Categories */}
            {serviceSection.categories.map((category) => (
              <div id={`category-${category.id}`} key={category.id}>
                {/* Category Header */}
                {category.title && (
                  <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-dark-15">
                    <h3 className="text-xl sm:text-2xl font-semibold text-dark-60">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-sm sm:text-base md:text-lg text-neutral-20 max-w-3xl mx-auto leading-relaxed">
                        {category.description}
                      </p>
                    )}
                  </div>
                )}

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-b border-dark-15">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      icon={service.icon}
                      buttonText={service.linkText}
                      buttonHref={service.linkUrl}
                      description={service.description}
                      aspectRatio={3 / 2}
                      className={clsx(
                        'border-dark-15',
                        '[&>div>h3]:!text-[20px] [&>div>h3]:!mb-0 max-h-[280px] overflow-hidden',
                        // Mobile: all cards have bottom border except last
                        serviceIndex < category.services.length - 1 &&
                          'border-b md:border-b-0',
                        // Tablet: right card has left border
                        serviceIndex % 2 === 1 && 'md:border-l',
                        // Tablet: bottom borders for all except last row
                        serviceIndex < category.services.length - 2 &&
                          'md:border-b xl:border-b-0',
                        // Desktop: middle card has left and right borders
                        serviceIndex === 1 && 'xl:border-x',
                        // Desktop: bottom borders for all except last row
                        serviceIndex < category.services.length - 3 &&
                          'xl:border-b'
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Service Project CTA */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          <PageHeader
            title={
              globalData?.ProjectCTA.title || 'Ready to Start Your Project?'
            }
            subtitle={
              globalData?.ProjectCTA.subtitle ||
              'Let us help you bring your vision to life'
            }
            backgroundImage={formatImageUrl(
              globalData?.ProjectCTA.background?.url
            )}
            icon={formatImageUrl(globalData?.ProjectCTA.icon?.url)}
            className="lg:py-[120px] lg:space-y-10 space-y-4 py-10 !border-b-0 md:px-16 xl:px-[350px] px-10"
          >
            <Link href={globalData?.ProjectCTA.button_link || '#'}>
              <WipeButton
                variant="filled"
                color="primary"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto min-w-[160px]"
              >
                {globalData?.ProjectCTA.button_text || 'Get Started'}
              </WipeButton>
            </Link>
          </PageHeader>
        </div>
      </section>
    </div>
  );
}

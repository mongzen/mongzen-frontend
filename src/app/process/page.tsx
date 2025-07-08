'use client';

import {
  ContactSection,
  LoadingSpinner,
  PageHeader,
  ProcessCard,
  ServiceCard,
  WipeButton,
} from '@/components/ui';
import { useGlobal, useProcessPage } from '@/hooks/useApi';
import { formatImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Link from 'next/link';

export default function Process() {
  const { data: processData, loading, error } = useProcessPage();
  const { data: globalData, loading: globalLoading } = useGlobal();

  if (loading || globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-neutral-20">Loading process...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading process: {error}</p>
          <p className="text-neutral-20 mb-4">
            Make sure your backend is running on{' '}
            <code className="bg-neutral-50/20 px-2 py-1 rounded text-primary-50">
              {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}
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
          title={processData?.SectionBanner.title || 'Our Process'}
          subtitle={
            processData?.SectionBanner.subtitle ||
            'How we transform ideas into reality'
          }
          backgroundImage={formatImageUrl(
            processData?.SectionBanner.background?.url
          )}
          icon={formatImageUrl(processData?.SectionBanner.icon?.url)}
        />
      </section>

      {/* Process Section */}
      {processData?.processSection && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            {/* Section Header */}
            <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 space-y-3.5 border-b border-dark-15">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-0 mb-4 sm:mb-6">
                {processData.processSection.title}
              </h2>
              {processData.processSection.description && (
                <p className="text-base sm:text-lg text-dark-90 leading-relaxed">
                  {processData.processSection.description}
                </p>
              )}
              <div className="flex items-center">
                <span className="rounded-lg bg-dark-15 flex py-3 px-3.5 justify-center items-center">
                  {processData.processSection.intro_cta}
                </span>
              </div>
            </div>

            {/* Service Categories */}
            {processData.processSection.categories?.map((category) => (
              <div key={category.id} className="border-b border-dark-15">
                {/* Category Header */}
                <div className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-dark-15">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-0 mb-4">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="text-base text-dark-90 leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {category.services?.map((service, serviceIndex: number) => (
                    <ServiceCard
                      key={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      buttonText={service.linkText}
                      buttonHref={service.linkUrl}
                      className={clsx(
                        'border-dark-15',
                        // Mobile: all cards have bottom border except last
                        serviceIndex < category.services.length - 1 &&
                          'border-b md:border-b-0',
                        // Tablet: right card has left border
                        serviceIndex % 2 === 1 && 'md:border-l lg:border-l-0',
                        // Desktop: middle and third cards have left border
                        serviceIndex % 3 === 1 && 'lg:border-l',
                        serviceIndex % 3 === 2 && 'lg:border-l'
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process List Section */}
      {processData?.processList && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-dark-15">
              {processData.processList.map((process, processIndex: number) => (
                <ProcessCard
                  key={process.id}
                  title={process.title}
                  name={process.name}
                  description={process.description}
                  className={clsx(
                    'border-dark-15',
                    // Mobile: all cards have bottom border except last
                    processIndex < processData.processList.length - 1 &&
                      'border-b md:border-b-0',
                    // Tablet: right card has left border
                    processIndex % 2 === 1 && 'md:border-l'
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {globalData?.ProjectCTA && (
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
      )}

      {/* CTA Section */}
      <section className="border-x-0 sm:border-x border-b border-dark-15">
        <div className="mx-auto">
          {/* Contact Section */}
          <ContactSection contactForm={globalData?.contactForm} />
        </div>
      </section>
    </div>
  );
}

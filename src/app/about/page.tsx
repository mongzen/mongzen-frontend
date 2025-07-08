'use client';

import {
  LoadingSpinner,
  PageHeader,
  ProcessCard,
  ServiceCard,
  WipeButton,
} from '@/components/ui';
import { useAboutPage, useGlobal } from '@/hooks/useApi';
import { formatImageUrl, isUnoptimizedImageUrl } from '@/utils/imageUtils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const { data: aboutData, loading, error } = useAboutPage();
  const { data: globalData, loading: globalLoading } = useGlobal();

  if (loading || globalLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-neutral-20">Loading about...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">Error loading about: {error}</p>
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
          title={aboutData?.SectionBanner.title || 'About Us'}
          subtitle={
            aboutData?.SectionBanner.subtitle ||
            'Learn more about our story and mission'
          }
          backgroundImage={formatImageUrl(
            aboutData?.SectionBanner.background?.url
          )}
          icon={formatImageUrl(aboutData?.SectionBanner.icon?.url)}
        />
      </section>

      {/* Intro Section */}
      {aboutData?.intro && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-[150px] py-12 sm:py-16 lg:py-[100px] items-center gap-8 lg:gap-[100px]">
              {/* Section Header */}
              <div className="flex flex-col justify-center flex-1">
                <div className="space-y-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-0 leading-tight tracking-tight">
                    {aboutData.intro.title}
                  </h2>
                  {aboutData.intro.description && (
                    <p className="text-lg sm:text-xl text-neutral-20 leading-relaxed font-light">
                      {aboutData.intro.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Intro Image Section */}
              {aboutData?.introImage && (
                <div className="flex flex-1 h-[400px] sm:h-[500px] lg:h-[571px] flex-col justify-center items-center gap-2.5 rounded-2xl border border-dark-15 overflow-hidden relative bg-gradient-to-b from-transparent via-transparent to-dark-5">
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/30 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 to-primary-50/20 mix-blend-color"></div> */}
                  <Image
                    src={formatImageUrl(aboutData.introImage.url)}
                    alt={aboutData.introImage.name || 'About Image'}
                    fill
                    className="object-cover"
                    // mix-blend-overlay
                    unoptimized={isUnoptimizedImageUrl(
                      formatImageUrl(aboutData.introImage.url)
                    )}
                    priority
                  />
                </div>
              )}
            </div>

            {/* Service Categories */}
            {aboutData.intro.categories?.map((category) => (
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
                  {category.services?.map((service, serviceIndex) => (
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

      {/* Title2 Section */}
      {aboutData?.Title2 && (
        <section className="border-0 sm:border-x border-dark-15">
          <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-dark-15">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-0">
              {aboutData.Title2}
            </h2>
          </div>
        </section>
      )}

      {/* List Section */}
      {aboutData?.list && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            {/* List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-dark-15">
              {aboutData.list.map((item, itemIndex) => (
                <ProcessCard
                  key={item.id}
                  title={item.title}
                  name={item.name}
                  description={item.description}
                  className={clsx(
                    'border-dark-15',
                    // Mobile: all cards have bottom border except last
                    itemIndex < aboutData.list.length - 1 &&
                      'border-b md:border-b-0'
                    // Tablet: right card has left border
                    // aboutData.list % 2 === 1 && 'md:border-l'
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA Section */}
      {globalData?.footerCTA && (
        <section className="border-x-0 sm:border-x border-dark-15">
          <div className="mx-auto">
            <div className="flex max-w-[1596px] mx-auto px-6 sm:px-12 lg:px-20 py-12 sm:py-16 lg:py-20 flex-col justify-center items-start gap-8 lg:gap-[50px] border-b border-dark-15">
              {/* Main Container */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 self-stretch">
                {/* Logo */}
                <div className="w-32 h-32 lg:w-[150.704px] lg:h-[150px] flex-shrink-0">
                  {globalData.footerCTA.icon && (
                    <Image
                      src={formatImageUrl(globalData.footerCTA.icon.url)}
                      alt={globalData.footerCTA.icon.name || 'Footer CTA Icon'}
                      width={200}
                      height={200}
                      className="object-cover"
                      unoptimized={isUnoptimizedImageUrl(
                        formatImageUrl(globalData.footerCTA.icon.url)
                      )}
                    />
                  )}
                </div>

                {/* Text Container */}
                <div className="flex flex-col items-start gap-5 flex-1 text-center lg:text-left">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[30px] font-medium text-dark-60 leading-normal font-barlow">
                      {globalData.footerCTA.title}
                    </h2>
                    <p className="text-lg font-normal text-dark-60 leading-[150%] font-inter">
                      {globalData.footerCTA.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Container */}
              <div className="flex flex-col lg:flex-row px-6 lg:px-10 py-6 justify-center items-center gap-4 lg:gap-5 self-stretch bg-[#242424]/20 rounded-lg border border-dark-15">
                {/* Sub Container - Left */}
                <div className="flex items-center gap-5 flex-1 text-center lg:text-left">
                  <div className="flex items-center gap-5">
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-0 mb-0">
                      {globalData.footerCTA.titleWelcome}
                    </h3>
                    <p className="flex px-5 py-3.5 justify-center items-center gap-2.5 rounded-lg bg-dark-15 text-sm lg:text-base">
                      {globalData.footerCTA.descriptionWelcome}
                    </p>
                  </div>
                </div>

                {/* Button - Right */}
                <Link href={globalData.footerCTA.buttonLink || '#'}>
                  <WipeButton
                    variant="filled"
                    color="primary"
                    size="lg"
                    className="px-4 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-medium w-full lg:w-auto"
                  >
                    {globalData.footerCTA.buttonText}
                  </WipeButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

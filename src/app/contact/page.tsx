'use client';

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic';

import {
  ButtonContact,
  ContactSection,
  FAQAccordion,
  LoadingSpinner,
  OpenHours,
  PageHeader,
  StayConnectLinks,
  WipeButton,
} from '@/components/ui';
import {
  BUTTON_LABELS,
  DEFAULTS,
  ENV_VARS,
  ERROR_MESSAGES,
  LOADING_MESSAGES,
} from '@/constants';
import { FALLBACK_CONTACT_DATA } from '@/constants/fallback';
import { useContactPage, useGlobal } from '@/hooks/useApi';
import { formatImageUrl, isUnoptimizedImageUrl } from '@/utils/imageUtils';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const {
    data: contactData,
    loading: contactLoading,
    error: contactError,
  } = useContactPage();

  const {
    data: globalData,
    loading: globalLoading,
    error: globalError,
  } = useGlobal();

  const isLoading = contactLoading || globalLoading;
  const error = contactError || globalError;

  // Use fallback data if API data is not available
  const effectiveContactData = contactData || FALLBACK_CONTACT_DATA;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-neutral-20">
          {LOADING_MESSAGES.LOADING_CONTACT}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col">
        <div className="text-center">
          <p className="text-danger-50 mb-4">
            {ERROR_MESSAGES.FAILED_TO_FETCH_CONTACT}: {error}
          </p>
          <p className="text-neutral-20 mb-4">
            Make sure your backend is running on{' '}
            <code className="bg-neutral-50/20 px-2 py-1 rounded text-primary-50">
              {process.env[ENV_VARS.API_URL] || DEFAULTS.API_URL}
            </code>
          </p>
          <WipeButton
            variant="filled"
            color="danger"
            onClick={() => window.location.reload()}
          >
            {BUTTON_LABELS.TRY_AGAIN}
          </WipeButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Section Banner */}
      <section className="border-0 sm:border-x border-dark-15">
        {effectiveContactData?.SectionBanner && (
          <PageHeader
            title={effectiveContactData?.SectionBanner.title || 'Contact Us'}
            subtitle={
              effectiveContactData?.SectionBanner.subtitle ||
              'Get in Touch with Us'
            }
            backgroundImage={formatImageUrl(
              effectiveContactData?.SectionBanner.background?.url
            )}
            icon={formatImageUrl(effectiveContactData?.SectionBanner.icon?.url)}
          />
        )}
      </section>

      {/* Main Contact Content */}
      <section className="border-x-0 sm:border-x border-dark-15 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact List */}
            {effectiveContactData?.contactList &&
              effectiveContactData.contactList.length > 0 &&
              effectiveContactData.contactList.map((contact) => (
                <ButtonContact key={contact.id} data={contact} />
              ))}
          </div>
        </div>
      </section>

      <section className="border-x-0 sm:border-x border-dark-15 border-b">
        {/* Contact Form - Right Column */}
        <ContactSection contactForm={globalData?.contactForm} />
      </section>

      <section className="justify-center flex gap-20 items-center border-x border-dark-15">
        {/* Open Hours */}
        {globalData?.openHours && <OpenHours data={globalData.openHours} />}

        <div className="w-[1px] h-[146px] border-l border-dark-15"></div>

        {/* Stay Connected */}
        {globalData?.stayConnect && (
          <StayConnectLinks data={globalData.stayConnect} />
        )}
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

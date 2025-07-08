'use client';

import {
  ButtonContact,
  ContactFAQSection,
  ContactSection,
  LoadingSpinner,
  OpenHours,
  PageHeader,
  StayConnect,
  WipeButton,
} from '@/components/ui';
import {
  BUTTON_LABELS,
  DEFAULTS,
  ENV_VARS,
  ERROR_MESSAGES,
  FALLBACK_CONTACT_DATA,
  LOADING_MESSAGES,
} from '@/constants';
import { useContactPage, useGlobal } from '@/hooks/useApi';
import { formatImageUrl } from '@/utils/imageUtils';

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
      <section className="border-x-0 sm:border-x border-dark-15">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information - Left Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact List */}
              {effectiveContactData?.contactList &&
                effectiveContactData.contactList.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white mb-6">
                      Contact Information
                    </h2>
                    {effectiveContactData.contactList.map((contact) => (
                      <ButtonContact key={contact.id} data={contact} />
                    ))}
                  </div>
                )}

              {/* Open Hours */}
              {effectiveContactData?.contactOpenHours && (
                <OpenHours data={effectiveContactData.contactOpenHours} />
              )}

              {/* Stay Connected */}
              {effectiveContactData?.contactStayConnect && (
                <StayConnect data={effectiveContactData.contactStayConnect} />
              )}
            </div>

            {/* Contact Form - Right Column */}
            <div className="lg:col-span-2">
              <ContactSection contactForm={globalData?.contactForm} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {effectiveContactData?.contactFaq && (
        <ContactFAQSection data={effectiveContactData.contactFaq} />
      )}
    </div>
  );
}

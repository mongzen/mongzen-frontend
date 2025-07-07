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
  LOADING_MESSAGES,
  ROUTES,
} from '@/constants';
import { useContactPage, useGlobal } from '@/hooks/useApi';
import { ContactPage as ContactPageType } from '@/types';
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

  // Fallback data for development/demonstration
  const fallbackContactData: ContactPageType = {
    id: 1,
    documentId: 'contact',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: new Date().toISOString(),
    locale: 'en',
    localizations: [],
    SectionBanner: {
      id: 1,
      title: 'Get in Touch',
      subtitle:
        "Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      background: undefined,
      icon: undefined,
      button_text: BUTTON_LABELS.VIEW_WORK,
      button_link: ROUTES.WORKS,
    },
    contactList: [
      {
        id: 1,
        title: 'hello@digitalagency.com',
        icon: undefined,
        link: 'mailto:hello@digitalagency.com',
      },
      {
        id: 2,
        title: '+1 (555) 123-4567',
        icon: undefined,
        link: 'tel:+15551234567',
      },
      {
        id: 3,
        title: '123 Digital Street, Tech City, TC 12345',
        icon: undefined,
        link: 'https://maps.google.com',
      },
    ],
    contactOpenHours: {
      id: 1,
      title: 'Business Hours',
      subtitle:
        'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed\n\nWe typically respond to inquiries within 24 hours during business days.',
    },
    contactStayConnect: {
      id: 1,
      title: 'Stay Connected',
      Social: [
        {
          id: 1,
          title: 'Follow us on LinkedIn',
          icon: undefined,
          link: 'https://linkedin.com',
        },
        {
          id: 2,
          title: 'Follow us on Twitter',
          icon: undefined,
          link: 'https://twitter.com',
        },
      ],
    },
    contactFaq: {
      id: 1,
      title: 'Frequently Asked Questions',
      subtitle:
        'Have questions? Check out our comprehensive FAQ section for quick answers to common inquiries.',
      background: undefined,
      icon: undefined,
      button_text: BUTTON_LABELS.VIEW_FAQ,
      button_link: ROUTES.FAQ,
    },
  };

  // Use fallback data if API data is not available
  const effectiveContactData = contactData || fallbackContactData;

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

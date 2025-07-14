/**
 * Fallback Data Constants
 *
 * This file contains fallback/default data used when API responses are unavailable
 * or for development and demonstration purposes. This improves code quality by:
 *
 * 1. Centralizing fallback data management
 * 2. Making fallback data reusable across components
 * 3. Improving maintainability and consistency
 * 4. Separating data concerns from component logic
 * 5. Enabling easier testing and mocking
 */

import { ContactPage } from '@/types';
import { BUTTON_LABELS, ROUTES } from './index';

/**
 * Fallback Contact Page Data
 * Used when API data is not available or for development/demonstration
 */
export const FALLBACK_CONTACT_DATA: ContactPage = {
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
      title: 'mongzen.2025@gmail.com',
      icon: undefined,
      link: 'mailto:mongzen.2025@gmail.com',
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
} as const;

/**
 * Contact Information Constants
 * Reusable contact details
 */
export const CONTACT_INFO = {
  EMAIL: 'mongzen.2025@gmail.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Digital Street, Tech City, TC 12345',
  BUSINESS_HOURS: {
    WEEKDAYS: '9:00 AM - 6:00 PM',
    SATURDAY: '10:00 AM - 4:00 PM',
    SUNDAY: 'Closed',
    RESPONSE_TIME: '24 hours during business days',
  },
  SOCIAL_LINKS: {
    LINKEDIN: 'https://linkedin.com',
    TWITTER: 'https://twitter.com',
  },
} as const;

/**
 * Default Section Content
 * Common section titles and descriptions
 */
export const DEFAULT_SECTIONS = {
  CONTACT: {
    TITLE: 'Get in Touch',
    SUBTITLE:
      "Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },
  CONTACT_INFO: {
    TITLE: 'Contact Information',
  },
  BUSINESS_HOURS: {
    TITLE: 'Business Hours',
    SUBTITLE: `Monday - Friday: ${CONTACT_INFO.BUSINESS_HOURS.WEEKDAYS}
Saturday: ${CONTACT_INFO.BUSINESS_HOURS.SATURDAY}
Sunday: ${CONTACT_INFO.BUSINESS_HOURS.SUNDAY}

We typically respond to inquiries within ${CONTACT_INFO.BUSINESS_HOURS.RESPONSE_TIME}.`,
  },
  STAY_CONNECTED: {
    TITLE: 'Stay Connected',
  },
  FAQ: {
    TITLE: 'Frequently Asked Questions',
    SUBTITLE:
      'Have questions? Check out our comprehensive FAQ section for quick answers to common inquiries.',
  },
} as const;

/**
 * Home Page Types
 */

import {
  CTASection,
  FAQItem,
  FeatureItem,
  ServiceItem,
  TestimonialItem,
  TrustedByCompany,
} from './components';
import { UploadFile } from './media';
import { BasePage } from './shared';

/**
 * Root structure for the Homepage API
 */
export interface HomePage extends BasePage {
  hero_title: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyChooseFeaturesList: FeatureItem[];
  whyChooseBanner?: UploadFile;

  testimonialsBanner: UploadFile;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonialsList: TestimonialItem[];

  trustedByTitle: string;
  trustedByCompanies: TrustedByCompany[];

  servicesBanner: UploadFile;
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];

  faqTitle: string;
  faqSubtitle: string;
  faqItems: FAQItem[];
  faqBanner?: UploadFile;

  ctaSection: CTASection;
}

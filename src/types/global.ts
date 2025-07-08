/**
 * Global Settings Types
 */

import { FAQItem, OpenHours, StayConnect } from '@/types/components';
import { ContactPage } from '@/types/contact';
import { Seo, UploadFile } from '@/types/media';
import { BasePage, ContactForm, SectionTitleSubtitle } from '@/types/shared';

/**
 * Footer CTA section structure
 */
export interface FooterCTA {
  title: string;
  description: string;
  titleWelcome: string;
  descriptionWelcome: string;
  buttonText: string;
  buttonLink: string;
  icon?: UploadFile;
}

/**
 * Global settings structure
 */
export interface GlobalSettings extends BasePage {
  siteName: string;
  siteDescription: string;
  favicon?: UploadFile;
  defaultSeo: Seo;
  ProjectCTA: SectionTitleSubtitle;
  footerCTA?: FooterCTA;
  contactForm: ContactForm;
  openHours?: OpenHours;
  stayConnect?: StayConnect;
  contactFaq?: SectionTitleSubtitle;
  faqList: FAQItem[];
  faqBanner?: SectionTitleSubtitle;
}

/**
 * Updated Global settings structure with contact page data
 */
export interface UpdatedGlobalSettings extends GlobalSettings {
  contact?: ContactPage;
}

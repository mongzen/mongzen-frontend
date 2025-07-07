/**
 * Global Settings Types
 */

import { ContactPage } from './contact';
import { Seo, UploadFile } from './media';
import { BasePage, ContactForm, SectionTitleSubtitle } from './shared';

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
}

/**
 * Updated Global settings structure with contact page data
 */
export interface UpdatedGlobalSettings extends GlobalSettings {
  contact?: ContactPage;
}

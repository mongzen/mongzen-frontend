// homepage-types.ts
// Type definitions for the HomePage response and related Strapi media objects

/**
 * Represents a media file as returned by Strapi's Upload API
 */
export interface UploadFile {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

/**
 * Alias for media files used as icons or logos
 */
export type Icon = UploadFile;

/**
 * Root structure for the Homepage API
 */
export interface HomePage {
  id: number;
  documentId: string;
  hero_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  whyChooseTitle: string;
  whyChooseSubtitle: string;
  whyChooseFeaturesList: FeatureItem[];
  whyChooseBanner?: Icon;

  testimonialsBanner: Icon;
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonialsList: TestimonialItem[];

  trustedByTitle: string;
  trustedByCompanies: TrustedByCompany[];

  servicesBanner: Icon;
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];

  faqTitle: string;
  faqSubtitle: string;
  faqItems: FAQItem[];

  ctaSection: CTASection;
  contactForm: ContactForm;

  localizations: string[];
}

export interface TrustedByCompany {
  id: number;
  logo?: Icon;
  name: string;
  websiteUrl: string | null;
}

export interface ServiceItem {
  id: number;
  icon: Icon;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface FeatureItem {
  id: number;
  icon: Icon;
  title: string;
  description: string[];
}

export interface TestimonialItem {
  id: number;
  quote: string[];
  authorName: string;
  authorRole: string;
  authorPhoto?: Icon;
  websiteUrl: string | null;
}

export interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
  isDefaultOpen?: boolean | null;
}

export interface CTASection {
  id: number;
  icon?: Icon;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface ContactForm {
  id: number;
  fullNamePlaceholder: string;
  emailPlaceholder: string;
  questionLabel: string;
  contactOptions?: { label: string; value: string }[];
  budgetLabel: string;
  budgetMin: number;
  budgetMax: number;
  budgetMinLabel: string;
  budgetMaxLabel: string;
  messagePlaceholder: string[];
  submitButtonText: string;
}

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
  faqBanner?: Icon;

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
  description: string;
}

/**
 * Represents a child text node in Portable Text
 */
export interface PortableTextChild {
  type: 'text';
  text: string;
  [key: string]: any;
}

/**
 * Heading block in Portable Text
 */
export interface HeadingBlock {
  type: 'heading';
  level: number;
  children: PortableTextChild[];
}

/**
 * Paragraph block in Portable Text
 */
export interface ParagraphBlock {
  type: 'paragraph';
  children: PortableTextChild[];
}

/**
 * Union type for supported Portable Text blocks
 */
export type PortableTextBlock = HeadingBlock | ParagraphBlock;

export interface TestimonialItem {
  id: number;
  quote: PortableTextBlock[];
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
  ctaBanner?: Icon;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export interface ContactOption {
  id: number;
  label: string;
  value: string;
}

export interface MessagePlaceholder {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

export interface ContactForm {
  id: number;
  fullNamePlaceholder: string;
  emailPlaceholder: string;
  questionLabel: string;
  contactOptions?: ContactOption[];
  budgetLabel: string;
  budgetMin: number;
  budgetMax: number;
  budgetMinLabel: string;
  budgetMaxLabel: string;
  messagePlaceholder: MessagePlaceholder[];
  submitButtonText: string;
}

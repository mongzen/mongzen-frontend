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
  [key: string]: string;
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

/**
 * Shared component: section-title-subtitle
 */
export interface SectionTitleSubtitle {
  id: number;
  title: string;
  subtitle: string;
  background?: UploadFile;
  icon?: UploadFile;
  button_text?: string;
  button_link?: string;
}

/**
 * Shared element: service-item
 */
export interface ServiceElement {
  id: number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  icon?: UploadFile;
}

/**
 * Shared group: service-category
 */
export interface ServiceCategory {
  id: number;
  title: string;
  description?: string;
  services: ServiceElement[];
}

/**
 * Shared section: sections-service-section
 */
export interface ServiceSection {
  id: number;
  title: string;
  description?: string;
  categories: ServiceCategory[];
  intro_cta?: string;
}

/**
 * Service page structure
 */
export interface ServicePage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Services sections (repeatable)
  Services: ServiceSection[];

  localizations: string[];
}

/**
 * Work item component structure
 */
export interface WorkItem {
  id: number;
  title: string;
  name: string;
  link: string;
  description: string;
  image?: UploadFile;
}

/**
 * OurWorks section component structure
 */
export interface OurWorksSection {
  id: number;
  title: string;
  description: string;
  intro_cta: string;
}

/**
 * Work page structure
 */
export interface WorkPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // OurWorks section
  OurWorks: OurWorksSection;

  localizations: string[];

  workList: WorkItem[];
}

/**
 * SEO component structure
 */
export interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage?: UploadFile;
}

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
export interface GlobalSettings {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  favicon?: UploadFile;
  defaultSeo: Seo;
  ProjectCTA: SectionTitleSubtitle;
  footerCTA?: FooterCTA;
  contactForm: ContactForm;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: string[];
}

/**
 * Process page structure
 */
export interface ProcessPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  // Title field
  title: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Process section (using service-section structure)
  processSection: ServiceSection;

  // Process list (repeatable work-item components)
  processList: WorkItem[];

  localizations: string[];
}

/**
 * About page structure
 */
export interface AboutPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  // Title field
  Title: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Intro Image
  introImage?: UploadFile;

  // Intro section (using service-section structure)
  intro: ServiceSection;

  // Title2 field
  Title2: string;

  // List (repeatable work-item components)
  list: WorkItem[];

  localizations: string[];
}

/**
 * Contact page specific components
 */

/**
 * Button Contact component (shared.button-contact)
 */
export interface ButtonContact {
  id: number;
  title: string;
  icon?: UploadFile;
  link: string;
}

/**
 * Open Hours component (shared.open-hours)
 */
export interface OpenHours {
  id: number;
  title: string;
  subtitle: string;
}

/**
 * Stay Connect component (shared.stay-connect)
 */
export interface StayConnect {
  id: number;
  title: string;
  Social: ButtonContact[];
}

/**
 * Contact page structure
 */
export interface ContactPage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Contact List (repeatable ButtonContact components)
  contactList: ButtonContact[];

  // Contact Open Hours
  contactOpenHours: OpenHours;

  // Contact Stay Connect
  contactStayConnect: StayConnect;

  // Contact FAQ
  contactFaq: SectionTitleSubtitle;

  localizations: string[];
}

/**
 * Updated Global settings structure with contact page data
 */
export interface UpdatedGlobalSettings {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  favicon?: UploadFile;
  defaultSeo: Seo;
  ProjectCTA: SectionTitleSubtitle;
  footerCTA?: FooterCTA;
  contactForm: ContactForm;
  contact?: ContactPage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: string[];
}

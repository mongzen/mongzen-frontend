/**
 * Component-specific Types
 * Types for individual shared components across the application
 */

import type { PortableTextBlock } from './content';
import type { UploadFile } from './media';

/**
 * Trusted By Company component
 */
export interface TrustedByCompany {
  id: number;
  logo?: UploadFile;
  name: string;
  websiteUrl: string | null;
}

/**
 * Service Item component
 */
export interface ServiceItem {
  id: number;
  icon: UploadFile;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

/**
 * Feature Item component (used in Why Choose section)
 */
export interface FeatureItem {
  id: number;
  icon: UploadFile;
  title: string;
  description: string;
}

/**
 * Testimonial Item component
 */
export interface TestimonialItem {
  id: number;
  quote: PortableTextBlock[];
  authorName: string;
  authorRole: string;
  authorPhoto?: UploadFile;
  websiteUrl: string | null;
}

/**
 * FAQ Item component
 */
export interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
  isDefaultOpen?: boolean | null;
}

/**
 * CTA Section component
 */
export interface CTASection {
  id: number;
  icon?: UploadFile;
  ctaBanner?: UploadFile;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * Service Element (shared component)
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
 * Service Category (shared group)
 */
export interface ServiceCategory {
  id: number;
  title: string;
  description?: string;
  services: ServiceElement[];
}

/**
 * Service Section (shared section)
 */
export interface ServiceSection {
  id: number;
  title: string;
  description?: string;
  categories: ServiceCategory[];
  intro_cta?: string;
}

/**
 * Work Item component
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
 * Process Item (alias for WorkItem for consistency)
 */
export type ProcessItem = WorkItem;

/**
 * Our Works Section component
 */
export interface OurWorksSection {
  id: number;
  title: string;
  description: string;
  intro_cta: string;
}

/**
 * Button Contact component
 */
export interface ButtonContact {
  id: number;
  title: string;
  icon?: UploadFile;
  link: string;
}

/**
 * Open Hours component
 */
export interface OpenHours {
  id: number;
  title: string;
  subtitle: string;
}

/**
 * Stay Connect component
 */
export interface StayConnect {
  id: number;
  title: string;
  Social: ButtonContact[];
}

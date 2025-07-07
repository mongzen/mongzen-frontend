/**
 * Common/Shared Types
 * These types are used across multiple components and pages
 */

import type { MessagePlaceholder } from './content';
import type { UploadFile } from './media';

// Re-export media and content types for convenience
export type { MessagePlaceholder, PortableTextBlock } from './content';
export type { Icon, Seo, UploadFile } from './media';

/**
 * Base page properties shared across all pages
 */
export interface BasePage {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: string[];
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
 * Contact form structure
 */
export interface ContactOption {
  id: number;
  label: string;
  value: string;
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

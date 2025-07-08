/**
 * About Page Types
 */

import { ServiceSection, WorkItem } from './components';
import { UploadFile } from './media';
import { BasePage, SectionTitleSubtitle } from './shared';

/**
 * About page structure
 */
export interface AboutPage extends BasePage {
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
}

/**
 * Process Page Types
 */

import { ProcessItem, ServiceSection } from './components';
import { BasePage, SectionTitleSubtitle } from './shared';

/**
 * Process page structure
 */
export interface ProcessPage extends BasePage {
  // Title field
  title: string;

  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Process section (using service-section structure)
  processSection: ServiceSection;

  // Process list (repeatable work-item components)
  processList: ProcessItem[];
}

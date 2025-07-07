/**
 * Service Page Types
 */

import { ServiceSection } from './components';
import { BasePage, SectionTitleSubtitle } from './shared';

/**
 * Service page structure
 */
export interface ServicePage extends BasePage {
  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // Services sections (repeatable)
  Services: ServiceSection[];
}

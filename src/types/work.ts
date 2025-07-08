/**
 * Work Page Types
 */

import { OurWorksSection, WorkItem } from './components';
import { BasePage, SectionTitleSubtitle } from './shared';

/**
 * Work page structure
 */
export interface WorkPage extends BasePage {
  // SectionBanner component
  SectionBanner: SectionTitleSubtitle;

  // OurWorks section
  OurWorks: OurWorksSection;

  // Work list
  workList: WorkItem[];
}

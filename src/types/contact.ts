/**
 * Contact Page Types
 */

import { ButtonContact, OpenHours, StayConnect } from './components';
import { BasePage, SectionTitleSubtitle } from './shared';

/**
 * Contact page structure
 */
export interface ContactPage extends BasePage {
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
}

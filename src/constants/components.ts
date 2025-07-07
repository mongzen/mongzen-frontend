/**
 * Component Names Constants
 * Centralized management of component names and their related constants
 */

/**
 * UI Component Names
 */
export const UI_COMPONENTS = {
  // Basic Components
  BUTTON: 'Button',
  BUTTON_BLUR: 'ButtonBlur',
  BUTTON_CONTACT: 'ButtonContact',
  BUTTON_SQUARE_LINEAR: 'ButtonSquareLinear',
  CARD: 'Card',
  CHECKBOX: 'Checkbox',
  ICON: 'Icon',
  LOADING_SPINNER: 'LoadingSpinner',
  LOADING_OVERLAY: 'LoadingOverlay',
  WIPE_BUTTON: 'WipeButton',

  // Form Components
  RANGE_SLIDER: 'RangeSlider',
  CONTACT_SECTION: 'ContactSection',

  // Layout Components
  PAGE_HEADER: 'PageHeader',
  CONTACT_PAGE_HEADER: 'ContactPageHeader',
  CONTACT_FAQ_SECTION: 'ContactFAQSection',

  // Content Components
  OPEN_HOURS: 'OpenHours',
  STAY_CONNECT: 'StayConnect',
  SERVICE_CARD: 'ServiceCard',
  WORK_CARD: 'WorkCard',
  PROCESS_CARD: 'ProcessCard',
  FAQ_ACCORDION: 'FAQAccordion',
  SOCIAL: 'Social',
  TRUSTED_BY_COMPANIES: 'TrustedByCompanies',
  TYPOGRAPHY_SHOWCASE: 'TypographyShowcase',
  COLOR_SHOWCASE: 'ColorShowcase',
  ABSTRACT_ANIMATION: 'AbstractAnimation',
  PORTABLE_TEXT: 'PortableText',

  // Card Components
  TESTIMONIAL_CARD: 'TestimonialCard',
  WHY_CHOOSE_CARD: 'WhyChooseCard',
  FAQ_ACCORDION_ITEM_CARD: 'FAQAccordionItemCard',

  // SVG Components
  ICON_FACEBOOK: 'IconFacebook',
  ICON_LINKEDIN: 'IconLinkedIn',
} as const;

/**
 * Layout Component Names
 */
export const LAYOUT_COMPONENTS = {
  HEADER: 'Header',
  FOOTER: 'Footer',
  LAYOUT: 'Layout',
} as const;

/**
 * Page Component Names
 */
export const PAGE_COMPONENTS = {
  HOME_PAGE: 'HomePage',
  ABOUT_PAGE: 'AboutPage',
  CONTACT_PAGE: 'ContactPage',
  SERVICE_PAGE: 'ServicePage',
  WORK_PAGE: 'WorkPage',
  PROCESS_PAGE: 'ProcessPage',
  GUIDE_PAGE: 'GuidePage',
} as const;

/**
 * Hook Names
 */
export const HOOKS = {
  USE_API: 'useApi',
  USE_HOME_PAGE: 'useHomePage',
  USE_ABOUT_PAGE: 'useAboutPage',
  USE_CONTACT_PAGE: 'useContactPage',
  USE_SERVICE_PAGE: 'useServicePage',
  USE_WORK_PAGE: 'useWorkPage',
  USE_PROCESS_PAGE: 'useProcessPage',
  USE_GLOBAL: 'useGlobal',
} as const;

/**
 * Service Names
 */
export const SERVICES = {
  API_SERVICE: 'ApiService',
  HTTP_SERVICE: 'HttpService',
} as const;

/**
 * Type Names
 */
export const TYPE_NAMES = {
  // Basic Types
  UPLOAD_FILE: 'UploadFile',
  ICON: 'Icon',

  // Page Types
  HOME_PAGE: 'HomePage',
  ABOUT_PAGE: 'AboutPage',
  CONTACT_PAGE: 'ContactPage',
  SERVICE_PAGE: 'ServicePage',
  WORK_PAGE: 'WorkPage',
  PROCESS_PAGE: 'ProcessPage',
  GLOBAL_SETTINGS: 'GlobalSettings',

  // Component Types
  SECTION_TITLE_SUBTITLE: 'SectionTitleSubtitle',
  BUTTON_CONTACT: 'ButtonContact',
  OPEN_HOURS: 'OpenHours',
  STAY_CONNECT: 'StayConnect',
  SERVICE_ITEM: 'ServiceItem',
  WORK_ITEM: 'WorkItem',
  FEATURE_ITEM: 'FeatureItem',
  TESTIMONIAL_ITEM: 'TestimonialItem',
  FAQ_ITEM: 'FAQItem',
  CTA_SECTION: 'CTASection',
  CONTACT_FORM: 'ContactForm',
  CONTACT_OPTION: 'ContactOption',

  // API Types
  STRAPI_RESPONSE: 'StrapiResponse',
  STRAPI_ERROR: 'StrapiError',
  CONTACT_FORM_DATA: 'ContactFormData',
  CONTACT_FORM_RESPONSE: 'ContactFormResponse',
  USE_API_STATE: 'UseApiState',

  // Portable Text Types
  PORTABLE_TEXT_BLOCK: 'PortableTextBlock',
  PORTABLE_TEXT_CHILD: 'PortableTextChild',
  HEADING_BLOCK: 'HeadingBlock',
  PARAGRAPH_BLOCK: 'ParagraphBlock',
} as const;

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  // API Errors
  FAILED_TO_FETCH_HOME: 'Failed to fetch home page',
  FAILED_TO_FETCH_ABOUT: 'Failed to fetch about page',
  FAILED_TO_FETCH_CONTACT: 'Failed to fetch contact page',
  FAILED_TO_FETCH_SERVICE: 'Failed to fetch service page',
  FAILED_TO_FETCH_WORK: 'Failed to fetch work page',
  FAILED_TO_FETCH_PROCESS: 'Failed to fetch process page',
  FAILED_TO_FETCH_GLOBAL: 'Failed to fetch global settings',

  // Form Errors
  FAILED_TO_SEND_MESSAGE:
    'Failed to send your message. Please try again later.',
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',

  // Validation Errors
  FULL_NAME_REQUIRED: 'Full name is required',
  EMAIL_REQUIRED: 'Email is required',
  MESSAGE_REQUIRED: 'Message is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  NAME_TOO_SHORT: 'Name must be at least 2 characters',
  MESSAGE_TOO_SHORT: 'Message must be at least 10 characters',
} as const;

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  MESSAGE_SENT:
    'Your message has been sent successfully! We will get back to you soon.',
  FORM_SUBMITTED: 'Form submitted successfully!',
} as const;

/**
 * Loading Messages
 */
export const LOADING_MESSAGES = {
  LOADING_HOME: 'Loading home page...',
  LOADING_ABOUT: 'Loading about page...',
  LOADING_CONTACT: 'Loading contact page...',
  LOADING_SERVICE: 'Loading service page...',
  LOADING_WORK: 'Loading work page...',
  LOADING_PROCESS: 'Loading process page...',
  LOADING_GLOBAL: 'Loading global settings...',
  SENDING_MESSAGE: 'Sending...',
} as const;

/**
 * Button Labels
 */
export const BUTTON_LABELS = {
  // Action Buttons
  SEND_MESSAGE: 'Send Message',
  TRY_AGAIN: 'Try Again',
  SEND_ANOTHER_MESSAGE: 'Send Another Message',
  VIEW_FAQ: 'View FAQ',
  VIEW_WORK: 'View Our Work',
  LEARN_MORE: 'Learn More',
  GET_STARTED: 'Get Started',
  CONTACT_US: 'Contact Us',

  // Navigation Buttons
  BACK: 'Back',
  NEXT: 'Next',
  HOME: 'Home',
  ABOUT: 'About',
  SERVICES: 'Services',
  WORKS: 'Works',
  CONTACT: 'Contact',
  PROCESS: 'Process',
  GUIDE: 'Guide',
} as const;

/**
 * Placeholder Texts
 */
export const PLACEHOLDERS = {
  FULL_NAME: 'Enter your full name',
  EMAIL: 'your.email@example.com',
  PHONE: 'Your phone number',
  SUBJECT: 'What can we help you with?',
  MESSAGE: 'Tell us about your project...',
  SEARCH: 'Search...',
} as const;

/**
 * CSS Class Prefixes
 */
export const CSS_PREFIXES = {
  COMPONENT: 'component-',
  PAGE: 'page-',
  LAYOUT: 'layout-',
  UI: 'ui-',
  UTIL: 'util-',
} as const;

// Type definitions
export type UIComponentName = keyof typeof UI_COMPONENTS;
export type LayoutComponentName = keyof typeof LAYOUT_COMPONENTS;
export type PageComponentName = keyof typeof PAGE_COMPONENTS;
export type HookName = keyof typeof HOOKS;
export type ServiceName = keyof typeof SERVICES;
export type TypeName = keyof typeof TYPE_NAMES;
export type ErrorMessage = keyof typeof ERROR_MESSAGES;
export type SuccessMessage = keyof typeof SUCCESS_MESSAGES;
export type LoadingMessage = keyof typeof LOADING_MESSAGES;
export type ButtonLabel = keyof typeof BUTTON_LABELS;
export type PlaceholderText = keyof typeof PLACEHOLDERS;

/**
 * Application Constants
 * Only includes constants that are actually used in the codebase
 */

// Re-export used constants from styles
export {
  BACKGROUNDS,
  BORDERS,
  COMPONENT_STYLES,
  SPACING,
  STATES,
  TRANSITIONS,
  TYPOGRAPHY
} from './styles';

/**
 * API Endpoints Constants
 */
export const API_ENDPOINTS = {
  // Base paths
  BASE: '/api',

  // Content endpoints
  HOMEPAGE: '/homepage',
  CONTACT_FORM: '/contact-form',
  CONTACT: '/contact',
  SERVICE: '/service',
  PROCESS: '/process',
  ABOUT: '/about',
  WORK: '/work',
  GLOBAL: '/global',

  // Query parameters
  POPULATE_ALL: '?populate=*',
} as const;

/**
 * Route Constants
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SERVICE: '/service',
  WORKS: '/works',
  PROCESS: '/process',
  GUIDE: '/guide',
  FAQ: '/faq',
} as const;

/**
 * Environment Variables
 */
export const ENV_VARS = {
  API_URL: 'NEXT_PUBLIC_API_URL',
  NODE_ENV: 'NODE_ENV',
} as const;

/**
 * Default Values
 */
export const DEFAULTS = {
  API_URL: 'http://localhost:1337',
  STRAPI_API_BASE: '/api',
  TIMEOUT: 10000, // 10 seconds
  PORT: 3000,
  BACKUP_PORT: 3001,
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

// Type definitions for better TypeScript support
export type ApiEndpoint = keyof typeof API_ENDPOINTS;
export type RoutePath = keyof typeof ROUTES;
export type ButtonLabel = keyof typeof BUTTON_LABELS;
export type ErrorMessage = keyof typeof ERROR_MESSAGES;
export type LoadingMessage = keyof typeof LOADING_MESSAGES;

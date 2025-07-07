/**
 * Application Constants
 * Centralized management of folder names, file names, API endpoints, and other constants
 */

// Re-export all constants from other files
export * from './components';
export * from './styles';

/**
 * Folder Structure Constants
 */
export const FOLDERS = {
  // Main directories
  SRC: 'src',
  COMPONENTS: 'components',
  PAGES: 'pages',
  UTILS: 'utils',
  SERVICES: 'services',
  HOOKS: 'hooks',
  TYPES: 'types',
  LIB: 'lib',
  PUBLIC: 'public',

  // Component subdirectories
  UI: 'ui',
  LAYOUT: 'layout',
  CLIENT: 'client',
  CARD: 'card',
  SVG: 'svg',
  ABOUT: 'about',

  // App directories
  APP: 'app',
  API: 'api',
  CONTACT: 'contact',
  ABOUT_PAGE: 'about',
  SERVICE: 'service',
  WORKS: 'works',
  PROCESS: 'process',
  GUIDE: 'guide',

  // Public subdirectories
  IMAGES: 'images',
} as const;

/**
 * File Name Constants
 */
export const FILES = {
  // Configuration files
  PACKAGE_JSON: 'package.json',
  TSCONFIG: 'tsconfig.json',
  NEXT_CONFIG: 'next.config.ts',
  TAILWIND_CONFIG: 'tailwind.config.js',
  ESLINT_CONFIG: 'eslint.config.mjs',
  POSTCSS_CONFIG: 'postcss.config.mjs',
  README: 'README.md',

  // App files
  LAYOUT: 'layout.tsx',
  PAGE: 'page.tsx',
  LOADING: 'loading.tsx',
  ERROR: 'error.tsx',
  NOT_FOUND: 'not-found.tsx',
  ROUTE: 'route.ts',

  // Style files
  GLOBALS_CSS: 'globals.css',

  // Type definition files
  API_TYPES: 'api.ts',
  COMMON_TYPES: 'common.ts',
  INDEX_TYPES: 'index.ts',

  // Service files
  API_SERVICE: 'api.ts',

  // Hook files
  USE_API: 'useApi.ts',

  // Utility files
  IMAGE_UTILS: 'imageUtils.ts',
  INDEX: 'index.ts',

  // Library files
  FONTS: 'fonts.ts',

  // Public assets
  FAVICON: 'favicon.svg',
  LOGO: 'logo.svg',
  CONTACT_PNG: 'contact.png',
  ABSTRACT_DESIGN: 'AbstractDesign.svg',
  NEXT_SVG: 'next.svg',
  VERCEL_SVG: 'vercel.svg',
  FILE_SVG: 'file.svg',
  GLOBE_SVG: 'globe.svg',
  WINDOW_SVG: 'window.svg',
  SQUARES_PNG: 'squares.png',

  // Component files
  HEADER: 'Header.tsx',
  FOOTER: 'Footer.tsx',
  BUTTON: 'Button.tsx',
  BUTTON_BLUR: 'ButtonBlur.tsx',
  BUTTON_CONTACT: 'ButtonContact.tsx',
  BUTTON_SQUARE_LINEAR: 'ButtonSquareLinear.tsx',
  CARD: 'Card.tsx',
  CHECKBOX: 'Checkbox.tsx',
  CONTACT_SECTION: 'ContactSection.tsx',
  CONTACT_PAGE_HEADER: 'ContactPageHeader.tsx',
  CONTACT_FAQ_SECTION: 'ContactFAQSection.tsx',
  FAQ_ACCORDION: 'FAQAccordion.tsx',
  ICON: 'Icon.tsx',
  LOADING_COMPONENT: 'Loading.tsx',
  OPEN_HOURS: 'OpenHours.tsx',
  PAGE_HEADER: 'PageHeader.tsx',
  PROCESS_CARD: 'ProcessCard.tsx',
  RANGE_SLIDER: 'RangeSlider.tsx',
  SERVICE_CARD: 'ServiceCard.tsx',
  SOCIAL: 'Social.tsx',
  STAY_CONNECT: 'StayConnect.tsx',
  TRUSTED_BY_COMPANIES: 'TrustedByCompanies.tsx',
  TYPOGRAPHY_SHOWCASE: 'TypographyShowcase.tsx',
  WIPE_BUTTON: 'WipeButton.tsx',
  WORK_CARD: 'WorkCard.tsx',
  ABSTRACT_ANIMATION: 'AbstractAnimation.tsx',
  COLOR_SHOWCASE: 'ColorShowcase.tsx',
  PORTABLE_TEXT: 'PortableText.tsx',

  // Card component files
  FAQ_ACCORDION_ITEM_CARD: 'FAQAccordionItemCard.tsx',
  TESTIMONIAL_CARD: 'TestimonialCard.tsx',
  WHY_CHOOSE_CARD: 'WhyChooseCard.tsx',

  // SVG component files
  ICON_FACEBOOK: 'IconFacebook.tsx',
  ICON_LINKEDIN: 'IconLinkedIn.tsx',

  // App specific files
  APPLE_ICON: 'apple-icon.tsx',
  ICON_TSX: 'icon.tsx',
} as const;

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
 * Component Collection Names (Strapi)
 */
export const COLLECTION_NAMES = {
  COMPONENTS_SHARED_OPEN_HOURS: 'components_shared_open_hours',
  COMPONENTS_SHARED_STAY_CONNECTS: 'components_shared_stay_connects',
  COMPONENTS_SHARED_BUTTON_CONTACTS: 'components_shared_button_contacts',
  COMPONENTS_SHARED_SECTION_TITLE_SUBTITLE:
    'components_shared_section_title_subtitle',
  CONTACTS: 'contacts',
  HOMEPAGES: 'homepages',
  SERVICES: 'services',
  PROCESSES: 'processes',
  ABOUTS: 'abouts',
  WORKS: 'works',
  GLOBALS: 'globals',
} as const;

/**
 * Component Type Names (Strapi)
 */
export const COMPONENT_TYPES = {
  SHARED: {
    OPEN_HOURS: 'shared.open-hours',
    STAY_CONNECT: 'shared.stay-connect',
    BUTTON_CONTACT: 'shared.button-contact',
    SECTION_TITLE_SUBTITLE: 'shared.section-title-subtitle',
  },
} as const;

/**
 * File Extensions
 */
export const EXTENSIONS = {
  TSX: '.tsx',
  TS: '.ts',
  JS: '.js',
  JSX: '.jsx',
  CSS: '.css',
  JSON: '.json',
  MD: '.md',
  SVG: '.svg',
  PNG: '.png',
  JPG: '.jpg',
  JPEG: '.jpeg',
  WEBP: '.webp',
} as const;

/**
 * Build Full Paths
 */
export const PATHS = {
  // Source paths
  SRC: `./${FOLDERS.SRC}`,
  COMPONENTS: `./${FOLDERS.SRC}/${FOLDERS.COMPONENTS}`,
  COMPONENTS_UI: `./${FOLDERS.SRC}/${FOLDERS.COMPONENTS}/${FOLDERS.UI}`,
  COMPONENTS_LAYOUT: `./${FOLDERS.SRC}/${FOLDERS.COMPONENTS}/${FOLDERS.LAYOUT}`,
  SERVICES: `./${FOLDERS.SRC}/${FOLDERS.SERVICES}`,
  HOOKS: `./${FOLDERS.SRC}/${FOLDERS.HOOKS}`,
  TYPES: `./${FOLDERS.SRC}/${FOLDERS.TYPES}`,
  UTILS: `./${FOLDERS.SRC}/${FOLDERS.UTILS}`,
  LIB: `./${FOLDERS.SRC}/${FOLDERS.LIB}`,

  // App paths
  APP: `./${FOLDERS.SRC}/${FOLDERS.APP}`,
  APP_API: `./${FOLDERS.SRC}/${FOLDERS.APP}/${FOLDERS.API}`,
  APP_CONTACT: `./${FOLDERS.SRC}/${FOLDERS.APP}/${FOLDERS.CONTACT}`,

  // Public paths
  PUBLIC: `./${FOLDERS.PUBLIC}`,
  PUBLIC_IMAGES: `./${FOLDERS.PUBLIC}/${FOLDERS.IMAGES}`,
} as const;

// Type definitions for better TypeScript support
export type FolderName = keyof typeof FOLDERS;
export type FileName = keyof typeof FILES;
export type ApiEndpoint = keyof typeof API_ENDPOINTS;
export type RoutePath = keyof typeof ROUTES;
export type CollectionName = keyof typeof COLLECTION_NAMES;
export type Extension = keyof typeof EXTENSIONS;

/**
 * Styles Constants
 * Only includes style constants that are actually used in the codebase
 */

/**
 * Spacing Constants
 */
export const SPACING = {
  // Padding
  PADDING: {
    SM: 'p-4',
    MD: 'p-6',
    LG: 'p-8',
    XL: 'p-10',
    '2XL': 'p-12',
    SECTION: 'p-10 sm:p-20 lg:p-80px',
    FORM_FIELD: 'p-6 lg:p-[24px_40px]',
    FORM_FIELD_ALT: 'p-6 lg:p-10',
  },

  // Margin
  MARGIN: {
    SM: 'm-4',
    MD: 'm-6',
    LG: 'm-8',
    XL: 'm-10',
    '2XL': 'm-12',
  },

  // Gap
  GAP: {
    SM: 'gap-4',
    MD: 'gap-6',
    LG: 'gap-8',
    XL: 'gap-12',
  },
} as const;

/**
 * Border Constants
 */
export const BORDERS = {
  // Border Styles
  BASIC: 'border',
  ROUNDED: 'rounded-lg',
  ROUNDED_FULL: 'rounded-full',

  // Border Colors
  DARK: 'border-dark-15',
  PRIMARY: 'border-primary-50/20',
  NEUTRAL: 'border-neutral-50',
  DANGER: 'border-red-400',

  // Border Positions
  X: 'border-x',
  Y: 'border-y',
  TOP: 'border-t',
  BOTTOM: 'border-b',
  LEFT: 'border-l',
  RIGHT: 'border-r',
  NONE: 'border-0',

  // Complex Borders
  CONDITIONAL_X: 'border-x-0 sm:border-x',
} as const;

/**
 * Typography Constants
 */
export const TYPOGRAPHY = {
  // Font Sizes
  TEXT_SM: 'text-sm',
  TEXT_BASE: 'text-base',
  TEXT_LG: 'text-lg',
  TEXT_XL: 'text-xl',
  TEXT_2XL: 'text-2xl',
  TEXT_3XL: 'text-3xl',
  TEXT_4XL: 'text-4xl',
  TEXT_6XL: 'text-6xl',
  TEXT_22: 'text-[22px]',

  // Font Weights
  FONT_NORMAL: 'font-normal',
  FONT_MEDIUM: 'font-medium',
  FONT_SEMIBOLD: 'font-semibold',
  FONT_BOLD: 'font-bold',
  FONT_600: 'font-semibold',

  // Text Colors
  TEXT_WHITE: 'text-white',
  TEXT_PRIMARY: 'text-primary-50',
  TEXT_NEUTRAL_20: 'text-neutral-20',
  TEXT_NEUTRAL_30: 'text-neutral-30',
  TEXT_DARK_40: 'text-dark-40',
  TEXT_DARK_90: 'text-dark-90',
  TEXT_DANGER: 'text-red-400',
  TEXT_SUCCESS: 'text-green-400',

  // Text Alignment
  TEXT_LEFT: 'text-left',
  TEXT_CENTER: 'text-center',
  TEXT_RIGHT: 'text-right',

  // Line Height
  LEADING_TIGHT: 'leading-tight',
  LEADING_RELAXED: 'leading-relaxed',
  LEADING_NONE: 'leading-none',

  // Letter Spacing
  TRACKING_WIDE: 'tracking-wide',

  // Text Transform
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
  CAPITALIZE: 'capitalize',

  // Text Decoration
  UNDERLINE: 'underline',
  NO_UNDERLINE: 'no-underline',

  // Whitespace
  WHITESPACE_PRE_LINE: 'whitespace-pre-line',
} as const;

/**
 * Background Constants
 */
export const BACKGROUNDS = {
  // Basic Backgrounds
  TRANSPARENT: 'bg-transparent',
  WHITE: 'bg-white',
  BLACK: 'bg-black',

  // Color Backgrounds
  PRIMARY: 'bg-primary',
  ACCENT: 'bg-accent-500',
  DARK_50: 'bg-dark-50',
  DARK_15: 'bg-dark-15',
  NEUTRAL_50_20: 'bg-neutral-50/20',

  // Complex Backgrounds
  CARD: 'bg-[#24242480]',
  CARD_HOVER: 'bg-[#2a2a2a90]',
  PRIMARY_10: 'bg-primary-50/10',
  PRIMARY_20: 'bg-primary-50/20',
  ACCENT_10: 'bg-accent-50/10',
  ACCENT_20: 'bg-accent-50/20',
  GREEN_20: 'bg-green-500/20',
  RED_20: 'bg-red-500/20',

  // Gradients
  GRADIENT_TO_B: 'bg-gradient-to-b',
  GRADIENT_TO_T: 'bg-gradient-to-t',
  GRADIENT_FROM_DARK: 'from-dark-90/50',
  GRADIENT_VIA_DARK: 'via-dark-90/70',
  GRADIENT_TO_DARK: 'to-dark-90/90',
} as const;

/**
 * Transition Constants
 */
export const TRANSITIONS = {
  // Duration
  DURATION_200: 'duration-200',
  DURATION_300: 'duration-300',

  // Transition Types
  ALL: 'transition-all',
  COLORS: 'transition-colors',

  // Hover Effects
  HOVER_SCALE: 'hover:scale-105',
  HOVER_OPACITY: 'hover:opacity-80',

  // Transform
  TRANSFORM: 'transform',

  // Ease
  EASE: 'ease',
  EASE_IN_OUT: 'ease-in-out',
  CUBIC_BEZIER: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
} as const;

/**
 * Interactive States
 */
export const STATES = {
  // Hover
  HOVER_BG_ACCENT: 'hover:bg-accent-400',
  HOVER_BG_PRIMARY: 'hover:bg-primary-50/20',
  HOVER_BG_CARD: 'hover:bg-[#2a2a2a90]',
  HOVER_BORDER_PRIMARY: 'hover:border-primary-50/20',
  HOVER_TEXT_PRIMARY: 'hover:text-primary-50',
  HOVER_TEXT_NEUTRAL: 'hover:text-neutral-20',
  HOVER_SHADOW: 'hover:shadow-lg hover:shadow-primary-50/5',

  // Focus
  FOCUS_OUTLINE: 'focus:outline-none',
  FOCUS_RING: 'focus:ring-2',
  FOCUS_RING_ACCENT: 'focus:ring-accent-400/50',
  FOCUS_RING_RED: 'focus:ring-red-400/50',
  FOCUS_BORDER_TRANSPARENT: 'focus:border-transparent',

  // Active
  ACTIVE_SCALE: 'active:scale-95',

  // Disabled
  DISABLED: 'disabled:opacity-50 disabled:cursor-not-allowed',

  // Group
  GROUP: 'group',
  GROUP_HOVER_BG: 'group-hover:bg-primary-50/20',
  GROUP_HOVER_TEXT: 'group-hover:text-primary-50',
} as const;

/**
 * Component Specific Styles
 */
export const COMPONENT_STYLES = {
  // Button Styles
  BUTTON_BASE:
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
  BUTTON_SIZES: {
    SM: 'px-4 py-2 text-sm',
    MD: 'px-6 py-3 text-base',
    LG: 'px-8 py-4 text-lg',
  },

  // Card Styles
  CARD_BASE: 'rounded-lg border border-dark-15 bg-[#24242480]',
  CARD_HOVER: 'hover:bg-[#2a2a2a90] transition-all duration-200',

  // Form Styles
  INPUT_BASE:
    'w-full px-4 py-3 bg-dark-50 border-b border-neutral-50 text-dark-90 placeholder-dark-40 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200',
  INPUT_ERROR: 'border-red-400 focus:ring-red-400/50',
  INPUT_NORMAL: 'border-neutral-50 focus:ring-accent-400/50',

  // Icon Styles
  ICON_CONTAINER: 'w-12 h-12 flex items-center justify-center rounded-lg',
  ICON_SIZES: {
    SM: 'w-4 h-4',
    MD: 'w-6 h-6',
    LG: 'w-8 h-8',
    XL: 'w-12 h-12',
  },
} as const;

// Type definitions
export type SpacingVariant = keyof typeof SPACING;
export type BorderVariant = keyof typeof BORDERS;
export type TypographyVariant = keyof typeof TYPOGRAPHY;
export type BackgroundVariant = keyof typeof BACKGROUNDS;
export type TransitionVariant = keyof typeof TRANSITIONS;
export type StateVariant = keyof typeof STATES;

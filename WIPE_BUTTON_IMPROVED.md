# WipeButton Component - Improved Implementation

## Overview

The WipeButton component now supports comprehensive variant and color combinations with smooth left-to-right wipe animations and character-by-character text reveals.

## Features

- **3 Variants**: `outline`, `ghost`, `filled`
- **7 Color Options**: `primary`, `secondary`, `accent`, `warning`, `danger`, `success`, `info`
- **3 Sizes**: `sm`, `md`, `lg`
- **Smooth Animations**: Left-to-right background wipe with 100ms character stagger
- **TypeScript Support**: Fully typed with proper intellisense

## API Reference

```tsx
interface WipeButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'outline' | 'ghost' | 'filled';
  color?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info';
  size?: 'sm' | 'md' | 'lg';
}
```

## Variant Behaviors

### Outline Variant

- **Initial State**: Transparent background, colored border and text
- **Hover State**: Background fills with color, text changes to contrast color
- **Use Case**: Secondary actions, call-to-action buttons

```tsx
<WipeButton variant="outline" color="primary">
  Get Started
</WipeButton>
```

### Ghost Variant

- **Initial State**: No border, transparent background, colored text
- **Hover State**: Background fills with color, text changes to contrast color
- **Use Case**: Subtle actions, navigation links

```tsx
<WipeButton variant="ghost" color="secondary">
  Learn More
</WipeButton>
```

### Filled Variant

- **Initial State**: Filled background with color, contrast text
- **Hover State**: Background inverts to contrast color, text changes to main color
- **Use Case**: Primary actions, emphasized buttons

```tsx
<WipeButton variant="filled" color="danger">
  Delete Item
</WipeButton>
```

## Color Palette

| Color       | Main Color               | Contrast Color    | Usage               |
| ----------- | ------------------------ | ----------------- | ------------------- |
| `primary`   | `#9eff00` (Bright Green) | `#000000` (Black) | Main brand actions  |
| `secondary` | `#00d4ff` (Cyan Blue)    | `#000000` (Black) | Secondary actions   |
| `accent`    | `#ff6b00` (Orange)       | `#ffffff` (White) | Accent elements     |
| `warning`   | `#ffeb3b` (Yellow)       | `#000000` (Black) | Warning states      |
| `danger`    | `#f44336` (Red)          | `#ffffff` (White) | Destructive actions |
| `success`   | `#4caf50` (Green)        | `#ffffff` (White) | Success states      |
| `info`      | `#2196f3` (Blue)         | `#ffffff` (White) | Informational       |

## Animation Details

### Background Wipe

- **Direction**: Left to right
- **Duration**: 400ms
- **Easing**: Smooth cubic-bezier(0.25, 0.46, 0.45, 0.94)

### Character Animation

- **Effect**: Bottom-to-top reveal
- **Stagger**: 100ms delay between characters
- **Duration**: 300ms per character
- **Behavior**: Original text moves up, new text slides up from below

## Usage Examples

### Basic Usage

```tsx
import { WipeButton } from '@/components/ui';

// Default outline with primary color
<WipeButton>
  Click Me
</WipeButton>

// Filled danger button
<WipeButton variant="filled" color="danger" onClick={handleDelete}>
  Delete
</WipeButton>
```

### Size Variations

```tsx
<WipeButton variant="outline" color="primary" size="sm">Small</WipeButton>
<WipeButton variant="outline" color="primary" size="md">Medium</WipeButton>
<WipeButton variant="outline" color="primary" size="lg">Large</WipeButton>
```

### Color Combinations

```tsx
{/* All colors with outline variant */}
<WipeButton variant="outline" color="primary">Primary</WipeButton>
<WipeButton variant="outline" color="secondary">Secondary</WipeButton>
<WipeButton variant="outline" color="accent">Accent</WipeButton>
<WipeButton variant="outline" color="warning">Warning</WipeButton>
<WipeButton variant="outline" color="danger">Danger</WipeButton>
<WipeButton variant="outline" color="success">Success</WipeButton>
<WipeButton variant="outline" color="info">Info</WipeButton>
```

## Implementation Notes

### Color System

- Colors are defined in a centralized `colorMap` object
- Each color has a `main` value and `contrast` value for accessibility
- Contrast colors are automatically applied for text readability

### Animation Performance

- Uses Framer Motion for smooth, optimized animations
- Individual character elements for granular control
- Professional easing curves for polished feel

### Accessibility

- Proper contrast ratios between background and text colors
- Semantic button element with full keyboard support
- ARIA attributes for screen reader compatibility

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Framer Motion compatibility (IE11+ with polyfills)
- Optimized for mobile and desktop interactions

## Examples in Action

Visit the component showcase at `http://localhost:3000` and navigate to the "Wipe Buttons" tab to see all variants and colors in action.

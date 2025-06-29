# Social Component Documentation

## Overview

The Social component system provides a modern, animated social media link interface with square linear buttons that follow the design system's aesthetic. It includes:

- **Social.tsx**: Main social links container component
- **ButtonSquareLinear.tsx**: Individual social button component with hover animations

## Components

### Social Component

A flexible social media links container that displays social platform icons with hover animations.

#### Props

```tsx
interface SocialProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}
```

#### Usage

```tsx
import { Social } from '@/components/ui';

// Basic usage
<Social />

// With label and custom size
<Social size="lg" showLabel={true} />

// With custom styling
<Social className="justify-center" size="md" />
```

#### Features

- **5 Social Platforms**: Facebook, Twitter, Instagram, LinkedIn, YouTube
- **Responsive Sizing**: Small (40px), Medium (48px), Large (56px)
- **Optional Label**: "Stay Connected" text label
- **Mockup Links**: All links point to "#" for demonstration

### ButtonSquareLinear Component

Individual square button with linear gradient hover effects and smooth animations.

#### Props

```tsx
interface ButtonSquareLinearProps {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
}
```

#### Usage

```tsx
import { ButtonSquareLinear } from '@/components/ui';

// As a link
<ButtonSquareLinear href="https://twitter.com" ariaLabel="Visit Twitter">
  <TwitterIcon />
</ButtonSquareLinear>

// As a button
<ButtonSquareLinear onClick={handleClick} size="lg">
  <CustomIcon />
</ButtonSquareLinear>
```

## Integration with Footer

The Social component is integrated into the Footer component:

```tsx
// In Footer.tsx
import { Social } from '@/components/ui';

// Usage in footer
<div className="flex items-center">
  <Social size="md" showLabel={true} />
</div>;
```

## Styling & Animation

### Button States

1. **Default State**:
   - Transparent background
   - Gray border (#2a2a2a)
   - Gray text/icon (#a0a0a0)
   - Subtle border radius (12px)

2. **Hover State**:
   - Primary green border (#9eff00)
   - Primary green background (#9eff00)
   - Black text/icon (#000000)
   - Elevated shadow with green glow
   - Slight upward translation (-2px)

### Animations

- **Hover Transition**: Smooth 0.2s cubic-bezier easing
- **Tap Animation**: 0.95 scale on press
- **Background Gradient**: Linear gradient overlay on hover (green to cyan)
- **Transform**: Subtle lift effect on hover

### Size Variations

| Size | Dimensions | Font Size | Use Case          |
| ---- | ---------- | --------- | ----------------- |
| `sm` | 40x40px    | 14px      | Compact layouts   |
| `md` | 48x48px    | 16px      | Standard size     |
| `lg` | 56x56px    | 18px      | Prominent display |

## Social Platforms Included

1. **Facebook** - Classic "f" logo
2. **Twitter** - Bird logo (X/Twitter compatible)
3. **Instagram** - Camera icon
4. **LinkedIn** - Professional network logo
5. **YouTube** - Play button logo

## Accessibility Features

- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: High contrast ratios
- **Focus States**: Clear focus indicators
- **Semantic HTML**: Proper link/button semantics

## Customization

### Custom Social Platform

```tsx
const customSocialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/yourserver',
    ariaLabel: 'Join our Discord server',
    icon: <DiscordIcon />,
  },
];

// Extend the social links array in Social.tsx
```

### Styling Overrides

```tsx
// Custom styling
<Social
  className="gap-4 justify-center"
  size="lg"
/>

// Individual button styling
<ButtonSquareLinear
  className="border-2 border-blue-500"
  href="#"
>
  <CustomIcon />
</ButtonSquareLinear>
```

## Implementation Notes

### Design Inspiration

The design follows the social.png reference with:

- Square buttons with rounded corners
- Linear gradient hover effects
- Consistent spacing and sizing
- Modern, minimal aesthetic

### Performance

- Optimized SVG icons for fast loading
- CSS-in-JS with Framer Motion for smooth animations
- Lazy loading compatible
- Mobile-optimized touch targets

### Browser Support

- Modern browsers with CSS Grid/Flexbox
- Framer Motion compatibility
- Touch device optimized
- High DPI display ready

## Examples

### Footer Integration

```tsx
// Current implementation in Footer.tsx
<div className="flex items-center">
  <Social size="md" showLabel={true} />
</div>
```

### Header Integration

```tsx
// Could be used in header for smaller size
<Social size="sm" className="hidden lg:flex" />
```

### Standalone Usage

```tsx
// As a dedicated social section
<section className="py-8">
  <h3 className="text-center mb-4">Connect With Us</h3>
  <Social size="lg" showLabel={true} className="justify-center" />
</section>
```

The Social component system provides a complete, modern social media integration that matches the digital agency's brand aesthetic while maintaining accessibility and performance standards.

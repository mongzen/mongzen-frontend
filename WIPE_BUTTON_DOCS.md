# WipeButton Component Documentation

## Overview

The `WipeButton` is a sophisticated animated button component that features a character-by-character text animation with a left-to-right background wipe effect. Each character in the button text animates individually with 100ms staggered timing, creating a dynamic and professional user experience.

## Features

- **Character-by-Character Animation**: Each letter animates individually with 100ms staggered timing
- **Left-to-Right Reveal**: Characters reveal from left to right with precise timing
- **Professional Easing**: Uses cubic-bezier curves for smooth, natural motion
- **Dual Text Layers**: Original text slides up while new text reveals from bottom
- **Background Wipe Effect**: Smooth left-to-right background animation (0.4s)
- **Multiple Variants**: Primary, secondary, and outline styles
- **Responsive Sizes**: Small, medium, and large button sizes
- **Accessible**: Proper ARIA attributes and keyboard navigation

## Animation Details

### Easing Functions

- **Smooth**: `[0.25, 0.46, 0.45, 0.94]` - Used for main animations
- **Snappy**: `[0.4, 0.0, 0.2, 1]` - Used for button scaling

### Animation Sequence

1. **Button Hover**: Scales to 1.02x (0.2s)
2. **Background Wipe**: Left-to-right fill (0.4s duration)
3. **Character Animation**: Each character animates with **100ms (0.1s) stagger**
4. **Text Reveal**:
   - Original text moves up (-100%) with staggered timing
   - Hover text reveals from bottom (100% to 0%) with same stagger
   - Each character transition takes 0.3s with smooth easing

## Animation Timeline Example

For the word "INQUIRE" (7 characters):

- **0ms**: Background starts left-to-right wipe + "I" starts revealing
- **100ms**: "N" starts moving up/revealing
- **200ms**: "Q" starts moving up/revealing
- **300ms**: "U" starts moving up/revealing
- **400ms**: Background wipe completes + "I" starts revealing
- **500ms**: "R" starts moving up/revealing
- **600ms**: "E" starts moving up/revealing

The effect creates a smooth left-to-right character reveal that matches your example GIF timing.

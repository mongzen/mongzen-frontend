# Constants Organization

This directory contains centralized constants for the application to improve maintainability and consistency.

## Structure

### 📁 Files

- **`index.ts`** - Main constants file with API endpoints, routes, environment variables, button labels, error messages, and loading messages
- **`styles.ts`** - CSS classes, spacing, borders, typography, backgrounds, transitions, states, and component-specific styles

## 📋 Usage Examples

### Using API Endpoints

```typescript
import { API_ENDPOINTS } from '@/constants';

// Instead of: '/api/homepage?populate=*'
const url = `${API_ENDPOINTS.HOMEPAGE}${API_ENDPOINTS.POPULATE_ALL}`;
```

### Using Route Constants

```typescript
import { ROUTES } from '@/constants';

// Instead of: '/contact'
const contactRoute = ROUTES.CONTACT;
```

### Using Button Labels

```typescript
import { BUTTON_LABELS } from '@/constants';

// Instead of: 'Try Again'
const buttonText = BUTTON_LABELS.TRY_AGAIN;
```

### Using Style Constants

```typescript
import { TYPOGRAPHY, BACKGROUNDS, BORDERS } from '@/constants';

// Instead of: 'text-lg font-semibold text-white'
const titleClasses = clsx(
  TYPOGRAPHY.TEXT_LG,
  TYPOGRAPHY.FONT_SEMIBOLD,
  TYPOGRAPHY.TEXT_WHITE
);
```

### Using Error Messages

```typescript
import { ERROR_MESSAGES, LOADING_MESSAGES } from '@/constants';

// Instead of: 'Failed to fetch contact page'
const errorMessage = ERROR_MESSAGES.FAILED_TO_FETCH_CONTACT;
const loadingMessage = LOADING_MESSAGES.LOADING_CONTACT;
```

## 🎯 Benefits

1. **Consistency** - Centralized values ensure consistent naming across the application
2. **Maintainability** - Easy to update values in one place
3. **Type Safety** - TypeScript types for all constants
4. **Discoverability** - Easy to find available options with IDE autocomplete
5. **Refactoring** - Safer refactoring with compile-time checks

## 📝 Guidelines

### Adding New Constants

1. Choose the appropriate file (`index.ts` or `styles.ts`)
2. Follow the existing naming convention (SCREAMING_SNAKE_CASE)
3. Group related constants together
4. Add TypeScript types when appropriate
5. Update this README if adding new categories

### Naming Conventions

- **API Endpoints**: `API_ENDPOINTS.ENDPOINT_NAME`
- **Routes**: `ROUTES.ROUTE_NAME`
- **Button Labels**: `BUTTON_LABELS.LABEL_NAME`
- **Error Messages**: `ERROR_MESSAGES.MESSAGE_NAME`
- **Loading Messages**: `LOADING_MESSAGES.MESSAGE_NAME`
- **Styles**: `TYPOGRAPHY.STYLE_NAME`, `BACKGROUNDS.COLOR_NAME`, `SPACING.SIZE_NAME`

### Migration Strategy

When migrating existing hardcoded values:

1. Identify the category (endpoint, style, message, etc.)
2. Check if a constant already exists
3. If not, add the constant to the appropriate file
4. Replace the hardcoded value with the constant
5. Test to ensure nothing breaks

## 🔄 Integration Status

### ✅ Completed

- API service endpoints and defaults
- Contact page routes, error messages, and loading messages
- ButtonContact component styles
- Button labels for UI actions
- Style constants for components

### 📋 Future Considerations

Only add new constants when:

- Values are used in multiple places
- Values are likely to change
- Type safety is important
- Consistency is needed across components

## 🧪 Testing

When updating constants:

1. Run the development server: `npm run dev`
2. Test affected pages/components
3. Check for TypeScript errors
4. Verify styling consistency
5. Test error and loading states

## 📚 Related Files

- `src/services/api.ts` - Uses API_ENDPOINTS, DEFAULTS, ENV_VARS
- `src/app/contact/page.tsx` - Uses BUTTON_LABELS, ERROR_MESSAGES, LOADING_MESSAGES, ROUTES
- `src/components/ui/ButtonContact.tsx` - Uses style constants (BACKGROUNDS, BORDERS, etc.)

## 🤝 Contributing

When adding new constants:

1. Follow the established patterns
2. Use descriptive names
3. Group logically related items
4. Add TypeScript types
5. Update documentation
6. Test thoroughly

**Note:** This constants organization now only includes values that are actively used in the codebase, ensuring a clean and maintainable structure without unnecessary bloat.

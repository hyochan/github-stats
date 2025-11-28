# Claude Code Guidelines

## Development Commands

```bash
# Development
bun run dev          # Start development server

# Build & Lint
bun run build        # Production build
bun run lint         # Run ESLint
```

## Project Structure

- `/app` - Next.js App Router pages and components
- `/server` - Server-side services and plugins
- `/src` - Shared utilities, hooks, and localization
- `/public` - Static assets

## Styling Guidelines

### Tailwind Color System

This project uses a custom color palette defined in `tailwind.config.js`. **Always use Tailwind classes instead of hardcoded colors**.

#### Text Colors
```tsx
// Main text - use for primary content
className="text-black dark:text-white"

// Placeholder/secondary text
className="text-placeholder-light dark:text-placeholder-dark"

// Link text
className="text-link-light dark:text-link-dark"
```

#### Background Colors
```tsx
// Paper/card backgrounds
className="bg-paper-light dark:bg-paper-dark"

// Modal backgrounds
className="bg-modal-light dark:bg-modal-dark"

// Gray backgrounds (1=lightest, 9=darkest)
className="bg-gray1 dark:bg-gray8"
className="hover:bg-gray2 dark:hover:bg-gray7"
```

#### Border Colors
```tsx
className="border-border-light dark:border-border-dark"
```

#### Brand/Accent Colors
```tsx
// Primary brand color (blue)
className="bg-brand"  // #4190EB

// Primary buttons
className="bg-btn-primary-light dark:bg-btn-primary-dark"
className="text-btn-primary-text-light dark:text-btn-primary-text-dark"

// Status colors
className="text-success-light dark:text-success-dark"
className="text-danger-light dark:text-danger-dark"
className="text-warning-light dark:text-warning-dark"
```

### Typography
Use predefined font sizes:
- `text-h1` through `text-h4` for headings
- `text-body1` through `text-body4` for body text

### Common Patterns

#### Dark Mode Support
Always provide both light and dark variants:
```tsx
// Correct
className="bg-paper-light dark:bg-paper-dark text-black dark:text-white"

// Incorrect - hardcoded colors
style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
```

#### Hover States
```tsx
className="hover:bg-gray1 dark:hover:bg-gray8"
```

## Component Guidelines

- Use `clsx` for conditional class names
- Prefer Tailwind classes over inline styles
- Support both light and dark modes for all UI components

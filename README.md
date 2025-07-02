# React Router Template with FSD Architecture

## Overview

This is a React application template featuring:

- React Router v6 for routing
- Feature-Sliced Design (FSD) architecture
- Error boundaries with network status detection
- Authentication-protected routes
- Nested routing support
- Lazy loading of components
- ESLint for code quality

## Project Structure (FSD)

```
src/
├── app/                    # Application layer
│   ├── providers/          # App-wide providers (router, error boundary)
│   └── App.tsx             # Root component
│
├── pages/                  # Page components
│   └── MainPage/           # Example page
│       ├── ui/             # UI components for this page
│       └── index.ts        # Public API
│
├── shared/                 # Shared functionality
│   ├── const/              # Constants (routes, etc.)
│   ├── types/              # Type definitions
│   └── template/           # Reusable templates
│
├── styles/                 # Global styles
└── main.tsx                # Application entry point
```

## Key Features

### Routing System

- Route configuration in `routeConfig.tsx`
- Supports:
    - Protected routes (`authOnly` flag)
    - Nested routes
    - Redirects
    - 404 handling
- Route types and constants in `shared/const/router`

### Error Handling

- Comprehensive `ErrorBoundary` component that:
    - Catches React errors
    - Detects offline status
    - Shows appropriate error messages

### Authentication

- `RequireAuth` component for protecting routes
- Simple token check (extend with your auth logic)

### Performance

- Lazy loading of pages (see `MainPage.async.tsx`)
- Suspense fallbacks during loading

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Configuration

### Routing

To add a new route:

1. Add a new enum value to `AppRoutes` in `shared/const/router`
2. Add route configuration in `routeConfig.tsx`
3. Create corresponding page component in `pages/`

Example route configuration:
```tsx
[AppRoutes.NEW_PAGE]: {
  path: 'new-path',
  authOnly: true, // optional
  element: <NewPage />,
  nestedRoutes: { // optional
    [NestedRoutes.NEW_NESTED]: {
      path: 'nested-path',
      element: <NestedComponent />,
    },
  },
},
```

### Authentication

Modify `RequireAuth.tsx` to implement your authentication logic. Currently, it checks for a simple `hasAccessToken` boolean.

## Development Guidelines

- Follow FSD architecture principles
- Use ESLint for code consistency
- All routes should be defined in the route config
- Use lazy loading for page components
- Keep business logic separate from UI components

## Dependencies

- react-router-dom
- react (with types)
- sass (for styling)

## Scripts

- `dev` - Start development server
- `build` - Create production build
- `lint` - Run ESLint
- `format` - Format code with Prettier

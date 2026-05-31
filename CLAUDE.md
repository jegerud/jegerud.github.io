# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (jegerud.github.io) built with React and TypeScript. It's a single-page application with a custom scroll-snap navigation system deployed via GitHub Pages.

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages (builds and publoys to gh-pages branch)
npm run deploy
```

## Architecture

### Application Structure

The app uses a **custom scroll-based navigation** rather than React Router:

- **App.tsx**: Root component that renders all page sections in a single scrollable container (`#AppContainer`), wrapped with styled-components `ThemeProvider`
- **NavBar.tsx**: Vertical navigation sidebar that:
  - Tracks scroll position via polling (250ms interval)
  - Calculates which section is active based on scroll position (divides scrollHeight by 5 for 5 sections)
  - Smoothly scrolls to sections when clicked using `element.scrollTo()`
- **Scroll container**: Uses CSS `scroll-snap-type: y mandatory` for snap-to-section behavior

### Page Components

All pages in `src/pages/` are rendered simultaneously in App.tsx:
- `home.tsx`: Landing page with typewriter animation cycling through roles
- `about.tsx`: About section with personal information
- `work-experience.tsx`: Work experience cards (card-based grid layout)
- `education.tsx`: Education cards with program links (card-based grid layout)
- `contact.tsx`: Contact information with LinkedIn link

Each page uses `scroll-snap-align: start` and `height: 100vh` to work with the scroll-snap navigation.

### Styling Architecture

- **styled-components**: All styling uses styled-components with inline component definitions
- **ThemeProvider**: App wrapped with styled-components `ThemeProvider` for light/dark mode theming
- **Responsive design**: Heavy use of `@media (max-width: 850px)` queries for mobile layout
- **Shared styled components**: `src/pages/styledComponents/` contains reusable header components
- **Style helpers**: `src/helpers/styles-helpers.ts` provides utility functions like `ResetHeaders()`
- **Font family**: `courier new` used consistently throughout

### Theming System

The app implements a dark mode toggle with theme persistence:

**Theme Configuration** (`src/theme.ts`):
- Defines `Theme` interface with properties: background, text, cardBackground, cardBorder, cardShadow, techBadgeBackground, linkColor
- `lightTheme`: Warm beige (#ecdbc7) background with black text
- `darkTheme`: Dark warm brown (#3a2f28) background with warm light beige (#e8dcc8) text

**Theme Toggle** (`src/components/ThemeToggle.tsx`):
- Fixed position button in upper right corner (sun/moon icon)
- Toggles between light and dark themes
- Small, subtle design (35px × 35px on desktop, 32px × 32px on mobile)

**Theme Persistence**:
- Theme preference stored in `sessionStorage` with key `'darkMode'`
- Initialized on app load from sessionStorage
- Saved whenever theme changes

**Using Themes in Components**:
All styled components access theme via props:
```typescript
const Component = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
`;
```

### Key Implementation Details

1. **Navigation sync**: The NavBar polls scroll position every 250ms and calculates active section by dividing total scrollHeight by 5 (assumes exactly 5 equal-height sections)

2. **Section height calculation**: Navigation clicks calculate scroll position as `(scrollHeight / 5) * sectionIndex`

3. **Section order**: Home (0) → About (1) → Work (2) → Education (3) → Contact (4)

4. **Mobile responsiveness**: Grid layouts switch from side-by-side to stacked on screens < 850px

5. **Typewriter animation**: Home page uses a custom typing effect that cycles through roles, with the roles array defined outside the component to avoid re-renders

## Important Notes

- Navigation assumes exactly 5 equal-height sections - adding/removing sections requires updating NavBar scroll calculations (change divisor from 5 to new count) and active section detection logic
- The repository is deployed to GitHub Pages using the gh-pages branch
- When adding new styled components, ensure they use theme properties (e.g., `${props => props.theme.background}`) for dark mode compatibility
- Card-based layouts (Work Experience, Education) follow consistent patterns: 2-column grid on desktop, single column on mobile

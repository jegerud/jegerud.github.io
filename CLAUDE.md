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

- **App.tsx**: Root component that renders all page sections in a single scrollable container (`#AppContainer`)
- **NavBar.tsx**: Vertical navigation sidebar that:
  - Tracks scroll position via polling (250ms interval)
  - Calculates which section is active based on scroll position (divides scrollHeight by 4 for 4 sections)
  - Smoothly scrolls to sections when clicked using `element.scrollTo()`
- **Scroll container**: Uses CSS `scroll-snap-type: y mandatory` for snap-to-section behavior

### Page Components

All pages in `src/pages/` are rendered simultaneously in App.tsx:
- `home.tsx`: Landing page with large header typography
- `about.tsx`: About section
- `education.tsx`: Education/projects section with GitHub link (note: confusingly named, actually links to projects)
- `contact.tsx`: Contact information

Each page uses `scroll-snap-align: start` and `height: 100vh` to work with the scroll-snap navigation.

### Styling Architecture

- **styled-components**: All styling uses styled-components with inline component definitions
- **Responsive design**: Heavy use of `@media (max-width: 850px)` queries for mobile layout
- **Shared styled components**: `src/pages/styledComponents/` contains reusable header components
- **Style helpers**: `src/helpers/styles-helpers.ts` provides utility functions like `ResetHeaders()`
- **Theme**: Uses `#ecdbc7` (beige) background with `courier new` font family throughout

### Key Implementation Details

1. **Navigation sync**: The NavBar polls scroll position every 250ms and calculates active section by dividing total scrollHeight by 4 (assumes exactly 4 equal-height sections)

2. **Section height calculation**: Navigation clicks calculate scroll position as `(scrollHeight / 4) * sectionIndex`

3. **Mobile responsiveness**: Grid layouts switch from side-by-side to stacked on screens < 850px

## Important Notes

- The "Education" page (education.tsx) actually links to GitHub projects, not education credentials
- Navigation assumes exactly 4 equal-height sections - adding/removing sections requires NavBar logic updates
- App.tsx includes a Projects import that isn't currently used in the render
- The repository is deployed to GitHub Pages using the gh-pages branch

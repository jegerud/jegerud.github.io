# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, featuring a custom scroll-based navigation system and dark mode support.

🔗 **Live Site:** [jegerud.github.io](https://jegerud.github.io)

## Features

- **Custom Scroll Navigation** - Smooth scroll-snap navigation between sections without React Router
- **Dark Mode** - Toggle between light (warm beige) and dark (warm brown) themes with session persistence
- **Typewriter Animation** - Dynamic typing effect on the home page that cycles through different roles
- **Responsive Design** - Mobile-friendly layouts with breakpoints at 850px
- **Card-Based Layouts** - Clean, modern card designs for Work Experience, Education, and Projects
- **Theme Persistence** - Theme preference saved in session storage

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **styled-components** - CSS-in-JS styling with theming support
- **Create React App** - Build tooling
- **GitHub Pages** - Hosting and deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jegerud/jegerud.github.io.git
cd jegerud.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run deploy` - Builds and deploys to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx          # Vertical navigation sidebar
│   └── ThemeToggle.tsx     # Dark mode toggle button
├── pages/
│   ├── home.tsx            # Landing page with typewriter effect
│   ├── about.tsx           # About section
│   ├── work-experience.tsx # Work experience cards
│   ├── education.tsx       # Education cards with program links
│   ├── projects.tsx        # Project showcase with GitHub links
│   ├── contact.tsx         # Contact information
│   └── styledComponents/   # Shared styled components
├── helpers/
│   └── styles-helpers.ts   # Style utility functions
├── theme.ts                # Light and dark theme definitions
├── App.tsx                 # Root component with ThemeProvider
└── index.tsx              # App entry point
```

## Architecture Highlights

### Custom Scroll Navigation

Instead of using React Router, this portfolio implements a custom scroll-based navigation system:

- All page sections are rendered simultaneously in a scrollable container
- CSS scroll-snap ensures smooth section transitions
- Navigation bar tracks scroll position (polling every 250ms) to highlight the active section
- Clicking navigation items smoothly scrolls to the corresponding section

### Theming System

The app uses styled-components' `ThemeProvider` for consistent theming:

- **Theme configuration** (`src/theme.ts`) defines color palettes for light and dark modes
- **Session storage** persists theme preference across browser sessions
- **All components** use theme properties for colors, ensuring seamless mode switching
- **Smooth transitions** provide a polished user experience when toggling themes

### Navigation Calculation

The navigation system divides the scroll container into 6 equal sections:

- **Section mapping:** Home (0) → About (1) → Work (2) → Education (3) → Projects (4) → Contact (5)
- **Scroll calculation:** `(scrollHeight / 6) * sectionIndex`
- **Active detection:** Determines active section based on scroll position thresholds

## Customization

### Adding/Editing Content

- **Work Experience:** Edit the `experiences` array in `src/pages/work-experience.tsx`
- **Education:** Edit the `educations` array in `src/pages/education.tsx`
- **Projects:** Edit the `projects` array in `src/pages/projects.tsx`
- **Typewriter Roles:** Edit the `roles` array in `src/pages/home.tsx`

### Adding New Sections

To add a new page section:

1. Create a new page component in `src/pages/`
2. Import and add the component to `src/App.tsx`
3. Update `src/components/NavBar.tsx`:
   - Change the scroll divisor (e.g., from `/ 6` to `/ 7`)
   - Add active section detection logic
   - Add a new navigation element

## Deployment

The site is deployed to GitHub Pages using the `gh-pages` package:

```bash
npm run deploy
```

This command:

1. Builds the production bundle
2. Pushes the build to the `gh-pages` branch
3. GitHub Pages serves the site from that branch

## Color Schemes

**Light Mode:**

- Background: `#ecdbc7` (warm beige)
- Text: `#000000` (black)
- Cards: Semi-transparent white with subtle shadows

**Dark Mode:**

- Background: `#3a2f28` (dark warm brown)
- Text: `#e8dcc8` (warm light beige)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Common Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16.2.6 project with React 19.2.4 using the App Router architecture.

**Project Structure:**
- `src/app/` - App Router directory (route segments defined as folders)
- `src/app/layout.js` - Root layout with Geist fonts, applies to all routes
- `src/app/page.js` - Home page component
- `src/app/globals.css` - Global styles with Tailwind v4 and CSS variables for theming

**Key Technologies:**
- Tailwind CSS v4 with PostCSS (`@tailwindcss/postcss` plugin)
- next/font/google for optimized Geist Sans and Geist Mono fonts
- CSS variables + `prefers-color-scheme` media query for automatic dark mode

**Path Aliases:**
- `@/*` maps to `./src/*` (configured in jsconfig.json)

**Linting:**
- ESLint with `next/core-web-vitals` config
- Custom ignores override default next ignores in eslint.config.mjs

**Styling Conventions:**
- Uses Tailwind v4's new inline theme syntax in CSS (`@theme inline`)
- CSS custom properties for theming: `--background`, `--foreground`
- Dark mode is automatic via `prefers-color-scheme` (no manual toggle)

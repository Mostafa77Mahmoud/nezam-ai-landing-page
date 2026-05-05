# Nezam-AI Landing Page

A bilingual (Arabic/English) landing page for Nezam-AI, an AI-powered system for Sharia & Lawful compliance and complex decision analysis.

## Tech Stack

- **Framework**: React 18 with Vite 7
- **Styling**: Tailwind CSS v3 with shadcn/ui components (New York style)
- **UI Components**: Radix UI primitives + Lucide React icons
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet
- **Internationalization**: Custom LanguageProvider context (Arabic RTL / English LTR)

## Project Structure

- `src/App.jsx` — Root app with routing and providers
- `src/main.jsx` — Entry point
- `src/pages/HomePage.jsx` — Main landing page
- `src/components/` — Shared UI components (Header, Footer, etc.)
- `src/contexts/LanguageProvider.jsx` — Bilingual language context
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions
- `plugins/` — Custom Vite plugins (visual-editor, selection-mode, pocketbase-auth, etc.)

## Development

- **Port**: 5000 (bound to 0.0.0.0)
- **Start**: `npm run dev`
- **Workflow**: "Start application" → `npm run dev`

## Deployment

- **Type**: Static site
- **Build command**: `npm run build`
- **Output directory**: `dist`

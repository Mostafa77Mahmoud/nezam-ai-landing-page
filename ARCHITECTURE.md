# Nezam AI Architecture & Engineering Rules

This document specifies the technical design, codebase standards, folder structures, and developer boundaries across the Nezam AI multi-project workspace.

---

## 1. Project Breakdown & Technical Stacks

The Nezam AI workspace contains two distinct, cooperative frontends:

```
                            ┌────────────────────────┐
                            │   NEZAM AI WORKSPACE   │
                            └───────────┬────────────┘
                                        │
             ┌──────────────────────────┴──────────────────────────┐
             ▼                                                     ▼
┌──────────────────────────┐                          ┌──────────────────────────┐
│       LANDING PAGE       │                          │    FRONTEND DASHBOARD    │
│  - React 18 / Vite 7     │                          │  - React 18 / Vite 5     │
│  - JavaScript (.jsx)     │                          │  - TypeScript (.tsx)     │
│  - Dynamic translations  │                          │  - Key-value dictionary  │
│  - Single page structure │                          │  - Multi-page routing    │
└──────────────────────────┘                          └──────────────────────────┘
```

### A. Nezam AI Landing Page
*   **Location:** `c:\Users\Mostafa\Downloads\nezam-ai-landing-page-main\nezam-ai-landing-page-main`
*   **Tech Stack:** React 18.3.1, JavaScript (`.jsx`/`.js`), Vite 7.3.1, Tailwind CSS v3.
*   **Routing:** Single-page route managed via `react-router-dom` v7.

### B. Nezam AI Shariah Compliance Workspace (Dashboard)
*   **Location:** `c:\Users\Mostafa\Downloads\shar-AI-frontend-main (6)\shar-AI-frontend-main`
*   **Tech Stack:** React 18.3.1, TypeScript (`.tsx`/`.ts`), Vite 5.4.1, Tailwind CSS v3.
*   **Core Systems:** React Router DOM v6, TanStack React Query v5 (caching and fetching), Recharts (data visualization), Radix UI + shadcn/ui (reusable components).

---

## 2. Reusable Code & Coding Standards

### A. TypeScript Preferred Standard
*   **Standard:** **TypeScript (`.tsx`/`.ts`) is the mandatory standard for all future additions, reusable system utilities, helper libraries, and components** in both projects.
*   **Landing Page Policy:** Do not force immediate full rewrite of the landing page from JS to TS. However, any new component file or shared helper written for the landing page going forward must be created in TypeScript (`.jsx` ➔ `.tsx`).
*   **Dashboard Policy:** Strict TypeScript compilation with no implicit `any` variables. Maintain clean type interfaces.

### B. Shared Component Alignment
*   When building components intended for use in both projects, place them in a modular, decoupled folder structure.
*   Avoid importing page-specific hooks (like `useSession` or Tanstack Query hooks) directly into core components. Instead, design components as "pure UI" elements that accept data via parameters and props, allowing them to render cleanly in both JS and TS contexts.

---

## 3. Bilingual & Localization Strategy

Both projects currently run separate localization architectures, with a long-term roadmap to unify under a key-value dictionary system:

### A. Dashboard Standard (Key-Based)
*   **Mechanism:** Translation keys are looked up in a centralized static dictionary (`src/contexts/LanguageContext.tsx`) containing dedicated `en` and `ar` sections.
*   **Code Example:**
    ```typescript
    const { t } = useLanguage();
    return <h1>{t('app.title')}</h1>;
    ```
*   **Rule:** This remains the standard for all complex, multi-page, and interactive applications within the ecosystem.

### B. Landing Page Standard (Dynamic Parameters)
*   **Mechanism:** Renders text dynamically by passing both Arabic and English strings inline via the `<Bilingual />` component or calling the translation helper `t(arabicText, englishText)` inline.
*   **Code Example:**
    ```jsx
    <Bilingual ar="تحميل تقرير شامل" en="Download Full Report" />
    ```
*   **Rule:** Permitted on the landing page for rapid copy editing and to keep the codebase lightweight. However, any major features or additional pages added to the landing page must migrate to the key-value dictionary model.

---

## 4. Theme & Global State Management

*   **Global Variables:** Both projects use Tailwind CSS v3 with HSL colors mapped to CSS variables in `:root` and `.dark` (e.g. `--background`, `--primary`, `--border`).
*   **Theme Switcher (Dashboard):** Uses `next-themes` with a custom `ThemeContext` providing a sliding state selector.
*   **Theme Switcher (Landing Page):** Supports `.dark` variables in its CSS sheet. Theme toggler implementation is a secondary priority and will eventually adopt the same `next-themes` structure when global app-state is synchronized.

# Nezam AI Agent Collaboration Protocols

This document establishes the standards, ownership boundaries, and instructions for all AI development agents and human developers collaborating across the Nezam AI multi-project workspace.

---

## 1. Collaborative Agent Roles

To prevent merge conflicts, codebase regression, or brand pollution, work is divided into three distinct roles. When initiating a task, assume the matching role profile:

```
                            ┌────────────────────────┐
                            │    AGENT ROLE MODEL    │
                            └───────────┬────────────┘
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         ▼                              ▼                              ▼
┌──────────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────┐
│   LANDING PAGE DESIGN    │   │  DASHBOARD UI DEVELOPER  │   │ INTEGRATION & CORE LOGIC │
│  - Public copy updates   │   │  - Reusable TS widgets   │   │  - API optimistic state  │
│  - Landing layout rules  │   │  - Cairo font compliance │   │  - Refetch routines      │
│  - Cairo font alignment  │   │  - Accessibility / RTL   │   │  - Session synchronizer  │
└──────────────────────────┘   └──────────────────────────┘   └──────────────────────────┘
```

### A. Landing Page Design Agent
*   **Mission:** Enhance the marketing, public branding, and SEO positioning.
*   **Scope:** `c:\Users\Mostafa\Downloads\nezam-ai-landing-page-main\nezam-ai-landing-page-main`
*   **Standards:** Ensure diacritics in Arabic (Cairo font) do not overlap. Keep translations aligned between English and Arabic. Ensure dynamic `t(ar, en)` parameters are passed accurately.

### B. Dashboard UI Developer Agent
*   **Mission:** Build high-fidelity visual dashboards and analytics panels.
*   **Scope:** `c:\Users\Mostafa\Downloads\shar-AI-frontend-main (6)\shar-AI-frontend-main/src/components/*` and `/pages/*`
*   **Standards:** Strict TypeScript compliance. Components must support light/dark modes (`next-themes`) and proper RTL margins. Implement the tactile press effect (`active:scale-[0.98]`) on all controls.

### C. Integration & Core Logic Agent
*   **Mission:** Manage APIs, state managers, hooks, and session lifecycles.
*   **Scope:** `c:\Users\Mostafa\Downloads\shar-AI-frontend-main (6)\shar-AI-frontend-main/src/contexts/*` and `/services/*`
*   **Standards:** Maintain correct state syncing (optimistic updates, robust API refetches). Ensure data schema integrity (e.g. `confirmed_modified_text` field mappings).

---

## 2. Shared Code Quality & Integrity Rules

Every agent operating within this workspace must strictly adhere to the following rules:

> [!IMPORTANT]
> **Code Preservation & Comments Policy:**
> - Proactively maintain and preserve all existing codebase comments, JSDoc headers, and annotations. 
> - If updating a component, keep unrelated docstrings intact.
> - Never wipe out explanatory comments or fallback codes to save space.

*   **TypeScript Requirement:** Any *new* component, helper utility, or service module must be authored in **TypeScript** (`.ts` or `.tsx`).
*   **Branding Invariant:** Never inline custom colors (like `#ff0000` or `#00ff00`) for branding elements. Always use the specified Tailwind config class or the CSS HSL variable tokens (`bg-primary`, `bg-shariah-green`, `bg-shariah-red`).
*   **Translation Compliance:** When writing keys for the dashboard translation system, always update both `en` and `ar` in `src/contexts/LanguageContext.tsx` simultaneously to prevent runtime lookup failure.
*   **Directional Safety:** Always wrap inline LTR text blocks (such as currency figures, email patterns, standard numbers) in `<span className="ltr-in-rtl">...</span>` when rendering inside RTL containers.

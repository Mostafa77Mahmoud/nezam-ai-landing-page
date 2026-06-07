# Nezam AI UI & UX Design Rules

This document outlines the detailed user interface (UI) and user experience (UX) layout standards, visual rhythms, transitions, and component rules to ensure high-fidelity, premium, and unified interfaces across the Nezam AI ecosystem.

---

## 1. Grid & Spacing System

All spacing, margins, paddings, and heights must align to a consistent vertical and horizontal rhythm based on the **8px grid system** (`0.5rem`).

### A. General Spacing Tokens (Tailwind & CSS Variables)
To build visual balance between the marketing landing page and the complex analytical app, apply these spacing tokens:

*   **Grid Base Unit:** `8px` (`0.5rem` / `space-1` or `p-1`).
*   **Card/Component Inner Padding:** `24px` to `32px` (`1.5rem` to `2rem`).
*   **Card-to-Card Gap:** `16px` to `24px` (`1rem` to `1.5rem`).
*   **Section Vertical Padding (Landing Page):** `6rem` (`96px` / `py-24`).
*   **Grid Vertical Spacing:** `3.5rem` (`56px` / `gap-14`).
*   **Card Vertical Spacing:** `2.5rem` (`40px` / `gap-10`).

### B. Responsive Container Constraint
All page layouts must wrap content in a max-width container to prevent layout degradation on wide monitors:
```html
<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content goes here */}
</div>
```
*   `max-w-7xl` aligns the layout precisely to `1280px`.
*   Horizontal paddings scale responsively: `px-4` (mobile) ➔ `px-6` (tablet) ➔ `px-8` (desktop).

---

## 2. Elevation, Borders & Rounded Shapes

### A. Rounded Corners (Shape System)
Nezam AI uses soft, modern rounded corners to make dense text data feel approachable:
*   **Cards, Modals, & Large Containers:** `rounded-xl` (`12px` / `0.75rem` / `var(--radius) + 4px`).
*   **Standard Input Fields & Buttons:** `rounded-lg` (`8px` / `0.5rem` / `var(--radius)`).
*   **Subtle Inner Tags & Small Controls:** `rounded-md` (`6px` / `0.375rem`).
*   **Status Badges, Progress Bars & Avatar Tracks:** `rounded-full` (`9999px`) to create clean pill shapes.

### B. Surface Depth & Shadows
Do not use harsh, thick dark shadows. Use subtle elevation transitions:
*   **Standard Cards:** Thin, light-gray borders (`border border-border`) with a very soft shadow (`shadow-sm`).
*   **Interactive Cards (On Hover):** Seamlessly transition borders and lift slightly to enhance depth:
    ```css
    .focused-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .focused-card:hover {
      border-color: hsl(var(--border) / 0.8);
      box-shadow: var(--shadow-md);
    }
    ```

---

## 3. Micro-Animations & Keyframe Extensions

Animations must be deliberate, smooth, and used to guide attention rather than distract.

### A. CSS & Tailwind Keyframe Definitions
Include these keyframes in both projects' `tailwind.config` to provide a matching motion toolkit:

```javascript
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
  'fade-out': {
    '0%': { opacity: '1', transform: 'translateY(0)' },
    '100%': { opacity: '0', transform: 'translateY(10px)' }
  },
  'bounce-subtle': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-3px)' }
  },
  'pulse-subtle': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.8' }
  },
  'slide-in-up': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  },
  'scale-in': {
    '0%': { transform: 'scale(0.95)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' }
  },
  'rotate-360': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
}
```

### B. Standard Animation Classes
*   **Page Entrance Triggers:** Apply `animate-fade-in` or `animate-slide-in-up` with a duration of `0.4s` or `0.5s` for a smooth initial viewport load.
*   **Loading Fills & AI Analysis States:** Apply `animate-pulse-subtle` or `animate-rotate-360` (for spinners) to indicate active background processing.

---

## 4. Interactive States & Tactile Feedback

Any clickable element must provide instant physical and visual confirmation of a user's action:

### A. The Press Effect
Apply a swift, physical scale reduction when buttons or interactive cards are clicked or tapped:
*   **CSS Class:** `.press-effect`
*   **Declaration:**
    ```css
    .press-effect {
      transition: transform 0.15s cubic-bezier(0.2, 0, 0.2, 1);
    }
    .press-effect:active {
      transform: scale(0.97);
    }
    ```
*   **Tailwind Equivalent:** `transition-all duration-150 active:scale-[0.98]`

### B. Hover States
*   **Buttons:** Standard buttons should slightly shift background brightness (`hover:bg-primary/90`) and transition seamlessly (`transition-colors duration-200`).
*   **Link Navigation:** Text links should animate their color toward `--primary` or reveal a bottom line via border transition.
*   **Focus Ring Indicators:** Focus states should never be hidden. Use a consistent focus ring matching the brand:
    ```css
    :focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary) / 0.4);
    }
    ```

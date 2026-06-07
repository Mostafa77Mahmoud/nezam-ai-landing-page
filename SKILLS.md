# Nezam AI Developer Skill Matrix

This document defines the highly specialized technical skills, code patterns, and engineering competencies required to successfully build and maintain the Nezam AI multi-project workspace.

---

## 1. Dynamic HSL Styling & Color Math

Developers must demonstrate absolute mastery over Tailwind's HSL variable system instead of relying on hardcoded HEX color tags.

### A. Core Pattern (HSL Var Injection)
When adding custom opacity variants or dynamic visual fills, read values from the CSS `:root` registers:
```tsx
// Correct dynamic accent fill applying transparency
<div className="bg-primary/20 text-primary border border-primary/30">
  Corporate Alert Banner
</div>
```
*Tailwind dynamically processes the above class using `hsl(var(--primary) / 0.2)`.*

### B. Standard Theme Accent Variables
*   `--primary`: The primary corporate color token (`195 85% 25%` or `195 75% 45%`).
*   `--border`: Thin, decorative boundary borders (`214.3 31.8% 91.4%` / `195 20% 18%`).
*   `--card`: Panel background surface blocks (`0 0% 100%` / `195 20% 12%`).

---

## 2. Bilingual Directional Layouts (RTL/LTR Engineering)

Rendering Arabic and English side-by-side without visual breakages requires advanced knowledge of CSS bi-directional text algorithms:

### A. RTL Isolation
Always wrap inline LTR text blocks (such as currency numbers, date stamps, and technical AAOIFI references) in the `.ltr-in-rtl` class when they occur inside RTL copy:
```tsx
// Correct isolation of LTR terms
<p className="text-sm text-muted-foreground leading-relaxed">
  <Bilingual 
    ar={<span>راجع المعيار الشرعي رقم <span className="ltr-in-rtl">№ 21</span> الصادر عن الهيئة.</span>}
    en={<span>Please review Sharia standard <span className="ltr-in-rtl">№ 21</span> issued by AAOIFI.</span>}
  />
</p>
```

### B. CSS Rules for `.ltr-in-rtl`
```css
.ltr-in-rtl {
  direction: ltr;
  unicode-bidi: embed;
  display: inline-block;
}
```
*   `unicode-bidi: embed` isolates LTR directionality from surrounding RTL text engines.
*   `display: inline-block` prevents the browser from placing leading numbers on the wrong side.

---

## 3. Cairo Typography Rendering (Diacritic Safety)

Arabic typography requires specific font diacritic (Tashkeel) rendering care:

*   **Rule 1 (Line Heights):** Cairo body text must utilize a minimum line height of `1.6` (`leading-relaxed`) to prevent descending vowels (Kasra) and ascending accents (Damma/Fatha) from overlapping or clipping.
*   **Rule 2 (RTL Digits):** To preserve readable numerical layouts inside Arabic tables, configure:
    ```css
    [dir="rtl"] {
      font-feature-settings: "tnum", "lnum";
    }
    ```
    This forces proportional, tabular lining figures for numerical tables in both languages.

---

## 4. Multi-Project Localization & Key Extraction

When expanding the application and adding new terms:

### A. Extracting Copy to Static Dictionaries
For the Dashboard, never hardcode strings in UI components. Proactively add them as key-value items in `LanguageContext.tsx`:
```typescript
// Define key in src/contexts/LanguageContext.tsx
en: {
  'error.sessionExpired': "Your compliance analysis session has expired."
},
ar: {
  'error.sessionExpired': "انتهت صلاحية جلسة تحليل التوافق الشرعي الخاص بك."
}
```

### B. Dynamic Copier (Landing Page Standard)
For the Landing Page, when using direct inline translations, ensure parameters match exactly:
```jsx
<Bilingual 
  ar="تحديد فوري وآلي للمخاطر" 
  en="Instant, automated risk identification" 
/>
```

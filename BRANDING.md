# Nezam AI Brand Identity System

This document specifies the official brand identity, visual rules, and styling variables for the Nezam AI ecosystem across all product surfaces:
- **Corporate Branding / Public Web:** Nezam AI Landing Page
- **Product Dashboard / Expert Tools:** Nezam AI Shariah Compliance Workspace

---

## 1. Hybrid Branding Architecture

To build a professional, cohesive legal-tech brand while preserving the functional credibility of the Shariah auditing interface, Nezam AI employs a **hybrid brand palette**:

1. **Corporate Core Brand (Teal/Blue):** Renders the global layout, primary navigation anchors, corporate buttons, marketing banners, and core public-facing assets.
2. **Semantic / Operational Brand (Shariah Green):** Reserved exclusively inside the dashboard application to visually represent Shariah compliance states, audit validation indicators, trust badges, and risk analysis metrics.

```
                  ┌────────────────────────────────────────┐
                  │          NEZAM AI BRAND IDENTITY       │
                  └───────────────────┬────────────────────┘
                                      │
             ┌────────────────────────┴────────────────────────┐
             ▼                                                 ▼
┌──────────────────────────┐                      ┌──────────────────────────┐
│   CORPORATE BRANDING     │                      │    SEMANTIC AUDITING     │
│   - Teal/Blue Palette    │                      │    - Shariah Green       │
│   - Marketing & Landing  │                      │    - Risk Statuses       │
│   - Global Navigation    │                      │    - Approved/Trust      │
└──────────────────────────┘                      └──────────────────────────┘
```

---

## 2. Color Tokens & HSL Definitions

### A. Corporate Brand (Teal/Blue)
Used for core headers, brand borders, primary CTAs (where unrelated to Shariah audit status), and global marketing components.

| Theme State | Variable | HSL Value | Hex Equivalent | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Light Mode** | `--primary` | `195 85% 25%` | `#0A5475` | Deep ocean blue/teal representing legal authority and trust. |
| **Dark Mode** | `--primary` | `195 75% 45%` | `#1D9AC5` | Glowing electric cyan/teal representing modern AI innovation. |
| **Light Mode** | `--primary-foreground` | `0 0% 98%` | `#FAFADA` | Off-white text on primary backgrounds. |
| **Dark Mode** | `--primary-foreground` | `195 25% 8%` | `#0B1A20` | Deep blue-black text on dark primary backgrounds. |

### B. Shariah Semantic Brand (Dashboard Compliance)
Reserved inside the dashboard components to signify audit compliance status, risks, and expert feedback actions.

> [!WARNING]
> Do NOT weaken or replace the Shariah Green identity in dashboard compliance cards, progress bars, or terms listing. It is a critical trust signal for Shariah compliance auditors.

| Status State | Tailwind Class | Hex Value | RGB / HSL Equivalent | Compliance Application |
| :--- | :--- | :--- | :--- | :--- |
| **Compliant / Safe** | `bg-shariah-green` | `#22C55E` | `rgb(34, 197, 94)` | No Shariah risks found. Verified term state. |
| **Compliant BG** | `bg-shariah-light-green` | `#F2FCE2` | `rgb(242, 252, 226)` | Pill container background for verified terms. |
| **Warning / Review** | `bg-shariah-orange` | `#F97316` | `rgb(249, 115, 22)` | Partial compliance, needs expert clarification. |
| **Non-Compliant** | `bg-shariah-red` | `#EA384C` | `rgb(234, 56, 76)` | Potential Shariah risk / forbidden clause found. |
| **Neutral / Muted** | `bg-shariah-gray` | `#8E9196` | `rgb(142, 145, 150)` | Unanalyzed terms, borders, and general body texts. |

---

## 3. Logo Guidelines

Nezam AI utilizes a unified **high-fidelity 8-pointed star geometric logo system**. The legacy simple rounded-square logo is deprecated.

```
       /\       
  /\  /  \  /\  
 /  \/    \/  \ 
|   |  N   |   |  <-- 8-pointed star border composed of two 
 \  /\    /\  /       concentric rotated squares enclosing the letter "N".
  \/  \  /  \/  
       \/       
```

### A. Logo Assets Summary
*   **Icon Geometry:** Composed of two intersecting concentric squares rotated by 45 degrees, creating an Islamic/Shariah geometric 8-pointed star boundary enclosing a structured, centered capital **"N"** glyph.
*   **Logotype:** Rendered in bold **Cairo** or high-quality system-ui sans-serif with slight negative tracking (`letter-spacing: -0.5px`), spelling **Nezam AI**.

### B. SVG Standard Configurations
*   **logo-light.svg (Light Background Surfaces):**
    *   Star Border & "N" Fill: Forest Green / Dark Teal (`#14532D`) representing growth, compliance, and structural foundation.
    *   Logotype Text: Deep Slate Slate (`#0F172A`).
*   **logo-dark.svg (Dark/Glass Background Surfaces):**
    *   Star Border & "N" Fill: Mint Green / Neon Cyan (`#4ADE80`) to ensure high contrast and premium glow.
    *   Logotype Text: Crisp Snow White (`#F8FAFC`).

---

## 4. Typography & Font System

Both projects must integrate **Cairo** as the primary font family to deliver premium, highly legible English and Arabic typography.

### A. Font Inclusion & Integration
In CSS / HTML headers, Cairo must be imported via Google Fonts with weights spanning `400, 500, 600, 700, 800`:

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

body {
  font-family: "Cairo", system-ui, -apple-system, sans-serif;
}
```

### B. Structural Hierarchy (Cairo Tokens)
To maintain consistent line heights across bilingual (Arabic-English) documents, apply the following Cairo-specific rules:

*   **Display Titles (hero, main headings):** Cairo bold (`font-weight: 700`), generous vertical margins, line-height 1.2.
*   **Section/Card Headers:** Cairo semi-bold (`font-weight: 600`), line-height 1.35.
*   **Body Content (legal terms, analysis text):** Cairo regular (`font-weight: 400`), line-height 1.6 to 1.7 to prevent overlapping diacritics (Tashkeel) in Arabic words.

---

## 5. Bilingual Layout Direction (RTL/LTR)

*   **HTML Structure:** Keep dynamic direction tracking on the parent element. For Arabic, set `dir="rtl"` and `lang="ar"`. For English, set `dir="ltr"` and `lang="en"`.
*   **Embedded LTR Isolates:** When rendering English terms or standard codes (e.g., numbers, file names, AAOIFI standard numbers) inside Arabic text block containers, wrap them in:
    ```html
    <span class="ltr-in-rtl">AAOIFI standard № 21</span>
    ```
    Where `.ltr-in-rtl` applies `direction: ltr; unicode-bidi: embed; display: inline-block;`.

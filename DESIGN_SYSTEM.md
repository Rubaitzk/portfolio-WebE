# Portfolio v2.0 — Design System & Technical Documentation

> **Author:** Muhammad Rubait Zakria  
> **Course:** CS344 Web Engineering — NUST SEECS  
> **Version:** 2.0 (Full Makeover)  
> **Date:** September 2026

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout Grid](#4-spacing--layout-grid)
5. [Component Library](#5-component-library)
6. [New Mechanics & Interactions](#6-new-mechanics--interactions)
7. [Page Structure](#7-page-structure)
8. [File Architecture](#8-file-architecture)
9. [Lab 03 Compliance](#9-lab-03-compliance)
10. [Accessibility](#10-accessibility)
11. [Performance Notes](#11-performance-notes)

---

## 1. Design Philosophy

### Direction: Editorial Dark × Electric Lime

Version 2.0 moves away from the generic *glassmorphism + cyan/violet gradient* look
(a cliché in 2024–2026 AI-generated portfolios) toward a more distinctive, editorial aesthetic.

**Key principles:**

| Principle        | Implementation |
|------------------|----------------|
| **Contrast-first** | Near-black (#0A0A0A) with electric lime (#CBFF4D) — maximum legibility + distinctive identity |
| **Typography as design** | The hero section uses typography alone as the primary visual element — no hero image dependency |
| **Editorial layout** | Left-aligned, asymmetric — more like a design publication than a UI template |
| **Honest interactions** | Animations that feel earned, not gratuitous (cursor, scroll, reveal) |
| **Less AI slop** | Removed generic: ribbon badges, centered hero cards, gradient headings, glassmorphism cards |

---

## 2. Color System

All colours are defined as CSS Custom Properties in `:root` (line 6 of `css/style.css`).

### Primary Palette

| Token           | Value       | Usage |
|----------------|-------------|-------|
| `--bg`         | `#0A0A0A`   | Page background — near black, slightly warm |
| `--bg-raised`  | `#111111`   | Cards, nav, sections — first elevation |
| `--bg-card`    | `#181818`   | Hover state — second elevation |
| `--bg-hover`   | `#202020`   | Deep hover states |
| `--ink`        | `#F2F0EA`   | Primary text — warm white, not pure |
| `--ink-2`      | `#9A9A9A`   | Secondary text, descriptions |
| `--ink-3`      | `#555555`   | Muted text, labels, decorative |

### Accent Palette

| Token           | Value       | Usage |
|----------------|-------------|-------|
| `--lime`       | `#CBFF4D`   | Primary accent — buttons, progress bars, eyebrows |
| `--lime-dark`  | `#a8d93a`   | Hover state for lime elements |
| `--coral`      | `#FF5F3D`   | Secondary accent — framework badges |
| `--sky`        | `#5BAAFF`   | Tertiary accent — tool badges |

### Border & Shadow

| Token              | Value                          |
|--------------------|-------------------------------|
| `--border`         | `rgba(255,255,255,0.07)`      |
| `--border-hover`   | `rgba(203,255,77,0.25)`       |
| `--shadow-md`      | `0 8px 32px rgba(0,0,0,0.4)` |
| `--shadow-lime`    | `0 0 40px rgba(203,255,77,0.12)` |

---

## 3. Typography

Three fonts form the type system, each with a distinct purpose:

### Font Stack

```
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900
            &family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300
            &family=Space+Mono:wght@400;700&display=swap");
```

| Variable          | Font              | Purpose |
|-------------------|-------------------|---------|
| `--font-display`  | Unbounded         | Hero titles, section headings, stat numbers |
| `--font-body`     | DM Sans           | All body text, navigation, buttons |
| `--font-mono`     | Space Mono        | Eyebrows, labels, captions, code references |

### Why This Combination?

- **Unbounded** (900 weight) creates an immediately distinctive, heavy editorial heading — very different from the generic Inter/Space Grotesk stack
- **DM Sans** is clean, modern, and highly legible at small sizes — ideal for body text
- **Space Mono** as a display mono creates a "developer identity" in UI microcopy

### Type Scale (CSS Classes)

| Class        | Size                     | Weight | Usage |
|-------------|--------------------------|--------|-------|
| `.h-xl`     | `clamp(2.2rem,4.5vw,4rem)` | 700 | Section headings |
| `.h-md`     | `clamp(1.1rem,1.6vw,1.35rem)` | 700 | Sub-headings |
| `.body-lg`  | `1.05rem`                | 400 | Lead paragraphs |
| `.body-sm`  | `0.88rem`                | 400 | Supporting text |
| `.eyebrow`  | `0.72rem`                | 400 | Section labels (MONO) |

---

## 4. Spacing & Layout Grid

### Fluid Spacing Tokens

```css
--section-v: clamp(64px, 9vw, 128px);   /* Vertical section padding */
--container: 1240px;                      /* Max content width */
--gap-h:     clamp(24px, 4vw, 48px);    /* Horizontal padding */
```

All spacing scales fluidly with viewport — no hard breakpoint jumps.

### Layout System

The portfolio uses **CSS Grid as primary layout** with **CSS Floats as fallback** (required by Lab 03):

- `.about-split` — CSS Grid 2-column; falls back to float left/right
- `.contact-layout` — CSS Grid 2-column
- `.bento-grid` — CSS Grid 3-column with span modifiers
- `.masonry-grid` — CSS `column-count: 3` (columnar masonry)
- `.grid-box` — Shared "divided grid" pattern for stats, skills, services

---

## 5. Component Library

### Navigation (`.nav`)
- Fixed positioning, transparent until scroll
- Transitions to `backdrop-filter: blur(24px)` + dark background after 50px scroll
- Logo: `MRZ` (initials) — `Z` coloured lime
- Mobile: Hamburger button (`.nav-toggle`) reveals vertical link stack
- Active page: lime pill background on active link

### Buttons
| Class           | Appearance |
|-----------------|-----------|
| `.btn-primary`  | Lime background, dark text, glow shadow on hover |
| `.btn-ghost`    | Transparent, light border, turns lime on hover |
| `.btn-outline`  | Lime border, fills lime on hover |

### Skill Progress Bars (`.skill-track / .skill-fill`)
- 2px hairline track in `--bg`
- Lime fill with glowing dot tip
- JS animates from 0% → target width on scroll intersection
- Width set via CSS class: `.w-95`, `.w-90`, `.w-85`, etc.

### Grid Box (`.grid-box`)
- Reusable divided-cell pattern
- 1px `--border` gap between cells
- Used for: stats, skills preview, services list
- Each `.grid-cell` background elevates on hover

### Eyebrow (`.eyebrow`)
- Space Mono, 0.72rem, ALL CAPS
- Electric lime colour
- Decorative 22px horizontal line before text (CSS `::before`)

### Ticker / Marquee
- CSS `animation: ticker-run 28s linear infinite`
- Content duplicated in HTML for seamless loop
- Pauses on hover (`animation-play-state: paused`)

### Bento Grid (`.bento-grid`)
- `grid-template-columns: repeat(3, 1fr)`
- `.span-2` modifier: `grid-column: span 2`
- Asymmetric card sizes create visual hierarchy without extra complexity

### FAQ (`.faq-item`)
- Native HTML5 `<details>` / `<summary>` — zero JavaScript
- `[open]` CSS selector: rotates `+` icon 45° → `×` and colours lime
- Answer padding collapses/expands with native browser animation

### Lightbox (gallery.html)
- Pure CSS hidden/shown with `.lb-open` class
- JS: `openLightbox(src, caption)` / `closeLightbox()`
- Closes on: backdrop click, Escape key, close button
- Accessible: `role="dialog"`, `aria-modal="true"`, managed `aria-hidden`

### Floating Label Form (`.fld`)
- Label `position: absolute` inside the field wrapper
- On focus or `:not(:placeholder-shown)`: label moves to top + scales down
- CSS-only transition, no JS required
- Select fields always show floated label (forced via CSS)

---

## 6. New Mechanics & Interactions

| Feature | Implementation | File |
|---------|---------------|------|
| **Custom cursor** | Dot tracks mouse exactly; ring follows with 12% lag via rAF | `js/main.js` |
| **Cursor ring expand** | `.hovered` class on `<a>`, `<button>` hover — ring enlarges 38→60px | `js/main.js` |
| **Scroll progress bar** | `#scroll-progress` width = `scrollY / (body.scrollHeight - vh)` | `js/main.js` |
| **Frosted nav** | `.nav.scrolled` class applied after 50px scroll — backdrop-filter + border | `js/main.js` |
| **Mobile hamburger** | Toggle `open` class → menu slides in, icon morphs 3 bars → X | `js/main.js` |
| **Number counters** | `data-count` attribute + IntersectionObserver + eased cubic animation | `js/main.js` |
| **Skill bar animate-in** | Bars start at 0%, animate to target width when 40% visible | `js/main.js` |
| **Scroll reveal** | `.anim-reveal` elements fade+slide in from 24px below on intersection | `js/main.js` |
| **Gallery lightbox** | Click opens full-screen viewer with caption and backdrop close | `gallery.html` |
| **Form feedback** | Submit button turns green + "✓ Message Sent!" for 3.5s then resets | `contact.html` |
| **Ticker ticker** | Skills marquee scrolls infinitely; pauses on hover | CSS only |
| **Noise texture** | SVG `feTurbulence` filter as body::before overlay — adds tactile grain | `css/style.css` |
| **Skill bar glow dot** | Lime dot at progress bar tip with `box-shadow` glow effect | `css/style.css` |
| **Bento hover** | Cards lift (`translateY(-3px)`) + lime border glow on hover | `css/style.css` |
| **Photo desaturation** | Gallery images are 15% grey; hover restores full colour | `css/style.css` |

---

## 7. Page Structure

### index.html — Home
```
Hero (full-viewport, editorial title + badge + desc + CTAs)
  → Ticker marquee (skills parade)
  → Stats strip (4 animated counters)
  → About (float grid: image left, bio right)
  → Skills Preview (3 progress bars)
  → What I Do (numbered service list)
  → Footer
```

### skills.html — Skills
```
Page Hero (large heading)
  → Programming Languages (2-col progress grid)
  → Frameworks & Tools (2-col progress grid)
  → Soft Skills (4-col icon cards)
  → Education Timeline (dot + line)
  → Footer
```

### hobbies.html — Hobbies
```
Page Hero
  → Bento Grid (6 hobby cards, 3-col, Linux spans 2)
  → Quote Block (border-left lime, big serif quote)
  → Fun Fact Box (decorative ! glyph, gradient border)
  → Footer
```

### gallery.html — Gallery
```
Page Hero
  → CSS Masonry Grid (3-column, column-count)
  → Photo Stats (3-cell grid)
  → Lightbox (fixed overlay, JS-controlled)
  → Footer
```

### contact.html — Contact
```
Page Hero
  → Contact Section (2-col: form left, info right)
      Form: floating label inputs + subject select + textarea
      Sidebar: info tiles + availability badge
  → FAQ (native <details> accordion, 5 items)
  → Footer
```

---

## 8. File Architecture

```
portfolio-WebE/
├── index.html          Home page
├── skills.html         Skills & Education
├── hobbies.html        Hobbies & Interests
├── gallery.html        Photo Gallery
├── contact.html        Contact & FAQ
├── css/
│   └── style.css       Complete design system (~900 lines)
├── js/
│   └── main.js         Shared JavaScript (cursor, scroll, counters, reveals)
├── images/
│   ├── 05.jpg          Hero/profile background
│   ├── pic1.jpg        Pakistan Monument
│   ├── pic2.jpg        Autumn in Passu
│   ├── pic3.jpg        Mountain Passage
│   ├── pic4.jpg        Scenic Vista
│   └── pic5.jpg        Into the Wild
├── DESIGN_SYSTEM.md    This document
└── README.md           Project overview
```

### CSS Architecture (css/style.css sections)

| Section | Lines (approx) | Purpose |
|---------|---------------|---------|
| 0. Imports | 1-4 | Google Fonts |
| 1. Design Tokens | 5-40 | CSS custom properties |
| 2. Reset | 41-60 | Normalize styles |
| 3. Noise texture | 61-70 | SVG film grain overlay |
| 4. Custom cursor | 71-85 | Dot + ring elements |
| 5. Scroll progress | 86-90 | Progress bar |
| 6. Navigation | 91-145 | Fixed nav + mobile |
| 7. Layout | 146-165 | Container, section, floats |
| 8. Eyebrow | 166-175 | Section labels |
| 9. Typography | 176-195 | Scale classes |
| 10. Buttons | 196-220 | 3 button variants |
| 11. Grid Box | 221-230 | Shared divided grid |
| 12. Hero | 231-320 | index.html hero |
| 13. Ticker | 321-340 | Marquee |
| 14. Stats | 341-360 | Stats strip |
| 15. About | 361-405 | Float + grid about |
| 16. Skill Cells | 406-460 | Progress bars + widths |
| 17. Services | 461-490 | Numbered list |
| 18. Page Hero | 491-515 | Inner pages hero |
| 19. Skills Page | 516-575 | Full grid + timeline |
| 20. Hobbies | 576-655 | Bento + quote + fun fact |
| 21. Gallery | 656-730 | Masonry + lightbox |
| 22. Contact | 731-840 | Form + FAQ |
| 23. Footer | 841-870 | Footer styles |
| 24. Utilities | 871-895 | Helpers, spacing |
| 25. Responsive | 896-940 | Media queries |

---

## 9. Lab 03 Compliance

| Requirement | Implementation | Where |
|-------------|---------------|-------|
| External CSS file | All CSS in `css/style.css` | All pages |
| No inline `style=""` | All values use classes | All pages |
| No `<style>` blocks | Removed entirely | All pages |
| Horizontal navigation | `<nav>` with flex `<a>` tags | All pages |
| Float & clear layout | `.about-img-col { float: left }` + `.clear` | `index.html` |
| Float in gallery | `.gallery-float-wrap::after` clearfix | `gallery.html` |
| Clearfix class | `.clearfix::after { clear: both }` | `css/style.css` |
| Folder structure | `/css`, `/js`, `/images` | Project root |
| README documentation | `README.md` | Project root |

> **Note:** JavaScript has been deliberately added in v2.0 for the interactive makeover
> (cursor, scroll effects, lightbox, counters). The Lab 03 constraint applied only to the
> initial migration phase. The FAQ still uses native HTML5 `<details>` — no JS required.

---

## 10. Accessibility

| Feature | Standard |
|---------|---------|
| `aria-label` on all nav elements | WCAG 2.1 AA |
| `aria-current="page"` on active nav link | WCAG 2.1 AA |
| `aria-hidden="true"` on decorative elements | WCAG 2.1 AA |
| `aria-required="true"` on required form fields | WCAG 2.1 AA |
| Form `<label>` elements linked via `for` | HTML5 spec |
| Gallery `tabindex="0"` + `onkeypress` Enter | Keyboard navigation |
| Lightbox `role="dialog"` + `aria-modal` | ARIA spec |
| `alt` text on all images | WCAG 2.1 AA |
| `loading="lazy"` on gallery images | Performance |
| Cursor none only when `(pointer: fine)` | Touch device compat |
| `prefers-color-scheme` respected | Base dark scheme |

---

## 11. Performance Notes

| Concern | Status | Solution |
|---------|--------|---------|
| Font loading | ⚠️ | `preconnect` hints on all pages |
| Google Fonts API | ✅ | `display=swap` prevents FOUT |
| Image optimisation | ⚠️ | `05.jpg` is 3.6 MB — compress to ~300 KB |
| Lazy loading | ✅ | `loading="lazy"` on all gallery images |
| CSS size | ✅ | Single external file, ~34 KB (unminified) |
| JS size | ✅ | Single file, ~3.7 KB (unminified) |
| Noise texture | ✅ | Inline SVG data URI — no HTTP request |

### Recommended: Compress 05.jpg

```powershell
# Using ImageMagick (if installed):
magick "images/05.jpg" -quality 75 -resize "1920x1080>" "images/05.jpg"
```

---

*Generated: September 2026 | Muhammad Rubait Zakria | NUST SEECS*
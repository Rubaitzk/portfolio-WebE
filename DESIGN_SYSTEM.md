# Portfolio — Pure HTML5 & CSS Architecture Documentation

> **Author:** Muhammad Rubait Zakria  
> **Course:** CS344 Web Engineering — NUST SEECS  
> **Branch:** `html-css-only`  
> **Standard:** Lab 03 Compliance (Strict Pure HTML5 + External CSS · Zero JavaScript)  
> **Date:** September 2026

---

## 1. Executive Summary & Design Direction

This branch implements a **clean, refined, modern, and strictly compliant Pure HTML5 + CSS personal portfolio website** designed for Lab 03 (HTML Advanced & CSS).

### Core Architecture Principles
1. **100% JavaScript-Free:** Complies strictly with Lab 03 guidelines ("Pitfalls to Avoid: Do not use JavaScript"). All interactivity—including the modal photo lightbox, dropdown styles, hover states, and FAQ accordion—is powered solely by native HTML5 semantic elements and CSS3 features.
2. **Zero Inline Styles:** 100% of styling resides in `css/style.css`. There are 0 `style="..."` attributes and 0 embedded `<style>` tags across all 5 HTML files.
3. **Refined & Balanced Aesthetic:** A modern deep slate (`#0B0F19`) and vibrant sky cyan (`#38BDF8`) theme with clean card surfaces, legible typography (**Plus Jakarta Sans** + **Inter** + **JetBrains Mono**), and balanced spacing without intrusive custom cursors or noisy overlay textures.
4. **Strict Float & Clear Compliance:** Explicitly demonstrates CSS float and clearfix mechanics for the About Me section (`index.html`) and the Photo Gallery (`gallery.html`).

---

## 2. Color System & Design Tokens

All tokens are defined in `:root` inside `css/style.css`:

| Token | Hex / Value | Purpose |
|---|---|---|
| `--bg-main` | `#0B0F19` | Main page background (Deep Slate) |
| `--bg-surface` | `#111827` | Primary card background |
| `--bg-card` | `#172033` | Secondary elevated surface |
| `--bg-card-hover` | `#1E293B` | Interactive hover surface |
| `--text-primary` | `#F8FAFC` | High-contrast headline & body text |
| `--text-secondary` | `#94A3B8` | Subtitles, labels, and descriptive body |
| `--text-muted` | `#64748B` | Subtle metadata and captions |
| `--accent-cyan` | `#38BDF8` | Primary accent (Sky Cyan) |
| `--accent-indigo` | `#818CF8` | Secondary gradient accent |
| `--accent-emerald` | `#34d399` | Success / active status indicator |
| `--border-subtle` | `rgba(255,255,255,0.08)` | Clean dividing lines |
| `--border-focus` | `rgba(56,189,248,0.5)` | Active focus states |

---

## 3. Typography Hierarchy

- **Headings & Brand:** `Plus Jakarta Sans` — Modern, geometric, balanced sans-serif.
- **Body & Paragraphs:** `Inter` — Industry standard for screen legibility and reading comfort.
- **Labels, Badges, Dates:** `JetBrains Mono` — Monospaced font for technical tags and stats.

---

## 4. Pure CSS Mechanics (Zero JS Solutions)

| Feature | Pure CSS / HTML5 Technique |
|---|---|
| **Photo Lightbox** | CSS `:target` pseudo-class with anchor tags (`<a href="#photo1">` opens `<div id="photo1" class="lightbox-modal">`, close links to `#gallery`). |
| **FAQ Accordion** | Native HTML5 `<details>` and `<summary>` elements styled with custom CSS plus icon rotations. |
| **Skill Progress Bars** | Pure CSS width classes (`.w-95`, `.w-90`, `.w-85`, etc.) with CSS transitions. |
| **Float & Clear Layout** | Multi-column float grid with `.clearfix::after` and `<div class="clear"></div>` containers. |
| **Sticky Navigation** | `position: sticky; top: 0; backdrop-filter: blur(16px);` for seamless viewport navigation. |

---

## 5. Lab 03 Compliance Checklist

| Lab 03 Requirement | Status | Verification |
|---|---|---|
| External CSS file `css/style.css` | ✅ 100% | Centralized stylesheet |
| Zero inline CSS `style=""` | ✅ 100% | 0 instances across all HTML files |
| Zero embedded `<style>` tags | ✅ 100% | 0 instances across all HTML files |
| Zero JavaScript | ✅ 100% | 0 `.js` files, 0 `<script>` tags, 0 event attributes |
| Float & Clear layout | ✅ 100% | Implemented on `index.html` and `gallery.html` |
| Horizontal Navigation | ✅ 100% | Semantic `<nav>` styled horizontally with active states |
| 5 Required Pages | ✅ 100% | `index.html`, `skills.html`, `hobbies.html`, `gallery.html`, `contact.html` |
| Semantic HTML5 tags | ✅ 100% | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>` |
| Clean folder structure | ✅ 100% | Root contains HTML pages, `css/`, `images/`, docs |
| Form inputs & labels | ✅ 100% | Fully structured `<form>` with accessible `<label for>` |
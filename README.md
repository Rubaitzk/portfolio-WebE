# Personal Portfolio Website — Lab 03: HTML Advanced & CSS

**Course:** CS344 Web Engineering  
**Department:** Department of Computing, SEECS, NUST  
**Author:** Muhammad Rubait Zakria  
**Live Site:** [GitHub Pages Live Link](https://rubaitzk.github.io/portfolio-WebE/)  
**Repository:** [GitHub Repository](https://github.com/Rubaitzk/portfolio-WebE)

---

## 📌 Project Overview
This project is an advanced multi-page personal portfolio website developed as part of **Lab 03 (HTML Advanced - Personal Portfolio II)** for CS344 Web Engineering. The project demonstrates clean folder architecture, semantic HTML5 structure, modular external CSS styling, and float/clear responsive layout design without reliance on external CSS frameworks or JavaScript.

---

## 📁 Project Directory Structure
In compliance with Lab 03 instructions, the project is structured as follows:

```
portfolio-WebE/
├── index.html            # Main landing page (Hero, About Me, Stats, Services, Featured Skills)
├── skills.html           # Technical skills, developer tools, soft skills, and academic timeline
├── hobbies.html          # Personal interests, tech reading, Linux tinkering, gaming, and fun facts
├── gallery.html          # Responsive photo gallery showcasing 5+ curated landscape photographs
├── contact.html          # Interactive contact form, contact cards, and accessible FAQ accordion
├── css/
│   └── style.css         # Centralized external stylesheet with design tokens, layout, and media queries
├── images/
│   ├── 05.jpg            # Hero & About profile photo
│   ├── pic1.jpg          # Gallery Photo 1 (Pakistan Monument)
│   ├── pic2.jpg          # Gallery Photo 2 (Passu Autumn)
│   ├── pic3.jpg          # Gallery Photo 3 (Mountain Passage)
│   ├── pic4.jpg          # Gallery Photo 4 (Scenic Vista)
│   └── pic5.jpg          # Gallery Photo 5 (Into the Wild)
└── README.md             # Documentation, folder structure, and deployment guide
```

---

## 🚀 Key Features & Implementation Details

### 1. External CSS & Design System
- All inline styles and internal `<style>` blocks have been migrated into a unified `css/style.css`.
- Employs CSS custom properties (`:root`) for color palette, dark mode background, glassmorphism blur effects, typography, and border radius.
- Consistent fonts: **Inter** for readable body text and **Space Grotesk** for modern headings.

### 2. Float & Clear Layouts
- **Image Gallery (`gallery.html`):** Built with `float: left;` and clearfix containment (`.clearfix`, `::after`, and `<div class="clear"></div>`), rendering a responsive multi-column photo grid of 5 images with hover overlay effects.
- **About Me Section (`index.html`):** Utilizes `float: left;` for the profile image card and `float: right;` for the biographical details with clear containment.
- **Horizontal Navigation:** Styled horizontally with clean pill hover states and active indicators across all pages.

### 3. Pure HTML5 & CSS (Zero JavaScript)
- Completely avoids JavaScript in accordance with the lab's **"Pitfalls to Avoid"** guidelines.
- **FAQ Accordion (`contact.html`):** Implemented using native HTML5 `<details>` and `<summary>` elements with smooth CSS toggle animation and rotation.
- **Progress Bars (`skills.html`):** Configured via pure CSS width classes (`.w-90`, `.w-85`, etc.) with smooth transition effects.

### 4. Fully Responsive
- Fluid responsive layout adapting gracefully to desktops, tablets (900px breakpoint), and mobile devices (600px breakpoint).

---

## 🌐 Deployment via GitHub Pages
1. Push the repository to GitHub:
   ```bash
   git add .
   git commit -m "Lab 03: Implement external CSS, float/clear layout, and proper directory structure"
   git push origin main
   ```
2. In GitHub, navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and directory `/ (root)`.
4. Click **Save**. The website will be live at:
   `https://<username>.github.io/<repository-name>/`

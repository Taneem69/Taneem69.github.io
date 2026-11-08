# 🗂️ Tanvir Mahtab Taneem — Portfolio

A personal portfolio website. Clean, dark, professional.

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main page (all sections live here)
├── css/
│   └── style.css       ← All styles (colours, fonts, layout)
├── js/
│   └── main.js         ← Animations, typewriter, scroll effects
├── assets/
│   └── profile pic.png ← Your profile photo
└── README.md           ← This file
```

---

## ✏️ How to Edit

### Change personal info
Open `index.html` and search for the section you want to edit:
- **Hero name/desc** → `<section id="hero">`
- **About paragraph** → `<section id="about">`
- **Work experience** → `<section id="experience">`
- **Projects** → `<section id="projects">`
- **Achievements** → `<section id="achievements">`
- **Contact links** → `<section id="contact">`

### Change colours & fonts
Open `css/style.css` and edit the `:root` block at the top:
```css
:root {
  --navy:       #080d1a;   /* background */
  --gold:       #c9a84c;   /* accent colour */
  --white:      #f0eeea;   /* text colour */
  --muted:      #8a9ab8;   /* secondary text */
  --font-display: 'Syne', sans-serif;   /* heading font */
  --font-body:    'DM Sans', sans-serif; /* body font */
}
```
That's it — changing these 6 variables rethemes the whole site instantly.

### Add a new experience entry
Copy the `.exp-card` block inside `<section id="experience">` in `index.html` and edit the role, company, dates and bullet points.

### Add a new project
Copy one `.project-card` block inside `<div class="projects-grid">` in `index.html` and fill in your details.
Links go in the `.project-links` row at the bottom of the card (use `project-btn primary` for the live demo, `project-btn` for repositories).

### Add a new skill tag
Find the right `.skill-category` block and add:
```html
<span class="skill-tag">Your Skill</span>
```
Use `skill-tag highlight` for primary skills, `skill-tag in-progress` for things you're learning.

### Change the typewriter roles
Open `js/main.js` and edit the `roles` array near the top:
```js
const roles = [
  'Software Engineering Student',
  'AI Engineer Intern',
  'Full-Stack Developer',
  'React & Next.js Developer',
  'NestJS & ASP.NET Developer',
  'AI / ML Enthusiast',
];
```

### Replace profile photo
Drop your new photo into the `assets/` folder and update the `src` in `index.html` to match its file name.
Or change the `src` in `index.html`:
```html
<img src="assets/YOUR_PHOTO.jpg" alt="Your Name" />
```

---

## 🚀 How to Run Locally

Just open `index.html` in your browser — no build step, no dependencies.

Or use VS Code Live Server extension for auto-refresh on save.

---

## 🌐 How to Deploy (Free)

### GitHub Pages
1. Push this folder to a GitHub repo
2. Go to repo Settings → Pages
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the `portfolio/` folder onto the deploy area
3. Done — live in 30 seconds

---

## 📝 Notes
- No frameworks, no build tools — pure HTML/CSS/JS
- Mobile responsive out of the box
- All animations are CSS/JS only, no external animation libraries

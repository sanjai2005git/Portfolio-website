# 👋 Sanjai A — Personal Portfolio

A clean, modern, and fully responsive personal portfolio website built with **React.js** and **plain CSS** — showcasing my journey as a software engineer, the projects I've built, the technologies I work with, and how to get in touch.

> **Live demo:** _add your deployment link here (Vercel / Netlify / GitHub Pages)_
> **Resume:** _add your resume link here_

![Made with React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ What's inside

This isn't a template I downloaded and tweaked — it's a hand-built, single-page portfolio with real attention to detail. Here's what you get:

- 🎯 **Hero section** with a live typing animation cycling through five roles (Software Engineer · AI Engineer · ML Engineer · Data Analyst · Data Scientist)
- 👤 **About me** with a quick snapshot and stat tiles
- 🎓 **Education** timeline (VIT Vellore — Integrated M.Tech Software Engineering)
- 🛠️ **Skills & technologies** organized into nine focused groups
- 🚀 **Featured projects** with descriptions, highlights, and tech tags
- 💼 **Work experience** timeline with both Novitech roles
- 📜 **Licenses & certifications** from Cisco, Swayam, and Kaggle
- 📬 **Get in touch** — a working contact form that opens the user's mail client pre-filled
- 📱 **Fully responsive** — looks great on phones, tablets, and ultrawides
- 🧭 **Sticky navbar** with scroll-spy + animated mobile hamburger
- ♿ **Accessible** — proper `aria-live`, `aria-label`, and focus states throughout

---

## 🖼️ Preview

> _Drop a screenshot of the running site here once you have it — just replace this line._
>
> `![Portfolio preview](./screenshot.png)`

---

## 🧱 Tech stack

| Layer    | Tool                                          |
| -------- | --------------------------------------------- |
| UI       | React.js 19 (functional components + hooks)   |
| Bundler  | Vite 8 (lightning-fast HMR)                   |
| Styling  | Plain CSS with design tokens (no framework)   |
| Icons    | Inline SVGs (no icon-library dependency)      |
| Content  | Plain JS data module (easy to edit)           |
| Fonts    | Inter + JetBrains Mono (system-font fallback) |

**Why plain CSS?** Because the design is small, contained, and reads as one system. Reaching for Tailwind or a CSS-in-JS library here would have added weight without payoff. Tokens live in `:root` at the top of `src/styles/global.css` — change a few variables and the whole site re-skins.

---

## 📂 Project structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx                  # Composes all sections
│   ├── main.jsx                 # React entry
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with scroll-spy
│   │   ├── Hero.jsx             # Landing + typing effect
│   │   ├── TypedText.jsx        # Typing animation component
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionTitle.jsx
│   ├── data/
│   │   └── portfolioData.js     # All content lives here
│   └── styles/
│       └── global.css           # All design tokens + styles
├── index.html
├── package.json
└── vite.config.js
```

Every section is a self-contained component. Every piece of copy lives in **`src/data/portfolioData.js`** — change a string there and the whole site updates. No more hunting through JSX.

---

## 🚀 Getting started

You'll need **Node.js 18+** and **npm**.

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open <http://localhost:5173> and you should see the site running with hot module reload.

### Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build locally
```

---

## ✏️ Make it yours

The portfolio is **content-driven**: every name, role, project, certification, and link is in one file.

Open **`src/data/portfolioData.js`** and edit:

- `profile.name`, `profile.role`, `profile.tagline`, `profile.summary`
- `profile.email`, `profile.phone`, `profile.location`
- `profile.socials` — replace the placeholder GitHub/LinkedIn URLs with yours
- `profile.resumeUrl` — point this at your hosted resume (Drive, GitHub, etc.)
- `education`, `skillGroups`, `projects`, `experience`, `certifications`

To tweak the typing animation, edit the `ROLES` array at the top of `src/components/Hero.jsx`, or pass different speeds to `<TypedText>` (e.g. `typeSpeed={120}`).

To change the look, edit the design tokens at the top of `src/styles/global.css` — colors, radii, shadows, and fonts are all defined as CSS variables.

---

## 🌐 Deploy in 60 seconds

This site is a static build, so it deploys anywhere.

- **Vercel** (recommended): import the GitHub repo on [vercel.com](https://vercel.com), keep the defaults — Vite is auto-detected. Done.
- **Netlify**: drag-and-drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo.
- **GitHub Pages**: add `base: '/<repo-name>/'` to `vite.config.js`, then `npm run build` and push `dist/` to a `gh-pages` branch.

---

## 📬 Get in touch

I'm always open to interesting internships, entry-level roles, and collaborations.

- 📧 **Email:** [sanjaiahsok05@gmail.com](mailto:sanjaiahsok05@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/&lt;your-handle&gt;](https://www.linkedin.com/)
- 🐙 **GitHub:** [github.com/&lt;your-handle&gt;](https://github.com/)

---

## 📄 License

This project is open source under the **MIT License** — feel free to fork it, learn from it, or build your own portfolio on top of it. If it helps you, a star ⭐ on the repo is a kind gesture.

---

<p align="center">
  <sub>Built with care by <a href="https://github.com/&lt;your-username&gt;">Sanjai A</a> · React + plain CSS, no UI framework, no excuses.</sub>
</p>

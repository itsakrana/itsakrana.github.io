# Ankit Rana — Portfolio

Personal portfolio site for Ankit Rana, final-year B.Sc. IT student and DevOps & Cloud Engineer Intern at DataDrone. Built with React, Vite, Tailwind CSS v4, and Framer Motion. Deployed for free on GitHub Pages via GitHub Actions.

## Stack

- **React 19 + Vite** — app shell and build tooling
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling, theme tokens defined in `src/index.css`
- **Framer Motion** — scroll reveals, staggered animation, scroll progress bar, animated timeline, project case-study modal
- **lucide-react** — icon set

No backend, no database, no CMS — this is a static site. All personal and project content lives in `src/data/`.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs to `dist/`. `npm run preview` serves that build locally to sanity-check it before deploying.

## Project structure

```
src/
  data/         # single source of truth: profile, skills, projects, timeline
  hooks/        # scroll progress, hash-based routing, focus trap, reduced motion
  lib/          # shared animation variants, scroll helper
  components/
    layout/     # navbar, footer, scroll progress bar, skip link
    ui/         # button, card, tag, section heading, glass panel
    motion/     # scroll-reveal and stagger wrappers
    project/    # project card, case-study modal, architecture diagram
    sections/   # one component per page section (Hero, About, Skills, ...)
```

To update personal info, skills, or projects, edit the files in `src/data/` — everything else reads from there.

## Deployment (GitHub Pages, zero cost)

This repo deploys automatically via `.github/workflows/deploy.yml` on every push to `main`, using GitHub's native Pages deployment (no `gh-pages` branch, no third-party hosting, no cost).

**One-time setup:**

1. Create a GitHub repository named exactly `itsakrana.github.io` (a GitHub *user site* — this makes the Vite `base: '/'` in `vite.config.js` correct).
2. Push this project to that repository's `main` branch.
3. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
4. Push (or re-run the workflow from the **Actions** tab) — once it finishes, the site is live at `https://itsakrana.github.io/`.

Every subsequent push to `main` redeploys automatically.

## Before going live

- [ ] Replace `public/resume.pdf` if the resume changes — currently the live version from the linked Google Drive file.
- [ ] Verify project GitHub links in `src/data/projects.js` are still correct.
- [ ] Run `npm run build && npm run preview` once more and click through every project case study.

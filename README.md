# Maryam Ahmadi — Personal Portfolio

Personal portfolio website of **Maryam Ahmadi** (Front-End Developer & Web Designer),
built with **React + Vite** and deployed to **GitHub Pages**.

Live site: https://maryamahmadi2006.github.io/My-Personal-Portfolio/

## Project structure

| Path | What it contains |
| --- | --- |
| `src/data/projects.js` | **All project content** — homepage cards, Work page cards, and every case-study page. |
| `src/pages/` | Page components: Home, Work, About, Education, Contact, ProjectDetail, NotFound. |
| `src/components/` | Navbar, Footer, Layout, Reveal (scroll animations), Faq, ProjectCard. |
| `src/styles/style.css` | The complete design (same styling as the original static version). |
| `public/assets/images/` | Project screenshots, portrait, and certificate images. |
| `public/Maryam_Ahmadi_CV.pdf` | The CV file linked from the navbar and About page. |
| `.github/workflows/deploy.yml` | Build + deploy workflow that publishes to GitHub Pages on every push to `main`. |

## Commands

```bash
npm install     # install dependencies
npm run dev     # local development server
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

## Editing projects

Open `src/data/projects.js`:

- Change the homepage's four featured projects in `homeProjects`.
- Change the full Work page list in `workProjects` (filters read the `category`
  field: `web`, `development`, `branding`).
- Change a case-study page in `projectDetails` (intro, project meta, website
  link, overview, and gallery images).

No JSX changes are needed to add, remove, or edit a project.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which runs
`npm run build` and publishes the `dist/` folder to GitHub Pages automatically.

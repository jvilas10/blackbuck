# BlackBuck Studios — React website starter

A responsive multi-page React implementation inspired by the public BlackBuck Studios website. It uses original layout code and CSS illustrations/placeholders rather than copying proprietary source code or assets.

## Requirements
- Node.js 20.19+ (or a compatible current LTS)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Pages
- `/` Home
- `/about` About
- `/services` What We Do
- `/case-studies` Case Studies
- `/blogs` Blogs
- `/career` Career
- `/contact` Contact

## Important customisation
1. Replace the typographic logo with the approved brand logo in `src/components/Layout.jsx`.
2. Replace the abstract CSS artwork in `src/components/Sections.jsx` and `src/styles.css` with licensed brand photography, videos and approved portfolio images.
3. Update project names and descriptions in `src/data.js`. The case-study tiles are illustrative placeholders, not verified client work.
4. The contact form currently validates and displays a local confirmation only. Connect it to your own backend, EmailJS or a form service before production.
5. Review and approve all company metrics, email addresses, social links and legal content before publishing.

## Stack
React 19, Vite 6, React Router 7, Framer Motion, Lucide React and custom responsive CSS.

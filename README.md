# Sarath Kumar — Angular Portfolio

A responsive, dark-theme personal portfolio built with Angular, TypeScript and SCSS.

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm start
```

Open http://localhost:4200

## Production build

```bash
npm run build
```

Build output is created under `dist/sarath-portfolio/browser`.

## Personalise before publishing

Search `src/app/app.html` and update:
- `YOUR_EMAIL@example.com` with your real professional email.
- GitHub and LinkedIn links with your own profile URLs.
- The first project GitHub URL with the exact repository URL, or remove the link if the repository is private/not ready.
- Employment titles, employers and dates to match your CV exactly.
- Project descriptions and statuses as projects progress.

The AI Operations Assistant and Data Analytics Workbench are labelled as planned projects. Do not present them as completed until they are built.

## Add your CV

Place your PDF in `public/assets/sarath-kumar-cv.pdf` after creating the `assets` folder, then add a CV link in the hero or contact area if you want one.

## Deploy

Push the project to GitHub, import the repository into Vercel, and use the Angular build settings:
- Build command: `npm run build`
- Output directory: `dist/sarath-portfolio/browser`

Add your custom domain in Vercel and follow the DNS records it provides.

## Notes

This starter is a frontend portfolio. It does not include a backend contact form, analytics, or a CMS. The email button uses a `mailto:` link.

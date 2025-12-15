<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://storage.googleapis.com/muslimpergi/uploads/site/logo2/2/medium_logo-kotanabi-umroh-online-terpercaya.webp" />
</div>

# Kota Nabi Ads Landing Page

This project has been refactored from React/Vite to [Astro](https://astro.build/) for better performance and static site generation (SSG).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   bun install
   ```
2. Run the development server:
   ```bash
   bun run dev
   ```

## Building and Deployment

This project is configured for deployment to **GitHub Pages**.

### Build Locally
To generate the static build in `dist/`:
```bash
bun run build
```

### Deploy
Push to the `main` branch to trigger the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.
Ensure your GitHub repository settings have Pages enabled with Source set to "GitHub Actions".

## Project Structure

- `src/pages/index.astro`: Main entry point.
- `src/layouts/Layout.astro`: HTML shell with SEO and metadata.
- `src/components/`: React and Astro components.
- `public/`: Static assets (CNAME, logos).

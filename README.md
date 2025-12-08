<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Umroh Ramadhan 2026 Landing Page

This project has been refactored from React/Vite to [Astro](https://astro.build/) for better performance and static site generation (SSG).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Building and Deployment

This project is configured for deployment to **GitHub Pages**.

### Build Locally
To generate the static build in `dist/`:
```bash
npm run build
```

### Deploy
Push to the `main` branch to trigger the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.
Ensure your GitHub repository settings have Pages enabled with Source set to "GitHub Actions".

## Project Structure

- `src/pages/index.astro`: Main entry point.
- `src/layouts/Layout.astro`: HTML shell with SEO and metadata.
- `src/components/`: React and Astro components.
- `public/`: Static assets (CNAME, logos).
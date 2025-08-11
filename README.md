# resume-web

A Vite + React project for hosting Sairudra More's resume as a GitHub Pages site.

## Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```

## Deployment

This repository is pre-configured with a GitHub Actions workflow that publishes the site to GitHub Pages on every push to the `main` branch.

1. Push this repository to GitHub.
2. In the repository settings, enable **GitHub Pages** and choose **GitHub Actions** as the source.
3. After pushing to `main`, the workflow will build and deploy the site to `https://<your-github-username>.github.io/resume-web/`.


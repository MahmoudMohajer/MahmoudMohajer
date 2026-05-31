# Portfolio Website - Development & Deployment Guide

This guide contains instructions for running this portfolio website locally and deploying it to GitHub Pages.

---

## 🚀 Local Development

To run and preview the site locally:

1. **Open your terminal** and navigate to the project directory:
   ```bash
   cd /path/to/MahmoudMohajer
   ```

2. **Start a local development server**. As per secure development practices, always bind the server to `127.0.0.1` (localhost) rather than exposing it globally on `0.0.0.0`:
   
   *Using Python 3:*
   ```bash
   python3 -m http.server 8080 --bind 127.0.0.1
   ```
   
   *Using Node.js (`http-server` package):*
   ```bash
   npx http-server -a 127.0.0.1 -p 8080
   ```

3. **View the site** by opening your web browser and navigating to:
   ```
   http://127.0.0.1:8080
   ```

---

## 🌐 Deployment to GitHub Pages

Since this is a fully static website, deploying to GitHub Pages is incredibly simple:

1. Commit all your changes to your Git repository:
   ```bash
   git add .
   git commit -m "feat: initial commit of portfolio site"
   ```
2. Create a public repository on GitHub named `MahmoudMohajer` or your username (e.g., `username.github.io` for a user page).
3. Add the remote and push your code to the `main` (or `master`) branch:
   ```bash
   git remote add origin https://github.com/MahmoudMohajer/MahmoudMohajer.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to your repository **Settings** -> **Pages**.
5. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
6. Under **Branch**, select `main` (or the branch you pushed to) and the `/ (root)` folder.
7. Click **Save**. Within a few minutes, your site will be live.

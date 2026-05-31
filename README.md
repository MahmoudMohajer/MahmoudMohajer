# Mahmoud Mohajer - Personal Website

A professional, clean, minimalist, and dark-mode default personal website designed for **Mahmoud Mohajer**, a self-taught AI engineer and researcher. 

Built from first principles: **zero frameworks, zero compilation steps, and zero external dependencies**. This design ensures instant loading times, absolute privacy (no third-party trackers), and a flawless deployment workflow on GitHub Pages.

---

## ⚡ Features
- **Clean Aesthetic**: Minimalist, technical dark-mode design with a dedicated development timeline roadmap and clean grid layouts for projects and notes.
- **Dynamic Content Injection**: Projects, notes, and milestones are rendered client-side using JavaScript, making it simple to scale or edit.
- **Fast Loading & Mobile Responsive**: Pure CSS layout that responds perfectly from mobile devices (320px) up to ultra-wide desktop monitors (using a dual sidebar-main layout on wide screens).
- **SEO & Open Graph Ready**: Configured with complete search metadata, Open Graph (OG) tags, and Twitter Card schemas for rich link previews.
- **High Security**: Integrated with a strict Content-Security-Policy (CSP) meta tag, and audit-checked against XSS patterns (no raw DOM write vulnerabilities).
- **Favicon Support**: Custom SVG favicon design with fallback `.ico` compatibility.

---

## 📁 File Structure
```
MahmoudMohajer/
├── index.html            # Main site structure, SEO headers, and sections
├── css/
│   └── style.css         # Styling system, responsive grid layout, typography
├── js/
│   └── main.js           # Client-side dynamic rendering logic and navigation
├── assets/
│   ├── favicon.svg       # Custom command-line SVG favicon
│   ├── favicon.ico       # Binary fallback favicon
│   └── social_card.png   # Custom high-quality Open Graph preview image
└── README.md             # This deployment and instructions file
```

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

### Option A: Automatic Branch Deploy (Recommended)
1. Commit all your changes to your Git repository:
   ```bash
   git add .
   git commit -m "feat: initial commit of minimalist portfolio site"
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
7. Click **Save**. Within a few minutes, your site will be live at `https://MahmoudMohajer.github.io/` (or the corresponding repo path).

---

## 🔒 Security Practices

This site has been engineered with a strong emphasis on security guidelines:
- **XSS Prevention**: `js/main.js` performs DOM construction programmatically via standard browser APIs (`document.createElement`, `textContent`, `appendChild`). It does not use unsafe sinks like `innerHTML` or `insertAdjacentHTML` to render data objects, making it resilient to content injection.
- **Content Security Policy (CSP)**: We enforce a strict CSP using a `<meta>` tag in `index.html`. It blocks inline script executions, limits resource loading to `'self'` and trusted Google Font origins, and mitigates Clickjacking using `frame-ancestors 'self'`.

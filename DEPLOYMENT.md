# GitHub Pages Deployment Guide

## 🚀 Quick Deploy Steps

### 1. Update Configuration Files

**Replace the placeholders in these files with your actual GitHub username and repository name:**

#### In `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

#### In `vite.config.ts`:
```typescript
base: '/YOUR_REPO_NAME/'
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `mahlet-portfolio`
3. Make it public (required for GitHub Pages)
4. Don't initialize with README (we'll push our existing code)

### 3. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

This command will:
- Build your project (`npm run build`)
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch and **/(root)** folder
6. Click **Save**

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 🔧 Configuration Details

### What We've Set Up

1. **gh-pages package**: Automatically deploys your built files
2. **Build script**: Compiles TypeScript/TSX to JavaScript
3. **Base path**: Ensures assets load correctly on GitHub Pages
4. **Homepage URL**: Required for proper routing

### File Structure After Build

```
dist/
├── index.html          # Main HTML file
└── assets/
    ├── index-*.css     # Compiled CSS
    └── index-*.js      # Compiled JavaScript
```

## 🐛 Troubleshooting

### Common Issues

1. **404 Errors**: Make sure the base path in `vite.config.ts` matches your repo name
2. **Assets Not Loading**: Check that the homepage URL in `package.json` is correct
3. **Build Failures**: Run `npm run build` locally to check for errors

### Update Deployment

After making changes to your code:

```bash
# Commit your changes
git add .
git commit -m "Update portfolio"
git push

# Deploy the new version
npm run deploy
```

## 📝 Notes

- GitHub Pages only serves static files (HTML, CSS, JS)
- Your `.tsx` files are compiled to `.js` during the build process
- The `dist` folder contains the deployable static files
- The `gh-pages` branch is automatically created and managed by the gh-pages package

## 🎉 Success!

Once deployed, your React TypeScript portfolio will be live on GitHub Pages! 
# Portfolio Data Configuration Guide

This guide explains how to configure your portfolio to load data from a GitHub repository.

## Overview

Your portfolio data is centralized in a JSON file that can be:
1. **Hosted on GitHub** (recommended for easy updates)
2. **Served locally** (for development)

## Step 1: Create a GitHub Repository for Portfolio Data

### Option A: New Repository (Recommended)
1. Go to [github.com](https://github.com) and create a new **public** repository
   - Name: `portfolio-data` (or any name you prefer)
   - Description: "Portfolio data for my React portfolio"
   - Make it **Public** (so your app can fetch the raw content)
   - Do NOT initialize with README (optional)

2. Clone the repository locally:
   ```bash
   git clone https://github.com/your-username/portfolio-data.git
   cd portfolio-data
   ```

3. Copy the `portfolio-data.json` file to this repository

4. Commit and push:
   ```bash
   git add portfolio-data.json
   git commit -m "Add portfolio data"
   git push origin main
   ```

### Option B: Use Your Existing Portfolio Repository
If you prefer keeping everything in one repo, you can add the JSON file there instead.

## Step 2: Get Your Raw GitHub URL

1. Go to your GitHub repository on the web
2. Click on `portfolio-data.json`
3. Click the **Raw** button
4. Copy the URL from your browser's address bar

The URL should look like:
```
https://raw.githubusercontent.com/your-username/portfolio-data/main/portfolio-data.json
```

## Step 3: Configure Your Portfolio App

### Local Setup (Development)

1. Create a `.env` file in your portfolio app root directory:
   ```bash
   cp .env.example .env
   ```

2. Add your GitHub raw URL:
   ```
   VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/your-username/portfolio-data/main/portfolio-data.json
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

### Production Setup

For production, you can either:

**Option 1: Keep using GitHub (recommended)**
- Your `.env` file should have `VITE_PORTFOLIO_DATA_URL` set to your GitHub raw URL
- Make sure the GitHub repository is **Public** so the app can fetch the data

**Option 2: Use Local Data**
- Leave `VITE_PORTFOLIO_DATA_URL` empty in your `.env`
- Copy `portfolio-data.json` to the `public/` folder
- The app will automatically fall back to fetching the local file

## Step 4: Update Portfolio Data

### If using GitHub:
1. Edit `portfolio-data.json` in your GitHub repository (web editor or locally)
2. Commit and push changes
3. Your portfolio app will automatically fetch the latest data (with page refresh)

### If using Local:
1. Edit `portfolio-data.json` in your `public/` folder
2. Restart your development server

## Step 5: Verify It Works

1. Open your portfolio app in a browser
2. Open browser DevTools (F12) → Console
3. You should see no errors related to data fetching
4. Check that all your content loads correctly

## JSON Data Structure

The `portfolio-data.json` file contains:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    "tagline": "Short tagline",
    "about": "About section text",
    "contacts": [...]
  },
  "services": [...],
  "technologies": [...],
  "experiences": [...],
  "testimonials": [...],
  "projects": [...]
}
```

## Troubleshooting

### Data not loading?

1. **Check console errors:**
   - Open DevTools (F12) → Console
   - Look for CORS or 404 errors

2. **Verify GitHub URL:**
   ```bash
   # Test the URL in your browser or terminal
   curl https://raw.githubusercontent.com/your-username/portfolio-data/main/portfolio-data.json
   ```

3. **Check .env file:**
   - Make sure `VITE_PORTFOLIO_DATA_URL` is set correctly
   - Restart the dev server after changing `.env`

4. **Repository must be Public:**
   - Go to your repo Settings → Visibility
   - Make sure it's set to "Public"

5. **CORS Issues:**
   - GitHub raw content serves with proper CORS headers
   - If you see CORS errors, check your repository is public

### To Use Local Data Fallback:

1. Copy `portfolio-data.json` to `public/` folder
2. Don't set `VITE_PORTFOLIO_DATA_URL` in `.env`
3. The app will automatically use the local file

## Environment Variables Reference

```
# .env file
VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/your-username/repo/main/portfolio-data.json
```

## Advanced: CI/CD Integration

If you want automatic updates when you push to GitHub:

1. **GitHub Actions Example** (in your portfolio repo):
   ```yaml
   name: Deploy Portfolio
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - run: npm ci
         - run: npm run build
         - run: npm run deploy
   ```

2. **Or trigger rebuilds** whenever you update your portfolio data repo

## Support for Multiple Portfolios

You can have different portfolio-data repositories:
- `portfolio-data-prod` for production
- `portfolio-data-dev` for development

Just update `VITE_PORTFOLIO_DATA_URL` in your respective `.env` files.

---

**Questions?** Check the console for detailed error messages or verify your GitHub repository is public.

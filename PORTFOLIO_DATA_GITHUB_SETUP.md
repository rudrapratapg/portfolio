# Portfolio Data from GitHub - Quick Start Guide

## Summary

Your portfolio now supports loading all data (personal info, experiences, projects, testimonials, etc.) from a JSON file hosted on GitHub. This makes it easy to update your portfolio content without redeploying your React app.

## ⚡ Quick Setup (5 minutes)

### 1. Create a GitHub Repository for Data
```bash
# Go to https://github.com/new
# Create a new PUBLIC repository named "portfolio-data"
# Don't initialize with files
```

### 2. Push the Data File
```bash
# In your portfolio-data repository
git clone https://github.com/YOUR-USERNAME/portfolio-data.git
cd portfolio-data

# Copy portfolio-data.json here (from your portfolio project)
git add portfolio-data.json
git commit -m "Add portfolio data"
git push origin main
```

### 3. Get Your GitHub Raw URL
1. Visit: `https://github.com/YOUR-USERNAME/portfolio-data`
2. Click on `portfolio-data.json`
3. Click **Raw** button
4. Copy the URL (should look like):
   ```
   https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json
   ```

### 4. Configure Your Portfolio App
```bash
# In your portfolio app root directory
cp .env.example .env

# Edit .env file and add:
VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json
```

### 5. Test It
```bash
npm run dev
# Open http://localhost:5173
# Check browser console for success messages
```

## 📁 File Structure

New files created:
```
src/
  ├── config/
  │   └── portfolioConfig.js          # Configuration for data source
  ├── context/
  │   └── PortfolioContext.jsx        # React Context for data sharing
  ├── constants/
  │   └── dataLoader.js               # Helper to transform fetched data
  └── hooks/
      └── usePortfolioData.js         # Hook to fetch data from GitHub
portfolio-data.json                    # Your portfolio data (copy to public/)
PORTFOLIO_DATA_SETUP.md               # Detailed setup guide
.env.example                          # Environment variable template
```

## 🔄 How It Works

1. **App.jsx** loads on startup and fetches `portfolio-data.json` from:
   - **First priority:** GitHub URL (from `VITE_PORTFOLIO_DATA_URL`)
   - **Second priority:** Local file (`public/portfolio-data.json`)
   - **Fallback:** Static data from `src/constants/index.js`

2. **PortfolioProvider** makes the data available to all components via React Context

3. Components can use `usePortfolioContext()` hook to access the data

## 📝 Editing Your Data

### Option A: Update via GitHub Web UI
1. Go to https://github.com/YOUR-USERNAME/portfolio-data
2. Click on `portfolio-data.json`
3. Click ✏️ (edit)
4. Make changes and commit
5. Your portfolio will fetch the new data on next page refresh

### Option B: Update via Git
```bash
cd portfolio-data
# Edit portfolio-data.json
git add portfolio-data.json
git commit -m "Update portfolio data"
git push origin main
```

### Option C: Use Local File (Development Only)
```bash
# Copy portfolio-data.json to public folder
cp portfolio-data.json public/

# In .env, leave VITE_PORTFOLIO_DATA_URL empty
# The app will use public/portfolio-data.json instead
```

## ✅ Verify It Works

Check browser console (F12 → Console):
- ✅ Should see: `"Portfolio data loaded from GitHub"` or `"Portfolio data loaded from local file"`
- ❌ Should NOT see: CORS errors or 404 errors
- ✅ All your portfolio content should display correctly

## 🐛 Troubleshooting

### Data not loading?

**Check 1: Is the GitHub repo PUBLIC?**
```bash
Settings → Visibility → Must be "Public"
```

**Check 2: Verify the URL works**
```bash
# Open this in a new tab (should show JSON)
https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json
```

**Check 3: Check your .env file**
```bash
# Must be set (or empty to use local)
VITE_PORTFOLIO_DATA_URL=https://...
```

**Check 4: Restart dev server**
```bash
npm run dev
```

**Check 5: Clear browser cache**
```bash
Ctrl+Shift+Delete → Clear Cache
```

### CORS Error?
- Make sure GitHub repo is **PUBLIC**
- GitHub raw content serves with correct CORS headers

### 404 Error?
- Check the URL in your `.env` file
- Test it directly in browser to verify it works

## 🚀 Production Deployment

### If using GitHub data:
- Keep `VITE_PORTFOLIO_DATA_URL` in your `.env` file
- Make sure portfolio-data repo is **PUBLIC**
- No additional configuration needed

### If using local data:
- Leave `VITE_PORTFOLIO_DATA_URL` empty
- Ensure `portfolio-data.json` is in `public/` folder
- Build and deploy normally

## 📋 Data Structure Reference

Your `portfolio-data.json` should have this structure:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    "tagline": "Short bio",
    "about": "Longer about text",
    "contacts": [
      {
        "title": "LinkedIn",
        "icon": "linkedin",
        "link": "https://...",
        "linkType": "url"
      }
    ]
  },
  "services": [
    {
      "title": "Service Name",
      "icon": "icon-name"
    }
  ],
  "technologies": [
    {
      "name": "Tech Name",
      "icon": "icon-name"
    }
  ],
  "experiences": [
    {
      "title": "Job Title",
      "company_name": "Company",
      "icon": "company-icon",
      "iconBg": "#color",
      "date": "Start - End",
      "points": ["Achievement 1", "Achievement 2"]
    }
  ],
  "testimonials": [
    {
      "testimonial": "Quote text",
      "name": "Person Name",
      "designation": "Role",
      "company": "Company",
      "image": "optional-image-url"
    }
  ],
  "projects": [
    {
      "name": "Project Name",
      "description": "Description",
      "tags": [
        {
          "name": "tag-name",
          "color": "color-gradient"
        }
      ],
      "image": "image-name",
      "source_code_link": "https://github.com/..."
    }
  ]
}
```

## 🎯 Next Steps

1. ✅ Create GitHub repo for portfolio-data
2. ✅ Push portfolio-data.json to GitHub
3. ✅ Add GitHub URL to .env
4. ✅ Test locally (`npm run dev`)
5. ✅ Deploy to production
6. ✅ Update data by editing JSON on GitHub

## 💡 Pro Tips

- **Multiple portfolios?** Create different `.env` files for dev/prod
- **Preview changes?** Keep a dev branch with different data URL
- **Version control?** GitHub automatically tracks changes to your JSON
- **Backup?** Your data is safely stored on GitHub

## 📞 Need Help?

- See [PORTFOLIO_DATA_SETUP.md](./PORTFOLIO_DATA_SETUP.md) for detailed guide
- Check browser console (F12) for error messages
- Verify GitHub repo is PUBLIC
- Test URL directly in browser

---

**Happy updating! Your portfolio data is now dynamic and version-controlled.** 🚀

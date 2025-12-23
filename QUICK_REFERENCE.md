# 🎯 Portfolio Data Setup - Quick Reference Card

## 🚀 5-Minute Setup

### Step 1: Create GitHub Repo
```
1. Go to github.com/new
2. Name: portfolio-data
3. Make PUBLIC
4. Create
```

### Step 2: Push Data
```bash
git clone https://github.com/YOUR-USERNAME/portfolio-data.git
cd portfolio-data
cp portfolio-data.json .
git add portfolio-data.json && git commit -m "Add data" && git push
```

### Step 3: Get Raw URL
```
1. Go to your repo on GitHub
2. Click portfolio-data.json
3. Click "Raw" button
4. Copy URL from address bar
```

### Step 4: Configure App
```bash
cp .env.example .env
# Edit .env and add:
VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json
```

### Step 5: Test
```bash
npm run dev
# Check console: "Portfolio data loaded from GitHub"
```

---

## 📋 Files Reference

| File | Purpose | Location |
|------|---------|----------|
| `portfolio-data.json` | Your content | Root / public |
| `.env` | Config | Root (git-ignored) |
| `App.jsx` | Data fetching | src/ |
| `PortfolioContext.jsx` | Data sharing | src/context/ |
| `portfolioConfig.js` | Settings | src/config/ |

---

## 🔧 Configuration

### Use GitHub (Recommended)
```
VITE_PORTFOLIO_DATA_URL=https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json
```

### Use Local File
```
VITE_PORTFOLIO_DATA_URL=
(Leave empty)
```

---

## 📝 Data Structure

```json
{
  "personalInfo": { name, title, email, about, contacts },
  "services": [{ title, icon }],
  "technologies": [{ name, icon }],
  "experiences": [{ title, company_name, date, points }],
  "testimonials": [{ testimonial, name, company }],
  "projects": [{ name, description, tags, link }]
}
```

---

## 🔄 Update Workflow

### Via GitHub (Easiest)
```
1. Edit on GitHub web
2. Commit
3. Refresh portfolio (1-2 sec)
4. See changes
```

### Via Local (Dev Only)
```
1. Edit public/portfolio-data.json
2. Save
3. npm dev auto-refreshes
4. See changes
```

---

## ✅ Verification

**Success Indicators:**
- ✅ `npm run dev` runs without errors
- ✅ Browser console shows: "Portfolio data loaded from..."
- ✅ No red error messages in console
- ✅ All content displays correctly

**Test Update:**
- ✅ Change something in JSON on GitHub
- ✅ Refresh portfolio page
- ✅ Change appears instantly

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Data not loading | Check GitHub repo is PUBLIC |
| CORS error | Use raw GitHub URL |
| 404 error | Verify raw URL works in browser |
| Changes not showing | Refresh page (Ctrl+F5) |
| Want local data | Leave VITE_PORTFOLIO_DATA_URL empty |

---

## 📚 Full Docs

- **Quick Start**: PORTFOLIO_DATA_GITHUB_SETUP.md
- **Checklist**: SETUP_CHECKLIST.md
- **Architecture**: SETUP_VISUAL_GUIDE.md
- **Detailed**: PORTFOLIO_DATA_SETUP.md
- **Summary**: IMPLEMENTATION_SUMMARY.md

---

## 🌐 Common URLs

```
GitHub Repo:
https://github.com/YOUR-USERNAME/portfolio-data

Raw Data URL:
https://raw.githubusercontent.com/YOUR-USERNAME/portfolio-data/main/portfolio-data.json

Local Dev:
http://localhost:5173
```

---

## 💾 Git Workflow

```bash
# Update your data on GitHub
cd portfolio-data
git pull origin main
# Edit portfolio-data.json
git add portfolio-data.json
git commit -m "Update [section]"
git push origin main
```

---

## 🎯 Key Concepts

**Data Priority:**
```
GitHub (if configured) 
  → Local file (fallback)
    → Static data (final fallback)
```

**Components Access Data:**
```javascript
import { usePortfolioContext } from '../context/PortfolioContext';
const { experiences, projects } = usePortfolioContext();
```

---

## ⚡ Production Checklist

- [ ] GitHub repo is PUBLIC
- [ ] Raw URL configured in .env
- [ ] Tested locally
- [ ] Built successfully
- [ ] All content displays
- [ ] No console errors
- [ ] Deployed

---

## 🆘 Help

1. Read PORTFOLIO_DATA_GITHUB_SETUP.md
2. Check SETUP_CHECKLIST.md
3. Open browser console (F12)
4. Test raw URL directly
5. Verify GitHub repo is PUBLIC

---

## 🎓 Learning Points

- React Context API
- Environment variables (.env)
- Async data fetching
- Error handling & fallbacks
- GitHub raw content URLs
- Data transformation

---

Keep this card handy for quick reference! 📌

# 🚀 Quick Start Guide - Mahuta Oil & Gas Website

## Getting Your Website Running in 5 Minutes

### Step 1: Download Your Website
All files are ready in the `mahuta-website` folder!

### Step 2: Install Node.js
If you don't have Node.js installed:
- Visit: https://nodejs.org
- Download the LTS version (18+)
- Install and verify: Open terminal and run `node --version`

### Step 3: Open Terminal
- **Windows**: Open Command Prompt or PowerShell
- **Mac/Linux**: Open Terminal
- Navigate to your website folder:
  ```bash
  cd path/to/mahuta-website
  ```

### Step 4: Install Dependencies
Run this command:
```bash
npm install
```
This will download all necessary packages (takes 1-2 minutes)

### Step 5: Start Development Server
Run this command:
```bash
npm run dev
```

Your website will automatically open in your browser at `http://localhost:3000` 🎉

---

## What You'll See

✅ **Home Page**: Hero section, services, statistics, values
✅ **About Page**: Company story, mission, vision, team
✅ **Services Page**: Detailed service offerings
✅ **Contact Page**: Contact form and information

---

## Customization Priority List

### 🔴 Critical (Do First)
1. **Replace Logo**: 
   - Current: Placeholder "M" in gold box
   - Update in: `src/components/Navbar.tsx` and `src/components/Footer.tsx`

2. **Update Images**:
   - Current: Unsplash placeholder images
   - Update in: `src/data/constants.ts` and page components
   - Recommended sizes:
     - Hero images: 1920x1080px
     - Service images: 800x450px
     - Team photos: 600x600px

3. **Verify Contact Info**:
   - Update in: `src/data/constants.ts`
   - Current has placeholder address/phone/email

### 🟡 Important (Do Next)
4. **Review Content**:
   - All content is in: `src/data/constants.ts`
   - Update company story, services, values as needed

5. **Adjust Colors** (if needed):
   - Current: Grey and gold as requested
   - Modify in: `tailwind.config.js`

6. **Test on Mobile**:
   - Open site on your phone
   - Check that everything looks good

### 🟢 Optional (When Ready)
7. **Add Analytics**: Google Analytics or similar
8. **SEO Optimization**: Meta tags, descriptions
9. **Form Backend**: Connect contact form to email/database
10. **Deploy**: Put your site live!

---

## File Structure (What's Where)

```
mahuta-website/
│
├── src/
│   ├── components/        ← Reusable UI pieces (Navbar, Footer, etc.)
│   ├── pages/            ← Your main pages (Home, About, Services, Contact)
│   ├── data/             ← 📝 ALL YOUR CONTENT IS HERE!
│   ├── types/            ← TypeScript definitions
│   └── index.css         ← Global styles
│
├── public/               ← Put your images/logo here
├── README.md            ← Technical documentation
├── DESIGN_GUIDE.md      ← Design decisions & customization
└── package.json         ← Project configuration
```

---

## Key Files to Edit

### 1. Content (Most Important!)
**File**: `src/data/constants.ts`
- Company name and tagline
- All services
- Core values
- Statistics
- Contact information

### 2. Pages
- `src/pages/Home.tsx` - Home page layout
- `src/pages/About.tsx` - About page layout
- `src/pages/Services.tsx` - Services page layout
- `src/pages/Contact.tsx` - Contact page layout

### 3. Components
- `src/components/Navbar.tsx` - Top navigation (update logo here!)
- `src/components/Footer.tsx` - Footer (update logo here too!)

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install a new package
npm install package-name
```

---

## Tips & Tricks

### 💡 Hot Reload
When you save files, the website automatically updates in your browser. No need to refresh!

### 💡 TypeScript Errors
TypeScript checks your code for mistakes. If you see red squiggly lines in your editor, it's trying to help!

### 💡 Tailwind CSS
Styling uses Tailwind utility classes. Example:
- `text-gold` = gold colored text
- `bg-slate-900` = dark slate background
- `py-4` = padding top and bottom

### 💡 Images
Two ways to add images:
1. **External**: Use full URLs (like Unsplash links currently used)
2. **Local**: Put in `/public` folder and reference like `/image.jpg`

---

## Need Help?

### Styling Questions
→ Check `DESIGN_GUIDE.md` - Comprehensive design documentation

### Technical Questions
→ Check `README.md` - Full technical documentation

### Still Stuck?
- Google the error message
- Check documentation for React, TypeScript, or Tailwind
- Ask a developer friend

---

## Deployment (When Ready)

### Easiest Options:

**Vercel** (Recommended)
1. Push code to GitHub
2. Import on vercel.com
3. Deploy! (Free for personal/small projects)

**Netlify**
1. Drag & drop `dist` folder (after running `npm run build`)
2. Your site is live!

**Other Options**: AWS, Digital Ocean, Cloudflare Pages

---

## What Makes This Website Special?

✨ **Professional Design**: Corporate luxury aesthetic with gold accents
✨ **Fully Responsive**: Looks great on phone, tablet, desktop
✨ **Smooth Animations**: Framer Motion for polished interactions
✨ **Type-Safe**: TypeScript prevents bugs
✨ **Fast**: Built with Vite, optimized for performance
✨ **Maintainable**: Clean code structure, easy to update

---

## Your First Tasks

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] View your website in browser
- [ ] Replace placeholder logo
- [ ] Update contact information
- [ ] Review and adjust content
- [ ] Replace images with company photos
- [ ] Test on mobile device

---

## Questions?

Remember:
- **Content**: `src/data/constants.ts`
- **Logo**: `src/components/Navbar.tsx` + `Footer.tsx`
- **Images**: `src/data/constants.ts` or directly in page components
- **Colors**: `tailwind.config.js`

**You've got this! 🎯**

---

Made with ⚡ for Mahuta Oil & Gas Ltd

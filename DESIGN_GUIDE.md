# Mahuta Oil & Gas Website - Design Guide

## Design Philosophy

This website embodies **Industrial Luxury** - a sophisticated blend of corporate professionalism and refined elegance that reflects Mahuta's position as a trusted leader in Nigeria's oil & gas sector.

### Design Principles

1. **Professional Authority**: Bold typography and structured layouts convey competence and reliability
2. **Refined Elegance**: Gold accents and premium fonts add sophistication without ostentation
3. **Technical Precision**: Clean lines and organized content reflect engineering excellence
4. **Visual Impact**: Strategic use of imagery and animations creates memorable moments

## Brand Colors

### Primary Palette
- **Gold (#D4AF37)**: Excellence, value, premium quality
- **Gold Light (#F4E5B8)**: Highlights, accents
- **Gold Dark (#B8941F)**: Hover states, emphasis

### Neutral Palette
- **Slate 900 (#0f172a)**: Primary dark backgrounds
- **Slate 800 (#1e293b)**: Secondary dark surfaces
- **White (#ffffff)**: Light backgrounds, text on dark

### Usage Guidelines
- Use gold sparingly for maximum impact
- Dark backgrounds create sophistication and focus
- High contrast ensures readability and accessibility

## Typography

### Font Families

**Playfair Display** (Display/Headings)
- Usage: Main headings, hero text, feature titles
- Weights: 400, 700, 900
- Character: Classic, authoritative, elegant serif

**Raleway** (Subheadings/Labels)
- Usage: Navigation, buttons, section labels
- Weights: 400, 500, 600, 700, 800
- Character: Modern, clean, geometric sans-serif

**Montserrat** (Body Text)
- Usage: Paragraphs, descriptions, body content
- Weights: 300, 400, 500, 600, 700
- Character: Professional, highly readable

### Type Scale
- Hero: 3.5-4.5rem (56-72px)
- H1: 3rem (48px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- Body Large: 1.125rem (18px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

## Layout & Spacing

### Grid System
- Container max-width: 1280px
- Grid columns: 12-column system
- Gutter: 2rem (32px)
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Section Spacing
- Section padding: 5rem (80px) vertical
- Element spacing: 1.5-3rem (24-48px)
- Content margins: 1-2rem (16-32px)

## Components

### Buttons
Three variants for different contexts:

**Primary** (Gold on Dark)
- Use for: Main CTAs, form submissions
- Style: Bold, high contrast, commanding

**Secondary** (Dark with Gold Border)
- Use for: Alternative actions, secondary CTAs
- Style: Sophisticated, understated

**Outline** (Transparent with Gold Border)
- Use for: Tertiary actions, light backgrounds
- Style: Clean, minimal, elegant

### Cards
- Border: 2px subtle grey, transitions to gold on hover
- Shadow: Minimal at rest, elevated on hover
- Images: Aspect ratio 16:9, subtle zoom on hover
- Padding: 1.5-2rem (24-32px)

### Navigation
- Fixed header with backdrop blur when scrolled
- Smooth transitions between transparent and solid states
- Mobile hamburger menu for responsive design
- Active state highlighted in gold

## Animation Philosophy

### Principles
1. **Purposeful Motion**: Every animation serves a function
2. **Subtle Elegance**: Movements are smooth, never jarring
3. **Performance First**: CSS animations preferred, GPU-accelerated
4. **Consistent Timing**: 0.3-0.6s duration for most transitions

### Animation Types
- **Fade In**: Initial page loads, content reveals
- **Slide Up**: Cards, sections entering viewport
- **Scale**: Hover states, interactive elements
- **Stagger**: Sequential animations for lists

## Page-Specific Guidelines

### Home Page
- Hero: Full viewport height, bold headline, dual CTA
- Statistics: 4-column grid showcasing key metrics
- Services: 3-column grid with image cards
- Values: Dark section with icon-based cards
- CTA: Full-width with overlay image

### About Page
- Split mission/vision cards for emphasis
- Story section with timeline aesthetics
- Team grid with grayscale-to-color transition
- Values repeated with different presentation

### Services Page
- Grid overview with clickable cards
- Featured detail section with dynamic content
- Process timeline with numbered steps
- Technical credibility through structured information

### Contact Page
- Icon-based info cards for quick scanning
- Large, accessible form with validation
- Embedded map for location context
- Mobile-optimized form layout

## Customization Guide

### Replacing Images

1. **Hero Images** (1920x1080px recommended):
   ```typescript
   // In page components
   src="https://your-image-url.com/hero.jpg"
   ```

2. **Service Images** (800x450px recommended):
   ```typescript
   // In src/data/constants.ts
   SERVICES: [
     {
       image: '/path/to/your/image.jpg',
       // ...
     }
   ]
   ```

3. **Team Photos** (600x600px recommended):
   ```typescript
   // In About.tsx
   { image: '/path/to/team-member.jpg' }
   ```

### Updating Logo

1. Create your logo (SVG preferred for scalability)
2. Add to `/public/logo.svg`
3. Update in `Navbar.tsx`:
   ```tsx
   <img src="/logo.svg" alt="Mahuta Logo" className="h-12" />
   ```
4. Update in `Footer.tsx` similarly

### Modifying Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  gold: {
    DEFAULT: '#YOUR_COLOR',
    light: '#YOUR_LIGHT',
    dark: '#YOUR_DARK',
  }
}
```

### Changing Content

All content is centralized in `src/data/constants.ts`:
- Company information
- Services array
- Core values
- Statistics
- Contact details

Simply edit the values in this file to update across the entire site.

### Adding New Services

In `src/data/constants.ts`:
```typescript
{
  id: 'new-service',
  title: 'Service Name',
  description: 'Service description',
  icon: 'icon-name',
  image: '/path/to/image.jpg',
  features: ['Feature 1', 'Feature 2']
}
```

## Performance Optimization

### Image Optimization
- Use WebP format when possible
- Compress images before upload
- Use appropriate dimensions (don't upload 4K for thumbnails)
- Consider lazy loading for below-fold images

### Code Splitting
- Routes are automatically code-split
- Consider dynamic imports for heavy components
- Monitor bundle size with `npm run build`

### SEO Considerations
- Update meta tags in `index.html`
- Add alt text to all images
- Use semantic HTML
- Implement structured data for services

## Accessibility

### Current Implementation
- Semantic HTML throughout
- Keyboard navigation support
- High contrast text (WCAG AA compliant)
- Focus states on interactive elements
- Responsive font sizing

### Testing Checklist
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA
- [ ] Form labels properly associated
- [ ] Images have alt text

## Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest, including iOS Safari)
- Mobile Chrome/Safari

## Deployment

### Build Process
```bash
npm run build
```

### Hosting Options
- **Vercel**: Zero-config, automatic deployments
- **Netlify**: Great CI/CD, form handling
- **AWS S3 + CloudFront**: Full control, scalable
- **Digital Ocean**: App Platform or Droplet

### Environment Variables
Create `.env` for API keys, if needed:
```
VITE_API_KEY=your_key
VITE_CONTACT_EMAIL=info@mahutaoilgas.com
```

## Next Steps

### Phase 1 (Immediate)
1. Replace all placeholder images with branded photos
2. Add actual company logo
3. Update contact information
4. Customize content in constants.ts
5. Test on mobile devices

### Phase 2 (Short-term)
1. Set up analytics (Google Analytics, Plausible)
2. Add blog/news section
3. Implement contact form backend
4. Add loading states and error handling
5. SEO optimization

### Phase 3 (Long-term)
1. Add case studies/project portfolio
2. Client testimonials section
3. Interactive project map
4. Career/recruitment page
5. Investor relations section

## Support & Resources

### Documentation
- React: https://react.dev
- TypeScript: https://typescriptlang.org
- Tailwind: https://tailwindcss.com
- Framer Motion: https://framer.com/motion

### Customization Help
- Modify colors: `tailwind.config.js`
- Change fonts: `tailwind.config.js` + `index.css`
- Update content: `src/data/constants.ts`
- Add pages: Create in `src/pages/` + add route in `App.tsx`

### Best Practices
- Keep commits atomic and descriptive
- Test responsive design at each breakpoint
- Optimize images before adding
- Run `npm run build` to check bundle size
- Use TypeScript types consistently

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Review security advisories: `npm audit`
- Test after major dependency updates
- Back up before significant changes

### Performance Monitoring
- Check Lighthouse scores regularly
- Monitor Core Web Vitals
- Optimize heavy images/components
- Consider CDN for static assets

---

**Need Help?**
Reference the README.md for technical setup, and this guide for design decisions and customization.

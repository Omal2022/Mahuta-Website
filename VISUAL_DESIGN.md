# Visual Design Overview - Mahuta Oil & Gas Website

## Color Palette

### Primary Colors
```
Gold:       #D4AF37  ███████  Main brand color, CTAs, accents
Gold Light: #F4E5B8  ███████  Highlights, subtle backgrounds
Gold Dark:  #B8941F  ███████  Hover states, depth
```

### Neutral Colors
```
Slate 950:  #0f1419  ███████  Deepest backgrounds
Slate 900:  #0f172a  ███████  Main dark backgrounds
Slate 800:  #1e293b  ███████  Cards, elevated surfaces
Slate 700:  #334155  ███████  Borders on dark
White:      #ffffff  ███████  Light backgrounds, text on dark
Gray 600:   #4b5563  ███████  Secondary text
Gray 200:   #e5e7eb  ███████  Borders on light
```

## Typography Hierarchy

### Display Font: Playfair Display
```
MAHUTA OIL & GAS  (900 weight)
Premium Heading   (700 weight)
Standard Heading  (400 weight)
```
**Character**: Classic serif, elegant, authoritative
**Usage**: Main headlines, hero text, major section titles

### Heading Font: Raleway
```
SECTION LABEL     (700 weight)
Navigation Item   (600 weight)
Button Text       (600 weight)
```
**Character**: Modern geometric sans-serif, clean
**Usage**: Navigation, buttons, labels, subheadings

### Body Font: Montserrat
```
Body paragraph text (400 weight)
Emphasized text (500 weight)
Light text (300 weight)
```
**Character**: Professional, highly readable
**Usage**: All body content, descriptions, forms

## Component Styles

### Buttons

**Primary Button (Gold)**
┌─────────────────────────────┐
│  ▶ GET IN TOUCH             │  ← Gold background (#D4AF37)
└─────────────────────────────┘     Dark text (#0f172a)
                                    Bold uppercase

**Secondary Button (Dark)**
┌─────────────────────────────┐
│  LEARN MORE                 │  ← Dark background (#1e293b)
└─────────────────────────────┘     Gold text + border

**Outline Button (Transparent)**
┌─────────────────────────────┐
│  EXPLORE SERVICES           │  ← Transparent background
└─────────────────────────────┘     Gold border, gold text

### Cards

**Service Card**
┌───────────────────────────────────┐
│ [  Image - 16:9 aspect ratio   ] │
├───────────────────────────────────┤
│ Exploration & Production          │
│                                   │
│ Advanced exploration services...  │
│                                   │
│ Learn More →                      │
└───────────────────────────────────┘
- White background
- 2px border (gray → gold on hover)
- Image zooms on hover
- Clean, spacious padding

**Value Card (Dark Background)**
┌───────────────────────────────────┐
│ [✓] Icon in gold                  │
│                                   │
│ Reliability                       │
│ Consistent delivery of...         │
└───────────────────────────────────┘
- Dark background (#1e293b)
- Gold border on hover
- Icon in gold accent

## Page Layouts

### Home Page Structure
```
┌─────────────────────────────────────────┐
│         FIXED NAVIGATION BAR            │ ← Transparent → Dark on scroll
├─────────────────────────────────────────┤
│                                         │
│         FULL VIEWPORT HERO              │ ← Large background image
│         [Company name + tagline]        │   Dark overlay
│         [Dual CTA buttons]              │   White text + gold accents
│                                         │
├─────────────────────────────────────────┤
│      STATISTICS (4 columns, dark)       │ ← Dark section, gold numbers
├─────────────────────────────────────────┤
│      SERVICES GRID (3 columns)          │ ← White background
├─────────────────────────────────────────┤
│      VALUES GRID (3 columns, dark)      │ ← Dark section
├─────────────────────────────────────────┤
│      CTA SECTION (full width)           │ ← Image background
└─────────────────────────────────────────┘
│         FOOTER (dark)                   │
└─────────────────────────────────────────┘
```

### About Page Structure
```
┌─────────────────────────────────────────┐
│         HERO BANNER (60vh)              │
├─────────────────────────────────────────┤
│    MISSION | VISION (side by side)      │ ← Dark cards with gold accent
├─────────────────────────────────────────┤
│         OUR STORY (centered)            │ ← Dark background
├─────────────────────────────────────────┤
│      CORE VALUES (grid)                 │ ← Light background
├─────────────────────────────────────────┤
│    COMPETITIVE ADVANTAGES (2 cols)      │ ← Dark background
├─────────────────────────────────────────┤
│      LEADERSHIP TEAM (3 columns)        │ ← Light background
└─────────────────────────────────────────┘
```

## Animation Details

### Page Load
- Hero: Fade in + slide up (0.8s)
- Content: Staggered slide up (0.5s + delay)
- Images: Fade in (0.6s)

### Scroll Interactions
- Cards: Slide up when entering viewport
- Statistics: Count up animation
- Images: Parallax effect on hero

### Hover States
- Buttons: Slight scale + shadow increase
- Cards: Border color change (gray → gold)
- Images: Scale 1.1x zoom
- Links: Color transition (white → gold)

### Transitions
- Duration: 300ms (fast), 600ms (standard)
- Easing: ease-in-out, ease-out
- GPU accelerated (transform, opacity)

## Responsive Breakpoints

### Mobile (< 768px)
- Single column layouts
- Stacked navigation (hamburger menu)
- Full-width cards
- Larger touch targets (44x44px minimum)
- Simplified hero (smaller text)

### Tablet (768px - 1024px)
- 2-column grids
- Maintained card layouts
- Adjusted typography scale
- Optimized image sizes

### Desktop (> 1024px)
- Full 3-4 column grids
- Maximum visual impact
- Sophisticated animations
- All features enabled

## Design System Summary

### Spacing Scale (Tailwind)
```
1  = 0.25rem (4px)    7  = 1.75rem (28px)
2  = 0.5rem  (8px)    8  = 2rem    (32px)
3  = 0.75rem (12px)   10 = 2.5rem  (40px)
4  = 1rem    (16px)   12 = 3rem    (48px)
5  = 1.25rem (20px)   16 = 4rem    (64px)
6  = 1.5rem  (24px)   20 = 5rem    (80px)
```

### Common Patterns
- Section padding: `py-20` (80px)
- Card padding: `p-6` to `p-10` (24-40px)
- Grid gaps: `gap-8` (32px)
- Button padding: `px-6 py-3` (24px/12px)

## Iconography
- Source: Lucide React
- Size: 20-32px for most icons
- Color: Gold (#D4AF37) for primary icons
- Style: Minimal, geometric, consistent stroke width

## Image Treatment
- Aspect ratios: 16:9 for services, 1:1 for team
- Overlay: Dark gradient for text readability
- Filter: Grayscale on team photos (color on hover)
- Quality: Compressed but crisp (WebP preferred)

## Accessibility Features
- Contrast ratio: AAA for body text, AA for large text
- Focus indicators: Gold outline (2px)
- Keyboard navigation: Full support
- Screen reader: Semantic HTML, ARIA labels
- Touch targets: Minimum 44x44px
- Color independence: Never rely solely on color

## Brand Personality in Design

**Reliable**: Consistent spacing, predictable layouts, familiar patterns
**Capable**: Bold typography, technical precision, organized information
**Trustworthy**: Professional photography, authentic testimonials, clear communication
**Sustainable**: Natural imagery, environmental messaging, long-term focus
**Excellent**: Attention to detail, polished interactions, premium feel

## Competitive Differentiation

vs. Generic Oil & Gas Sites:
✓ Distinctive gold/slate color scheme (not blue/white)
✓ Premium typography (not standard system fonts)
✓ Sophisticated animations (not static)
✓ Modern layout patterns (not template-y)
✓ Strong visual hierarchy (not overwhelming)

## Quality Checklist

Visual Polish:
- [ ] Consistent spacing throughout
- [ ] Aligned elements
- [ ] Balanced white space
- [ ] Appropriate contrast
- [ ] Smooth animations
- [ ] Optimized images
- [ ] Clean typography
- [ ] Professional color usage

---

This design balances corporate professionalism with visual sophistication, 
creating a memorable digital presence that reflects Mahuta's position as a 
leader in Nigeria's oil and gas sector.

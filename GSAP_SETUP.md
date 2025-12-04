# GSAP Setup & Troubleshooting

## Quick Fix for "gsap.register is not a function"

The error you saw was due to incorrect GSAP imports. **This is now fixed!**

### What Was Wrong
```typescript
// ❌ WRONG
import gsap from 'gsap';
gsap.register(ScrollTrigger);
```

### What's Correct
```typescript
// ✅ CORRECT
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
```

---

## Installation Steps

If you're starting fresh, follow these steps:

### 1. Install Dependencies
```bash
npm install
```

This installs:
- `gsap@^3.12.5` - Animation library
- All other dependencies

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:3000`

---

## Common GSAP Errors & Fixes

### Error: "gsap.register is not a function"
**Solution:** Use `gsap.registerPlugin()` instead
```typescript
gsap.registerPlugin(ScrollTrigger);
```

### Error: "ScrollTrigger is not defined"
**Solution:** Import it correctly
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
```

### Error: Animations not working
**Solution:** Make sure you're registering the plugin
```typescript
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Your animations here
}, []);
```

### Error: "Cannot read property 'create' of undefined"
**Solution:** Check that GSAP is installed
```bash
npm list gsap
# Should show: gsap@3.12.5 or higher

# If not found, install it:
npm install gsap
```

---

## GSAP Basic Usage

### Simple Animation
```typescript
import { gsap } from 'gsap';

useEffect(() => {
  gsap.from('.element', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
}, []);
```

### Scroll-Triggered Animation
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.element', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.element',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1
    }
  });
}, []);
```

### Staggered Animations
```typescript
gsap.from('.cards', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2, // Delay between each card
  ease: 'power3.out'
});
```

---

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx         ← GSAP animations here
│   ├── About.tsx        ← Add animations here
│   ├── Services.tsx     ← Add animations here
│   └── Contact.tsx      ← Add animations here
```

---

## Adding Animations to New Pages

### Step 1: Import GSAP
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
```

### Step 2: Register Plugin
```typescript
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  // Your animations
}, []);
```

### Step 3: Create Animation
```typescript
gsap.from('.my-element', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out'
});
```

---

## Performance Tips

### 1. Use CSS Transforms
```typescript
// ✅ GOOD (GPU accelerated)
gsap.to('.element', { x: 100, y: 50, rotation: 45 });

// ❌ BAD (CPU heavy)
gsap.to('.element', { left: '100px', top: '50px' });
```

### 2. Use willChange for Smooth Animations
```css
.animated-element {
  will-change: transform, opacity;
}
```

### 3. Clean Up Animations
```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Your animations
  });
  
  return () => ctx.revert(); // Cleanup
}, []);
```

---

## Easing Options

```typescript
// Power curves
'power1.out'  // Subtle
'power2.out'  // Medium
'power3.out'  // Strong
'power4.out'  // Very strong

// Bounce
'bounce.out'

// Elastic
'elastic.out'

// Back (overshoots)
'back.out'
```

---

## ScrollTrigger Options

```typescript
scrollTrigger: {
  trigger: '.element',     // What element to watch
  start: 'top 80%',       // When to start
  end: 'top 50%',         // When to end
  scrub: 1,               // Smooth scrubbing
  markers: true,          // Show debug markers (remove in production)
  toggleActions: 'play none none reverse'
}
```

---

## Debugging

### Show ScrollTrigger Markers
```typescript
scrollTrigger: {
  trigger: '.element',
  markers: true  // Shows start/end points
}
```

### Log Animation Progress
```typescript
gsap.to('.element', {
  x: 100,
  onStart: () => console.log('Animation started'),
  onComplete: () => console.log('Animation completed')
});
```

---

## Resources

- **GSAP Docs**: https://greensock.com/docs/
- **ScrollTrigger Docs**: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- **GSAP Cheat Sheet**: https://greensock.com/cheatsheet/
- **GSAP Forum**: https://greensock.com/forums/

---

## Still Having Issues?

### Clear Cache and Reinstall
```bash
# Remove node_modules
rm -rf node_modules

# Remove package-lock
rm package-lock.json

# Reinstall
npm install

# Start dev server
npm run dev
```

### Check GSAP Version
```bash
npm list gsap
# Should show: gsap@3.12.5 or higher
```

### Update GSAP
```bash
npm install gsap@latest
```

---

## The Fix is Already Applied! ✅

The error you encountered has been fixed in the code. Just run:

```bash
npm install
npm run dev
```

And you're good to go! The GSAP animations should work perfectly now.

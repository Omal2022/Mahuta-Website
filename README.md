# Mahuta Oil & Gas Ltd - Website

A modern, professional website for Mahuta Oil & Gas Ltd built with React, TypeScript, and Tailwind CSS.

## Features

- ⚡ Built with Vite for lightning-fast development
- 🎨 Styled with Tailwind CSS for a corporate luxury aesthetic
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🧭 React Router for seamless navigation

## Project Structure

```
mahuta-website/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Section.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── data/              # Static data and constants
│   │   └── constants.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

The brand colors (grey and gold) are defined in `tailwind.config.js`:
- Gold: `#D4AF37`
- Gold Light: `#F4E5B8`
- Gold Dark: `#B8941F`

### Typography

Three font families are used:
- Display: Playfair Display (headings)
- Heading: Raleway (subheadings)
- Body: Montserrat (body text)

### Images

Replace placeholder images from Unsplash with your own:
1. Add images to the `public` folder
2. Update image URLs in `src/data/constants.ts` and page components

### Logo

Replace the placeholder "M" logo:
1. Create your logo image
2. Update the logo in `src/components/Navbar.tsx` and `src/components/Footer.tsx`

### Content

All content is centralized in `src/data/constants.ts`. Update:
- Company information
- Services
- Core values
- Contact details
- Statistics

## Pages

- **Home** (`/`): Hero section, services overview, statistics, core values, CTA
- **About** (`/about`): Company story, mission, vision, team, values
- **Services** (`/services`): Detailed service offerings with interactive selection
- **Contact** (`/contact`): Contact form, location information, map

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Router DOM
- Lucide React (icons)
- Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Mahuta Oil & Gas Ltd. All rights reserved.

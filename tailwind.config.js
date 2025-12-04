/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFECC5',
          dark: '#B8941F',
        },
        gray: {
          primary: '#3D3D3D',
          light: '#B1B1B1',
        },
        sand: '#FFECC5',
        silver: '#B1B1B1',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

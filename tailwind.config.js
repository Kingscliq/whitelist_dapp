/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        secondary: '#2CA1CA',
        dark: '#0a192f',
        slate: '#a8b2d1',
        'slate-100': '#8892b0',
      },
      fontFamily: {
        primary: ['DM Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#111111',
          accent: '#292929',
          former: '#283655',
          600: 'rgba(29, 43, 74, 1)',
        },
        secondary: '#2CA1CA',
        neutral: '#EAECF0',
        'fair-money': '#37A477',
        error: '#C70028',
        brand: '#283655',
        grey: '#535E77',
        'light-grey': '#F6F6F9',
        'grey-100': '#D7DAE1',
        'grey-200': '#F2F4F7',
        'grey-300': '#DBDAE4',
        'grey-400': '#6B7090',
        'grey-500': '#667085',
        'light-blue': '#6F788D',
        payforce: '#283655',
        fairMoneyBlue: '#434F75',
        fairGreen: '#5FB692',
        fairLightGreen: '#EBF6F1',
        fairYellow: '#F9AF21',
        fairLightYellow: '#FEF6E6',
        fairRed: '#FF4569',
        fairLightRed: '#FFE8EC',
        'bright-red': '#E8153E',
        'off-white': '#F3F4F6',
      },
      fontFamily: {
        primary: ['DM Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

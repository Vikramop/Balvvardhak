import { Yatra_One } from 'next/font/google';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        yatra: ['Yatra One'],
        paytone: ['Paytone One'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.7rem',
          sm: '0.7rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;

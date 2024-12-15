import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        matteo: ['Matteo', 'Arial', 'sans-serif'],
        merriweather: ['Merriweather'],
      },
    },
  },
  plugins: [],
} satisfies Config;
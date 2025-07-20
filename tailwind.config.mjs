/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'dark': '#302620',
        'secondary': '#626267',
        'secondary-transparent': 'rgba(98, 98, 103, 0.75)',
        'tertiary': '#fbfcee',
        'tertiary-background': '#fbfcee',
        'tertiary-darker': 'rgba(183, 184, 173, 0.3)',
        'coral-pink': '#ee9480',
        'light': 'rgba(255, 255, 255, 0.9)',
        'grey': 'rgba(0, 0, 0, 0.4)',
        'blue': {
          1: '#042373',
          2: '#3c67d5',
          3: '#7190e0',
          4: '#eaf1ff',
          5: '#c7ebef',
          6: '#cddaf8',
          7: '#7394f684'
        }
      },
      fontFamily: {
        'inter': ['Inter Variable', 'sans-serif'],
      },
      borderRadius: {
        '20': '20px'
      }
    },
  },
  plugins: [],
}
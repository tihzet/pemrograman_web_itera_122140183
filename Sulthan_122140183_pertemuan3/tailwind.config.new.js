/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f9a8d4', // pink-300
          DEFAULT: '#ec4899', // pink-500
          dark: '#be185d', // pink-800
        },
        secondary: {
          light: '#a5b4fc', // indigo-300
          DEFAULT: '#6366f1', // indigo-500
          dark: '#4338ca', // indigo-800
        },
        accent: {
          light: '#6ee7b7', // emerald-300
          DEFAULT: '#10b981', // emerald-500
          dark: '#047857', // emerald-800
        },
      },
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

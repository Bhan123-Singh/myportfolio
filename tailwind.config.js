/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'dark-bg': '#0a0a0a',
        'dark-bg-alt': '#1a1a2e',
      }
    },
  },
  plugins: [],
}


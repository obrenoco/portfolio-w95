/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': { DEFAULT: "#b8b7b7", 'dark': '#7f7f7f', 'light': "#C0C0C0" }
      },
      borderWidth: { '1': '1px' }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      colors: {
        'gray': { DEFAULT: "#b8b7b7", 'dark': '#7f7f7f', 'light': "#C0C0C0" },
        "blue-windows": "#017d7d"
      },
      borderWidth: { '1': '1px' }
    },
  },
  plugins: [],
}
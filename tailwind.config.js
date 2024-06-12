/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js}",
    "./index.html", // Make sure to include the index.html in the root
  ],
  theme: {
    extend: {
      colors: {
        'tanishq': '#f2e8e9',
        'rest': '#0D1323',
        'tantext': '#A2C4E2'
      },
    },
  },
  plugins: [],
}

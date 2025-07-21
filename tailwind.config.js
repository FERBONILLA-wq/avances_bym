/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          DEFAULT: '#e75480', // Rosa principal
          claro: '#ffb6c1',  // Rosa claro
          oscuro: '#c2185b', // Rosa oscuro
        },
        blanco: '#fff',
        negro: '#181818',
        cafe: '#6B4F27',
        dorado: '#FFD700',
      },
    },
  },
  plugins: [],
} 
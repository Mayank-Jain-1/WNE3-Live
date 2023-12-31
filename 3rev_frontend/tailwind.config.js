/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Russo": `'Russo One', sans-serif`,
        "Manrope": `'Manrope', sans-serif `,
      },
      colors: {
        "Aqua": "#14C7FF",
      }
    },
  },
  plugins: [],
}


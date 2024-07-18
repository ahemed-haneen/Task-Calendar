/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '96': 'repeat(96, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}


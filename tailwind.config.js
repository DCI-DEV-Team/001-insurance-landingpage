/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // ADDED SOME COLORS REMOVE IF WRONG
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      darkgreen: "rgb(9, 54, 36)"
    },
    extend: {},
  },
  plugins: [],
}

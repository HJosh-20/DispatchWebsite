/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 makes dark mode manual (not auto)
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
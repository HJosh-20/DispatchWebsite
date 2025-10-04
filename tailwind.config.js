/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // opt-in; nothing goes dark unless you add .dark
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};
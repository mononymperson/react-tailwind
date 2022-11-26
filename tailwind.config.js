/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',
        'primary': '#4e5d94',
        'dark': '#363941',
        'primary-dark': '#738adb',
        'danger': '#e28d8d',
        'secondary': '#ebedef',
        'secondary-dark': '#464951'
      }
    },
  },
  plugins: [],
}

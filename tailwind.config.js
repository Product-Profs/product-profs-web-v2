/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Roboto"',],
      'heading': ['"Inter"',],
    },
    extend: {
      colors: {
        'primary': '#BE25B1',
        'tint': '#e5a8e0',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
}


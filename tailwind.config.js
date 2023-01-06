/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#000212',
      },
    }
  },
  plugins: [require("rippleui")],
}

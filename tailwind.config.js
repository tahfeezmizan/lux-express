/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImage': "url('./images/banner.png')",
      },
    },
  },
  plugins: [],
}
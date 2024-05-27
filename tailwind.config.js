/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:"440px",
        md:"720px",
        lg:"960px",
        xl:"1079px",
        xxl:"1320px",
      }
    },
  },
  plugins: [],
}
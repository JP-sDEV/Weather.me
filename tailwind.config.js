/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBorder: "var(--primary-border-col)",
        secondaryBorder: "var(--secondary-border-col)",
        secondaryCol: "var(--secondary-col)",
        fontColor: "var(--font-col)",
        selFontColor: "var(--sel-font-col)",
      }
    },
  },
  plugins: []
}

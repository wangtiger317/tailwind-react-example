/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#ffffff",
      lime: "#00FF19CC",
      yellow: "#fde047",
      border: "rgba(178, 187, 187, 1)",
      gray: "#969696",
    },
    extend: {
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};

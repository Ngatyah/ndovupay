/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      red: "red",
      primaryDark: "#003300",
      primaryMain: "#00985F",
      primaryLight: "#00353F",
      neutralDark: "#E0E0E0",
      neutralMain: "#E8E8E8",
      neutralMedMain: "#A3A3A3",
      neutralMed: "#9F9F9F",
      neutralGold: "#f1c232",
      neutralLight: "#333333",
      bgDefault: "#0A0A0A",
      bgAlt: "#1A1A1A",
      darkPrimaryDark: "#006B7D",
      darkPrimaryLight: "#E6FBFF",
      darkBgDefault: "#F6F6F6",
      darkBgAlt: "#FFFFFF"

    }
  },
  plugins: [],
}

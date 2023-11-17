/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#202054",
      white: "#ffffff",
      orange: "#f0b73f",
      secondary: "#faf5ee",
      black: "#000",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {},
  },
  plugins: [],
};

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
      brown: "#faf5ee",
      grad1: "#ab2638",
      grad2: "#f0b73f",
      grad3: "linear-gradient(65deg,#ab2638,#f0b73f)",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },

    extend: {
      keyframes: {
        lefty: {
          "0%, ": { left: "0" },
          "20%": { left: "0" },
          "25%": { left: "-100%" },
          "45%": { left: "-100%" },
          "50%": { left: "-200%" },
          "70%": { left: "-200%" },
          "75%": { left: "-300%" },
          "95%": { left: "-300%" },
          "100%": { left: "-400%" },
        },
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      cardStyle: {
        backgroundColor: "green",
        padding: "2rem",
      },
    },
  },
  plugins: [],
};

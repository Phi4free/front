/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#ffc300",
      secondary: "#C880B7",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      dimYellow: "rgba(255, 195, 0, 0.1)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];

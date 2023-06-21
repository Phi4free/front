/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      btnprimary: "#FFC300",
      btnsecondary: "#C880B7",
      btnhover: "#000814",
      primary: "#ffc300",
      secondary: "#C880B7",

      dimwhite: "rgba(255, 255, 255, 0.7)",
      dimyellow: "rgba(255, 195, 0, 0.1)",

      errorred: "#AA3939",
      erroraccent: "#801515",
      warningyellow: "#37331f",
      warningaccent: "#afa31e",

      teste: "#FFF"
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
export const safelist = [
  {
    pattern: /bg-(warningyellow|warningaccent|errorred|erroraccent)/
  }
];
export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        dark: "#363386 ",
        primary: "#0012FF ",
        green: "#67C4DA",
        red: "#F28080 ",
        "dark-light": "#f8fafb",
      },
      fontFamily: {
        primary: " 'Nunito', sans-serif ",
      },
      fontSize: {
        "fz-16": "16px",
      },
    },
  },
  plugins: [],
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};

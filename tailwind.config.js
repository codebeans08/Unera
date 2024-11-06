/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
      },
      fontWeight: {
        light: 300,
        medium: 500,
        semibold: 600,
        extrabold: 900,
      },
      colors: {
        primary: "#B17569",
        secondary: "#2F0000",
        tertiary: "#151515",
        primaryLight: "#EAD1C9",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1720px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

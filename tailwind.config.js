/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      container: {
        center: true,
        screens: {
          md: "768px",
          lg: "984px",
          xl: "1320px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        primary: ["Rounded Elegance", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        shadow: "0px 2px 14px rgba(148, 148, 148, 0.25)",
      },
      colors: {
        grey: "#3A3A3A",
        green: {
          400: "#3CB51D",
          500: "#054B23",
        },
        purple: {
          400: "#D2499B",
          500: "#995AB3",
        },
      },
    },
  },
  plugins: [],
};

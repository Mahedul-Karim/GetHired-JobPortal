/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: "var(--primary)",
        "primary-light": {
          0: "var(--primary-light)",
          1: "var(--primary-light-1)",
        },
        gray: {
          0: "var(--gray-0)",
          1: "var(--gray-1)",
          2:'var(--gray-2)'
        },
        dark: {
          0: "var(--dark-0)",
          1: "var(--dark-1)",
          2:'var(--dark-2)'
        },
      },
    },
  },
  plugins: [],
};

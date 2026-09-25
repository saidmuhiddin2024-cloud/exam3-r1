/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3aa63a",
          dark: "#2e8b2e",
          light: "#e8f6e8",
        },
      },
    },
  },
  plugins: [],
};

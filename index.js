
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0B1120",
        darker: "#080d19",
        brand: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
const initTailwind = () => {

};
window.onload = initTailwind()

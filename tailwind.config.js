/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        hammersmith: ["Hammersmith One", "sans-serif"],
      },
      colors: {
        primary: "#0E286B",
        secondary: "#0078D7",
        tertiary: "#8BD8BC",
        quaternary: "#585858",
        quinary: "#EBEBEB",
        senary: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [],
};

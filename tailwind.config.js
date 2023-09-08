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
        primary: "#7642F9",
        secondary: "#AE8EFE",
        tertiary: "#C8B3FC",
        accent: "#C5F942",
        "tx-primary": "#C0C0C0",
        "tx-secondary": "#F6F2FF",
        "tx-tertiary": "#FF9090",
        "tx-accent": "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(100px, 1fr))",
      },
      colors: {
        gray: {
          F9F9F9: "#F9F9F9",
          F6F6F6: "#F6F6F6",
          EDEDED: "#EDEDED",
          CBCBCB: "#CBCBCB",
          B4B4B4: "#B4B4B4",
          "9E9E9E": "#9E9E9E",
          717171: "#717171",
          505050: "#505050",
          "2D2D2D": "#2D2D2D",
        },
        black: "#0C0C0C",
        white: "#FFFFFF",
        primary: {
          main: "#0C68F4",
          25: "#E4EEFE",
          50: "#AECDFB",
          75: "#78ABF9",
          100: "#428AF6",
          200: "#2779F5",
          400: "#0951BE",
          500: "#063A88",
          600: "#052E6D",
          700: "#042352",
          900: "#021736",
        },
        secondary: {
          main: "#F45E0C",
          100: "#FDDBC9",
          200: "#FAB793",
          300: "#F68242",
          500: "#BE4909",
          600: "#883406",
        },
        status: {
          error: "#C91433",
          "error-light": "#FAE7EB",
          success: "#198754",
          "success-light": "#D1F7E5",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};

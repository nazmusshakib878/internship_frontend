/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          cyan: "#06B6D4",
          dark: "#0A1628",
          darker: "#060d1b",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "'Segoe UI'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}


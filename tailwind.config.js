/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1E40AF",
        accent: "#F59E0B",
        buttonGrey: "#6B7280", // Tailwind gray-500
        buttonGreyHover: "#4B5563" // Tailwind gray-600
      },
    },
  },
  plugins: [],
} 
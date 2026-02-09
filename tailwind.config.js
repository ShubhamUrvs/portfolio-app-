/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Slate 950 - Deep Blue/Black
        surface: "#0f172a", // Slate 900
        primary: "#3b82f6", // Blue 500
        secondary: "#6366f1", // Indigo 500
        accent: "#22d3ee", // Cyan 400
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

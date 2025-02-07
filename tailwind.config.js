/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // All files inside the "app" folder (your file-based routes)
    "./src/**/*.{js,jsx,ts,tsx}", // All files inside the "src" folder (components, hooks, etc.)
  ],
    theme: {
      extend: {colors: {
        // Custom colors based on your design
        primary: "#00D9FF",
        background: "#161622",
        secondary: "#1E1E2D",
        text: "#CDCDE0",
      },
      fontFamily: {
        // Define a custom font family. Make sure the font is loaded in your project (using expo-font).
        protest: ["ProtestGuerrilla", "sans-serif"],
      },},
    },
    plugins: [],
  };

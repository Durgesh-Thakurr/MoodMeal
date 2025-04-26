module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Watches all your React components for class names
  theme: {
    extend: {}, // You can extend theme (e.g. custom colors, fonts) later here
  },
  plugins: [], // Optional: add Tailwind plugins (like typography, forms, etc.)
  darkMode: 'class', // Enables dark mode via .dark class on <html> or <body>
}; 
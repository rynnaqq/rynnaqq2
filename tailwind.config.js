/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#e8590c",
          orangeHover: "#d9480f",
          dark: "#1a1a1a",
          card: "#242424",
          cardHover: "#2e2e2e",
          border: "#333333",
          warm: "#FFF7ED",
          muted: "#a3a3a3",
        },
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

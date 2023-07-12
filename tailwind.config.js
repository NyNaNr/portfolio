/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-20%)" },
          "50%": { transform: "translateY(20%)" },
        },
      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        strongCyan: "hsl(186, 100%, 50%)",
        light: {
          DEFAULT: "#F2F2F2", // Light color
        },
        dark: {
          DEFAULT: "#111111", // Dark color
        },
        codeBack: {
          DEFAULT: "#1E1E1E", // markdownコードプレビューの背景のCSS
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
}

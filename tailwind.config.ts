import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B2022",
        wine: "#713C46",
        blush: "#E9BFC4",
        rose: "#D98D98",
        cream: "#FBF7F3",
        paper: "#F5EDE7",
        mutedRose: "#B99598",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        soft: "0 25px 80px rgba(92, 49, 58, 0.12)",
        romantic: "0 30px 100px rgba(137, 72, 85, 0.18)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotate(0deg)",
          },
          "50%": {
            transform: "translate3d(0, -18px, 0) rotate(4deg)",
          },
        },
        pulseSoft: {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.08)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

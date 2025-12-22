import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        primary: {
          DEFAULT: "#9B2C8C",
          dark: "#7F2374",
        },
      },
    },
  },
  plugins: [],
} satisfies Config

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        navy: {
          DEFAULT: "#0a0f1e",
          2: "#111827",
          3: "#1a2235",
          4: "#243047",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97e",
          dim: "#7d6530",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dim: "#c8bfa8",
        },
        muted: "#6b7a99",
      },
    },
  },
  plugins: [],
};

export default config;

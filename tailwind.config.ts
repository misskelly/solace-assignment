import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        solace: {
          teal: {
            DEFAULT: "#2B6F6F",
            dark: "#1F5555",
            light: "#3A8585",
          },
          green: {
            DEFAULT: "#1d4339",
          },
          gold: {
            DEFAULT: "#D4A849",
            light: "#E5C76B",
            dark: "#B8913D",
          },
          cream: {
            DEFAULT: "#F9F7F4",
            light: "#FDFBF8",
          },
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

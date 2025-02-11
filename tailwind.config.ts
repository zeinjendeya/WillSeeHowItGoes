import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        green: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#09A66C",
          500: "#006946",
          600: "#00543A",
          700: "#00402E",
          800: "#002B1F",
          900: "#00170F",
        },
        gray: {
          50: "#F7F7F7",
          100: "#F0F0F0",
          200: "#E9E9E9",
          300: "#E2E2E2",
          400: "#E2E2E2",
          500: "#E1E2E1",
          600: "#C4C5C4",
          700: "#B7B8B7",
          800: "#A9AAA9",
          900: "#9C9D9C",
        },
        teal: "#d7e5de",
        "rm-white": "#f4f6f7",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

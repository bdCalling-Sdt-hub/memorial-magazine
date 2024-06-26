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
        primary: "#0071E3",
        secondary: "#eaf3fc",
      },
      fontSize: {
        "44px": "44px",
      },
    },
    container: {
      center: true,
      padding: "10px",
      screens: {
        "2xl": "1300px",
      },
    },
  },

  plugins: [],
};
export default config;

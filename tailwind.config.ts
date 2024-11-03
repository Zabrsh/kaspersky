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
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        footerBackground: "#FCFCFC",
        footerText: "#444",
        primary: '#5E17EB',
        background: '#FFFFFF',
        text: '#444444',
        accent1: '#F0F0F0',
        accent2: '#D1D1D1',
        highlight: '#5E17EB',
      },
    },
  },
  plugins: [],
};

export default config;

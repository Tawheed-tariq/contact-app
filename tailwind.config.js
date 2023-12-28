/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgclr:"#fbfcf7",
        gray:"#5A5959",
        orange: "#F6820C",
        yellow:"#FFEAAE",
        "dark-yellow":"#FCCA3F",
        "dark-gray":"#323334",
        purple:"#5F00D9",
        txtclr: "#080803",
        primary: "#71c675",
        secondary: "#b3ba54",
        accent: "#ebefdd"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


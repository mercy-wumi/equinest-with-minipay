/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryYellow: "#FFC700",
      gray: "#C0C0C0",
      primaryBlack: "#191919",
      lightGray: "#464545",
      darkGray: "#282828",
      white: "#ffffff",
      green: "#039D00",
      red: "#FF1709",
      lighterGray: "#EDEDED",
      borderJoinedComm: "#CACACA",
    },
  },
  plugins: [],
};

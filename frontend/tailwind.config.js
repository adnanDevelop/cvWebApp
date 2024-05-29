/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E94E4",
        purple: "#7450FE",
        black: "#212529",
        "light-blue": "#E8F3Fd",
        blue: "#13287E",
        "light-gray": "#333",
        gray: "#888",
        white: "#fff",
        "light-white": "#D3CDCD",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
      },
      boxShadow: {
        sm: "0 5px 40px 0 rgb(0 0 0 / 11%)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3E94E4",
          purple: "#7450FE",
          black: "#212529",
          "light-blue": "#E8F3Fd",
          blue: "#13287E",
          "light-gray": "#333",
          gray: "#888",
          white: "#fff",
          "light-white": "#D3CDCD",
        },
      },
    ],
  },
};

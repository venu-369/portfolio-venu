/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f80331",

          secondary: "#ffbb00",

          accent: "#11596F",

          neutral: "#3D4451",

          "base-100": "#3D4451",

          info: "#8CCAC1",

          success: "#9CB686",

          warning: "#FFD261",

          error: "#FC9783",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

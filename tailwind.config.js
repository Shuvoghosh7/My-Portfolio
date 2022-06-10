module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#8391AD",

          "neutral": "#3A4256",
          
          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#323848",

          "error": "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

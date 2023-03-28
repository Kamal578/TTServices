/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,png}",
    "./public/index.html",
    "./public/index.js",
    "./public/index.css",
    "./*.{html,js}",
  ],
  theme: {
    screens: {
      'sm': "640px",
      // => @media (min-width: 640px) { ... }

      'md': "768px",
      // => @media (min-width: 768px) { ... }

      "2md": "968px",
      // => @media (min-width: 968px) { ... }

      'lg': "1024px",
      // => @media (min-width: 1024px) { ... }

      'xl': "1280px",
      // => @media (min-width: 1280px) { ... }

      '2xl': "1536px",
      // => @media (min-width: 1536px) { ... }

      "max-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
      "max-xss":{ max: "500px" }
      //=> @media (max-width: 500px) { ... }
    },

    extend: {
      colors:{
        "ttservices": "#6a68ad",
        "ttservicesDark": "#42406d",
        "ttservicesLight": "#d6d5ef",
        "ttservicesGray": "#343434",
        "ttservicesGrayLight": "#D7D7D7",
      },
      fontFamily: {
        Inter: ["'Inter'", "sans-serif"],
        Exo: ["'Exo 2'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

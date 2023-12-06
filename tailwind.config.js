/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        veryPurple: "#AD28EB",
        darkPurple: "#301534",
        lightPurple: "#F8EEFF",
        veryLightPurple: "#F8EEFF",
        grayPurple: "#8B6990",
      },
      colors: {
        veryPurple: "#AD28EB",
        veryLightPurple: "#F8EEFF",
        grayPurple: "#8B6990",
      },
      backgroundImage: {
        "hero-pattern-mobile":
          "url('/assets/images/background-pattern-mobile.svg')",
        "hero-pattern-desktop":
          "url('/assets/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};

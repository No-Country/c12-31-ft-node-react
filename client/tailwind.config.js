/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: [
    //   // {
    //   //   noCountryThem: {
    //   //     primary: "#FD7A09",
    //   //     secondary: "#3ED62B",
    //   //     accent: "#97DA01",
    //   //     neutral: "#090909",
    //   //     base: "#f3f4f6",
    //   //     info: "#3abff8",
    //   //     success: "#36d399",
    //   //     warning: "#fbbd23",
    //   //     error: "#dc2626",
    //   //   },
    //   // },

    // ], 
    // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme:false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};

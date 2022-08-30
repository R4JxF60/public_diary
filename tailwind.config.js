const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "pd-accent-blue": "#7997FA",
        "pd-fade-blue": "#F6F8FF",
        "pd-stroke-blue": "#EEF2FF",
        "pd-pure-white": "#FFFFFF",
        "pd-lotus-red": "#FF5C83",
        "pd-text-gray": "#616161",
        "pd-dark-accent-blue": "#9AAED6",
        "pd-dark-black": "#11151C",
        "pd-dark-fade-black": "#19212E",
        "pd-dark-text-blue": "#A3ABBB",
      },
      fontFamily: {
        "pd-sans-body": ["Roboto", "sans-serif"],
        "pd-sans-heading": ["Lato", "sans-serif"],
        "pd-handwrite": ["Pacifico", "cursive"],
      },
      fontSize: {
        "pd-3xl-ex": ["2rem", {
          lineHeight: "56px", 
        }]
      },
    },
  },
  plugins: [require('@tailwindcss/forms')(
    {
      strategy: 'base',
    }
  ),require('tailwind-scrollbar'),
  plugin(function({ addVariant }) {
    addVariant("scrollbar", "rounded")
  })
],
}
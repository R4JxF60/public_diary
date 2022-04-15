module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pd-accent-blue": "#7997FA",
        "pd-fade-blue": "#F6F8FF",
        "pd-stroke-blue": "#EEF2FF",
        "pd-background-white": "#FFFFFF",
        "pd-lotus-red": "#FF5C83",
        "pd-text-gray": "#616161",
      },
      fontFamily: {
        "pd-sans-body": ["Roboto", "sans-serif"],
        "pd-sans-heading": ["Lato", "sans-serif"],
        "pd-handwrite": ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
}
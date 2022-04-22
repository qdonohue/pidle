module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pi-digits": "url('../public/piBackground.png')",
      },
    },
  },
  plugins: [],
};

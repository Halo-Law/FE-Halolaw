module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Inter"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
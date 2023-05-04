/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        city: "url('./src/images/city.jpg')",
      },
    },
  },
  plugins: [],
};

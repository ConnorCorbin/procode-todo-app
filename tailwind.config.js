/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "components/**/*.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDFBF7",
        secondary: "#EAE9E1",
        green: "#03492F",
        white: "#ffffff",
      },
    },
  },

  plugins: [],
};

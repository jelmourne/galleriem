/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx}"],
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

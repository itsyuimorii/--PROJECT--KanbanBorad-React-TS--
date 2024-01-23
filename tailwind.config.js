/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    content: ["./index.html", "./src/**/*.{html,js}"],

    extend: {
      color: {
        mainBackgroundColor: "#0D1117",
        columnBackgroundColor: "#161B22",
      },
    },
  },
  plugins: [],
};

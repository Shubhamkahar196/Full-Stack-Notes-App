/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // color used in the project
       colors:{
        primary: "#2885FF",
        secondary: "#EF863E"
       },
    },
  },
  plugins: [],
}


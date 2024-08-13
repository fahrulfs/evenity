/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primaryColor: '#070148',
        accentColor: '#050220',
        blackColor: '#000',
        footerColor: '#171717',
        whiteColor: '#fff',
        bgDarkmode: "#020617",
        bgLightmode: "#f3f4f6"
      }

    },
  },
  plugins: [],
}


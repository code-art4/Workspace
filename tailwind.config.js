/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#868585',
        lightgray: '#F8F8F8',
        daygray: '#ECEEF0'
      }
    },
  },
  plugins: [],
}
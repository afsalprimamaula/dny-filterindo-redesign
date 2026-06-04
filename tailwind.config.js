/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dny-blue': '#0a3265', // Warna utama web referensi
        'dny-light': '#f8f9fa',
      }
    },
  },
  plugins: [],
}

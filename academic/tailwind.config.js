/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#1c1917',
        "custom-gray":"#27272a",
        "custom-black":"#171717",
        "gray":"#3f3f46",
        "footerColor":"#18181b"
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar_desktop': "url(./bg-sidebar-desktop.svg)",
        'sidebar_mobile': "url(./bg-sidebar-mobile.svg)"
      }
    },
  },
  plugins: [],
}


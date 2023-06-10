/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/src/assets/footer-texture.svg')",
        "error-texture": "url('/src/assets/error-texture.svg')",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "nav-bg": "#2272ff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

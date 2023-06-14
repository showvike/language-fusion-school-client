/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-texture": "url('/src/assets/footer-texture.svg')",
        "error-texture": "url('/src/assets/error-texture.svg')",
        "login-texture": "url('/src/assets/login-texture.svg')",
        "slider-texture": "url('/src/assets/slider-texture.svg')",
        "classes-texture": "url('/src/assets/classes-texture.svg')",
        "instructors-texture": "url('/src/assets/instructors-texture.svg')",
        "join-texture": "url('/src/assets/join-texture.svg')",
        "dashboard-texture": "url('/src/assets/dashboard-texture.svg')",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "neon-blue": "#28428D",
        "light-steel-blue": "#F8F8F9",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

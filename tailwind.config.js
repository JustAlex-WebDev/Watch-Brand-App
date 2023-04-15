/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1124px",
      xl: "1280px",
    },
    extend: {
      animation: {
        animateOpacity: "animateOpacity 1s ease",
        animateOpacity2: "animateOpacity 1.6s ease",
        animateOpacity3: "animateOpacity 2s ease",
        animatePulse: "animatePulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        animateOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        animatePulse: {
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};

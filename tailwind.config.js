/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        oliveGreen: "#D0CE27",
        teal: "#169086",
        beige: "#EBE6DE",
        charcoal: "#373737",
        lilac: "#C7A6C5",
      },
      buttons: {
        primary: {
          backgroundColor: "#D0CE27",
          color: "charcoal",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
        secondary: {
          backgroundColor: "lilac",
          color: "charcoal",
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
        },
      },
      animation: {
        'bounce-slow': 'bounce 1.5s infinite',
        'underline-slow': 'underline 1s ease-in-out',
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

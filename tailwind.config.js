/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // bleu principal
        secondary: '#f3f4f6', // gris clair
        accent: '#1e293b', // bleu foncé/noir
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(37,99,235,0.08)',
      },
      borderRadius: {
        card: '1.25rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Ajout du support du mode sombre
}

import './index.css';


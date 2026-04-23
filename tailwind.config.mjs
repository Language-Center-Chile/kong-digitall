/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        kong: {
          yellow: '#FFEA00', // El amarillo brillante
          black: '#0A0A0A',  // Fondo principal oscuro
          dark: '#121212',   // Fondo para tarjetas/secciones
          gray: '#8A8A8A',   // Textos secundarios
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Impact', 'sans-serif'], // Para los títulos en negrita y condensados
      }
    },
  },
  plugins: [],
}
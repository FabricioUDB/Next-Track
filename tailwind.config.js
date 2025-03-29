/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Agrega otras rutas donde uses clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Habilita text-wrap si lo necesitas específicamente
    textWrap: true,
  },
  // Para mejorar la compatibilidad con navegadores
  future: {
    hoverOnlyWhenSupported: true,
  },
}
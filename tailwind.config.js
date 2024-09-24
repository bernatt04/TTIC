// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D3557', // Azul oscuro
          secondary: '#FFD700', // Amarillo-dorado
          white: '#FFFFFF', // Blanco
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        backgroundImage: theme => ({
          'hero-pattern': "url('/images/hero-bg.jpg')", // Un fondo para la sección hero
          'footer-texture': "url('/images/footer-texture.png')",
        }),
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'bounce-slow': 'bounce 3s infinite',
        },
        boxShadow: {
          'neon': '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700',
        },
      },
    },
    plugins: [],
  };
  
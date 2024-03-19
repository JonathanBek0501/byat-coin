/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'MaxW1400': {'max': '1400px', 'min': '1024px'}
      },
      colors: {
        primary: {
         DEFAULT: '#FF7427',
         light: '#FFC762'  
        }
      },
      maxWidth: {
        base: '1200px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        }
      },
      animation: {
        'ping-slow': 'ping 2s linear infinite',
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};

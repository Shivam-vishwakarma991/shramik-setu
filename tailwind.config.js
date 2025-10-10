/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9800',
        'primary-dark': '#f57c00',
        secondary: '#4caf50',
        accent: '#d32f2f',
        dark: '#333',
        light: '#f5f5f5',
      },
    },
  },
  plugins: [],
}

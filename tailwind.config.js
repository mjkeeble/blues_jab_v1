/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements-react/dist/js/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      'bj-white': '#faf7ff',
      'bj-blue': '#1c3ba9',
      'bj-blue-dark': '#000564',
      'bj-blue-light': '#cec9ff',
      'bj-blue-mid': '#7b7ef8',
      'bj-green-light': '#6cbaa2',
      'bj-green-mid': '#068488',
      'bj-green-dark': '#324b4c',
      'bj-red': '#9c001b',
      'bj-red-dark': '#743700',
    },
    extend: {
      fontFamily: {
        fredericka: ['Fredericka the Great', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(206,201,255,0.85) 7%, rgba(108,186,162,0.85) 160%)',
        'radial-gradient-dark': 'radial-gradient(circle, rgba(0, 5, 100, 0.8) 7%, rgba(6,132,136,0.8) 160%)',
      },
    },
  },
  plugins: [],
};

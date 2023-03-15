/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      degular: ['degular', 'sans-serif'],
      papyrus: ['papyrus', 'sans-serif'],
      pacifico: ['pacifico', 'sans-serif'],
      impact: ['impact', 'sans-serif'],
      cinzel: ['cinzel', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

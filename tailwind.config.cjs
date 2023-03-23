/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('/static/images/download.jpeg')",
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

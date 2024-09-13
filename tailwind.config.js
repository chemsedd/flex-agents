/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|purple|pink|gray|indigo|teal|orange|lime|cyan)-[1-9]00/
    },
    {
      pattern: /ring-(red|blue|green|yellow|purple|pink|gray|indigo|teal|orange|lime|cyan)-[1-9]00/
    }
  ],
  plugins: []
}

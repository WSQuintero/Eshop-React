/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        'custom-size': '330px',
        'width-price': '200px',
        'size-img': '250px'
      },
      colors: {
        mens: 'rgb(158, 158, 253)',
        electronics: 'rgb(240, 189, 114)',
        jewelry: 'rgb(90, 197, 192)',
        women: 'rgb(220, 159, 255)',
        bgCart: 'rgb(0,0,0,0.2)'
      }
    }
  },
  plugins: []
}

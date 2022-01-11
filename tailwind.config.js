module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
    'primary': '#3d9a5b',
    'seconady': '#df8c54'
  },
  theme: {
    extend: {
      fontFamily: {
        VT323: ['VT323', "monospace"],
      },
      backgroundImage: {
        'bg-artworks': "url('/images/bg-artworks.png')"
      }
    },
  },
  plugins: [],
}

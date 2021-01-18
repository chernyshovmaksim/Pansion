module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/index.html',
      './src/inner.html',
      './src/personal.html',
      './src/categories.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

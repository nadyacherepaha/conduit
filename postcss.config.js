module.exports = () => ({
  parser: false,
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      autoprefixer: {},
      cssnano: {},
      'postcss-nesting': {},
    },
  },
});

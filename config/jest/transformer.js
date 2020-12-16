const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  plugins: [
    ['css-modules-transform', {
      extensions: ['.scss'],
      generateScopedName: '[name]__[local]_[hash:base64:8]',
      camelCase: true,
    }],
  ],
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./rules');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules,
  },

  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/icon.png',
      template: './src/index.html',
    }),
  ],
};

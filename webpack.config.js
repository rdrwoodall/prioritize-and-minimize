const path = require('path');

const HtmlWepackPlugin = require('html-webpack-plugin');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  js: path.resolve(__dirname, 'src/js'),
};

module.exports = {
  entry: path.join(paths.js, 'app.module.js'),
  output: {
    path: paths.dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
  ],
  devtool: 'source-map',
};

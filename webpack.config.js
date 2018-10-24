const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/app')
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: 'Bundle JS (ES5) file with source map'
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src', to: path.resolve(__dirname, 'dist'), ignore: [ 'app/**/*.js' ] }
    ])
  ]
};

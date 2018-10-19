const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'release/app')
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['release']),
    new CopyWebpackPlugin([
      { from: 'src', to: path.resolve(__dirname, 'release'), ignore: [ 'app/**/*.js' ] }
    ])
  ]
};

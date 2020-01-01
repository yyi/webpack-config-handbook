const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  mode: 'development',
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};

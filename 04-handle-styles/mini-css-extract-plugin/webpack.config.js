const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
        'css-loader'
      ],
    },{
      test: /\.html$/,
      use: {
        loader: "html-loader",
        options: {
          attrs: false,
          minimize: false,
          removeComments: false,
          collapseWhitespace: false,
        },
      },
    },],
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  plugins: [
    new htmlPlugin({ title: path.basename(__dirname),template:path.join(__dirname,'./src/index_template.html') }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  devServer: {
    publicPath: '/dist/',
    port: 3000,
  },
};

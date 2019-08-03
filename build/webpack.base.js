var path = require('path');
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    // filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    // library:'RjXhr',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

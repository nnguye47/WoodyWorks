const path = require('path');
// const webpack = require('webpack'); //eslint-disable-line
// const DotEnv = require('dotenv-webpack'); //eslint-disable-line
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  mode: 'development',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: { extensions: ['', '.js', '.jsx'] },
  plugins: [],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test component',
      template: 'index.html'
    })
  ],
  devServer : {
    contentBase: 'src/',
    historyApiFallback: true,
  }
};
// Serves hot files at localhost:8081
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const compiler = webpack({
  mode: 'production',
  entry: './src/js/client.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { // React -> JS, ES6 -> ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // Sass -> Css injected
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
          options: { minimize: true }
        }, "sass-loader"]
      },
      { // Assets -> JS bundle
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, '../src/assets'),
        use: ['file-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
});

module.exports = compiler;


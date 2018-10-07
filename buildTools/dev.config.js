// Serves hot files at localhost:8081
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const htmlWebpackPlugin = require('html-webpack-plugin');

const hostname = "localhost";
const port = 8081;
const webpackBase = 'http://' + hostname + ':' + port + '/';

const config = {
  mode: 'development',
  entry: './src/js/client.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: webpackBase,
    filename: 'dev-bundle.js'
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
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new htmlWebpackPlugin({
      template: './src/js/server/index.html'
    })
  ]
}

const compiler = webpack(config);
const options = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}
const webpackDevServer = new WebpackDevServer(compiler, options);

webpackDevServer.listen(port, hostname, () => {
  console.info('Webpack serving updates at ' + webpackBase + ', remember to build before pushing.');
});
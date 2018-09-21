// Serves hot files at localhost:8081
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const hostname = 'localhost';
const port = 8081;
const webpackBase = 'http://' + hostname + ':' + port;
const env = process.env.NODE_ENV == "production"?"production":'development';

const config = {
  mode: env,
  entry: './src/client.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: webpackBase + '/',
    filename: 'dev-bundle.js'
  },
  module: {
    rules: [
      { // React -> JS, ES6 -> ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      /*{ // SCSS -> CSS in JS bundle
        test: /\.s?css$/i,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, '../src')]
          }
        }]
      },
      { // Assets -> JS bundle
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, '../app/assets'),
        use: ['file-loader']
      },*/
    ]
  },
  plugins: [

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
const devServer = new webpackDevServer(compiler, options);

devServer.listen(port, hostname, () => {
  console.info('Webpack serving updates at ' + webpackBase + ', remember to build before pushing.');
});

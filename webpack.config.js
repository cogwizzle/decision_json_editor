var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  mode: 'development',
  entry: {
    app: APP_DIR + '/app.js',
    sw: APP_DIR + '/sw.js'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react','stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};

module.exports = config;
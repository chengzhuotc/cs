const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
	eslint: {
	  configFile: './.eslintrc'
	},
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, 
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    { 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url?limit=8192&name=image/[name].[ext]',
      exclude: [/node_modules/]
    }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
        title: 'ddd',
        template:'src/index.html',
        inject: true
    })
  ]
};
module.exports = config;
'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;
webpackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: '/',
};

webpackConfig.plugins = [
  new HtmlPlugin(),
  new ExtractTextPlugin('bundle.[hash].css'),
];

webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/, 
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    },
  ],
};

webpackConfig.devtool = 'source-maps';

webpackConfig.devServer = {
  historyApiFallback: true,
};
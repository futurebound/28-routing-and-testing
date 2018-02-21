'use strict';

// this file will be run by node, before webpack does all the compilation stuff
// Node(webpack.config.js) -> Webpack
// before ^^^ happens, we can't use the awesomesauce in ES6 in this file, liek import/exports syntax

const HtmlPlugin = require('html-webpack-plugin'); //helps when using the [hash] things
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); //for the CSS things

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;
webpackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
  publicPath: '/',
};

webpackConfig.plugins = [
  new HtmlPlugin(),
]

webpackConfig.module = {
  rules: [ //which files do we want to process
    {
      test: /\.js$/, // the $ means THE END of the thing, not every. the regex is already the every part
      exclude: /node_modules/,
      loader: 'babel-loader',
    }
  ]
};

webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  historyApiFallback: true, //can keep serving index.js all the time and let react determine wwhat we actually show based on the route we have, pushed to the history object. lets us use back/forth buttons properly
}
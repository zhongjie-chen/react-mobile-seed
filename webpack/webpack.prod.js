const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = merge(webpackBaseConfig, {
  entry: {
      app: [
          path.resolve(__dirname, '../src/index.js')
      ]
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'js/[name].js',
    publicPath: process.env.BETA == 'true' ? '//s.weituibao.com/beta/react-seed/' : '//s.weituibao.com/release/react-seed/'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist/css', 'dist/js'], { root: path.resolve() }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
});

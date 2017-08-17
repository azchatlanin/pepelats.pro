const utils = require('./utils')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base.config')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true
    })
  },
  devtool: '#source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.join('static', 'js/[name].js')
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.join('static', 'css/style.css')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      sourceMap: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
})

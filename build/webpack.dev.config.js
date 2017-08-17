import path from 'path'
import webpack from 'webpack'
import utils from './utils'
import merge from 'webpack-merge'
import baseConfig from './webpack.base.config'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = merge(baseConfig, {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
    watchOptions: {
      aggregateTimeout: 1000,
      poll: 1000
    }
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ],
  module: {
    rules: utils.styleLoaders({ sourceMap: false })
  }
})

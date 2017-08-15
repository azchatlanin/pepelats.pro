const express = require('express')
const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const devConfig = require('../build/webpack.dev.config')

const port = 5000
const app = express()

const compiler = webpack(devConfig)
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: devConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {  
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, () => console.log(chalk.green('>>>'), chalk.yellow('Server listen on port =', port, 'ENV =', process.env.NODE_ENV)))

process.env.NODE_ENV = 'production'

var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var prodConfig = require('./webpack.prod.config')

const spinner = ora('building for production...')
spinner.start()

webpack(prodConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))

  console.log('\n\n')
  console.log(chalk.green('>>>'), chalk.blue('Build complete!'))
  console.log('\n\n')
})

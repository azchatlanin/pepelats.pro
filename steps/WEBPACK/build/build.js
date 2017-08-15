process.env.NODE_ENV = 'development'

const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const prodConfig = require('./webpack.prod.config')

const spinner = ora('building for production...')
spinner.start()

webpack(prodConfig, function(err, stats) {
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
  console.log(chalk.red('>>>'), chalk.yellow('Какая-то важная инфа о сервере'), '\n\n\n')
})
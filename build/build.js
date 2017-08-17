import ora from 'ora'
import chalk from 'chalk'
import webpack from 'webpack'
import prodConfig from './webpack.prod.config'

process.env.NODE_ENV = 'production'

const spinner = ora('building for production...')
spinner.start()

webpack(prodConfig, (err, stats) => {
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

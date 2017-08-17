import ExtractTextPlugin from 'extract-text-webpack-plugin'

const cssLoaders = (options = {}) => {
  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: options.extract,
      sourceMap: options.sourceMap,
      modules: true
    }
  }

  const generateLoaders = (loader) => {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader,
        options: {
          sourceMap: options.sourceMap
        }
      })
    }

    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }

  return {
    css: generateLoaders(),
    styl: generateLoaders('stylus-loader')
  }
}

exports.styleLoaders = (options) => {
  const output = []
  const loaders = cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

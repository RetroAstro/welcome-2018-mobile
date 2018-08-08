
const path = require('path')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = process.env.NODE_ENV === 'production'

exports.assetsPath = function (_path) {
  var assetsSubDirectory = isProd ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
    options = options || {}
  
    var cssLoader = {
      loader: 'css-loader',
      options: {
        minimize: isProd,
        sourceMap: options.sourceMap
      }
    }

    var postcssLoader = {
      loader: 'postcss-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }

    function generateLoaders (loader, loaderOptions) {
      var loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
  
      if (options.extract) {
        return [MiniCssExtractPlugin.loader].concat(loaders)
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
    }

    const stylusOptions = {
      import: [
        path.join(__dirname, "../src/stylus/variable.styl")
      ]
    }

    return {
      // css: generateLoaders(),
      // less: generateLoaders('less'),
      // sass: generateLoaders('sass', { indentedSyntax: true }),
      // scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus', stylusOptions),
      styl: generateLoaders('stylus', stylusOptions)
    }
}

exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
      var loader = loaders[extension]
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loader
      })
    }
    return output
}
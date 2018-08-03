
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    performance: {
      hints: false
    },
    module: {
      rules: utils.styleLoaders({
        sourceMap: config.build.productionSourceMap,
        extract: true,
        usePostCSS: true
      })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
      path: config.build.assetsRoot,
      filename: utils.assetsPath('js/[name].[chunkhash].js'),
      chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      minimizer: [
        new ParallelUglifyPlugin({
          cacheDir: '.cache/',
          uglifyJS: {
            output: {
              comments: false,
              beautify: false
            },
            compress: {
              warnings: false,
              drop_console: true,
              collapse_vars: true,
              reduce_vars: true
            }
          }
        }),    
        new OptimizeCSSPlugin({
          cssProcessorOptions: config.build.productionSourceMap
            ? { safe: true, map: { inline: false } }
            : { safe: true }
        })
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [

      new MiniCssExtractPlugin({
        filename: utils.assetsPath('css/app.[name].css'),
        chunkFilename: utils.assetsPath('css/app.[contenthash:12].css')
      }),

      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: true,
        chunksSortMode: 'dependency',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      }),

      new webpack.optimize.ModuleConcatenationPlugin(),

      new webpack.HashedModuleIdsPlugin(),
  
      // new CopyWebpackPlugin([
      //   {
      //     from: path.resolve(__dirname, '../static'),
      //     to: config.build.assetsSubDirectory,
      //     ignore: ['.*']
      //   }
      // ])
      
    ]
  })
  
  if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
  
    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          config.build.productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }
  
  if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }

  module.exports = webpackConfig

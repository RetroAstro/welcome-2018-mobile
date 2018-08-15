
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const isProd = process.env.NODE_ENV === 'production'

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
    target: 'web',
    entry: resolve('src/index.js'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: isProd ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
          resolve('src'),
          resolve('node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(js|vue)$/,
            //     use: [
            //       {
            //         loader: 'eslint-loader'
            //       }
            //     ],
            //     enforce: 'pre',
            //     include: [resolve('src')],
            //     exclude: /node_modules/
            // },
            {
                test: /\.css$/,
                loader: 'css-loader',
                include: [resolve('node_modules')]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [resolve('src')],
                exclude: /node_modules/,
                options: {
                    loaders: vueLoaderConfig
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                include: resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

const utils = require('./utils')
const config = require('../config')

const isProd = process.env.NODE_ENV === 'production'

const sourceMapEnabled = isProd ? config.build.productionSourceMap : config.dev.cssSourceMap

module.exports = utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProd
})
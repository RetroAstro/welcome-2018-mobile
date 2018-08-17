
const path = require('path')

module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: './',
        productionSourceMap: false,
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report,
        bundleIntelligentDashboard: process.env.npm_config_dashboard
    },
    dev: {
        host: 'localhost',
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        cssSourceMap: true,
        proxyTable: {
            // If the agent's protocol is http, you can configure like this:
            '/api': {
                target: 'http://localhost',
                changeOrigin: true
            },
            // If the proxy protocol is https, you need to configure this:
            '/api': {
                target: {
                  host: 'google.com',
                  protocol: 'https:',
                  port: 443
                },
                changeOrigin: true,
                logLevel: 'info',
                secure: false
            }
        }
    }
}
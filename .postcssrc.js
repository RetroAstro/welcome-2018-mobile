const autoprefixer = require('autoprefixer')
// const pxToViewPort = require('postcss-px-to-viewport')

// 移动端适配时使用vw方案

module.exports = {
  plugins: [
    autoprefixer(),
    // pxToViewPort({
    //     viewportWidth: 750,
    //     viewportHeight: 1334,
    //     unitPrecision: 3,
    //     viewportUnit: 'vw',
    //     selectorBlackList: ['.ignore'],
    //     minPixelValue: 1,
    //     mediaQuery: false
    // })
  ]
}

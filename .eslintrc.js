
module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: 'standard',
    plugins: [
      'html'
    ],
    rules: {
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-undef': 0,
      'comma-dangle': 0,
      'no-dupe-keys': 0
    }
}
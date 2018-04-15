const path = require('path')
const webpack = require('webpack')
console.log(path.resolve(__dirname))
module.exports = {
  entry: {
    entry: './src/assets/js/app.js'
  },
  output:{
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'static/js/[name].[hash].js'
  }
  // plugins: {
  //    new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     },
  //     sourceMap: true
  //   })
  // }
}
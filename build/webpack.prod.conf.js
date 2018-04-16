const merge = require('webpack-merge');
const basicWebpackConfig = require('./webpack.config.js');

const productWebpackConfig = merge(basicWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'static/js/[name].[hash].js'
  }
});


module.exports = productWebpackConfig
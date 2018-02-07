const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  devServer: {
    contentBase: 'dist',
    publicPath: 'dist',
    port: 9000,
    watchContentBase: true,
    hot: false
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mySite',
      template: 'src/index.html',
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['bundle.js']
    }),
    new ExtractTextWebpackPlugin('styles.css'),
    new StyleExtHtmlWebpackPlugin({ // Remove in dev
      minify: false
    }),
  ]
};
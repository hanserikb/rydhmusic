const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mySite',
      templates: 'assets/index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['bundle.js']
    }),
    new ExtractTextWebpackPlugin('styles.css'),
    new StyleExtHtmlWebpackPlugin({ // Remove in dev
      minify: false
    }),
  ]
};
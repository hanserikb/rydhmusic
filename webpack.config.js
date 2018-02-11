const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: 'public',
    host: 'localhost',
    port: 9000,
    overlay: true
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextWebpackPlugin.extract('css-loader!postcss-loader')},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader?interpolate'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'mySite',
      template: 'src/index.html',
      alwaysWriteToDisk: true,
      svgoConfig: {
        cleanupAttrs: false
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: ['bundle.js']
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'public')
    }),
    new ExtractTextWebpackPlugin('styles.css'),
    new StyleExtHtmlWebpackPlugin({ // Remove in dev
      minify: false
    }),
    new BrowserSyncPlugin(
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:9000/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      })
  ]
};
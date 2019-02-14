const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('../helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'main': './src/main.ts',
    },
    
    output: {
        publicPath: '',
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'/*,
        TODO setup when REST service ready
        proxy: {
            '/api/**': {
                target: 'http://localhost:8080/your-rest-service',
                secure: false,
                changeOrigin: true
            }
        }*/
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
    ]
  }
});
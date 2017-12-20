const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function () {
  return webpackMerge(webpackConfigBase(), {
    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, './dist'),
    },
    devtool: 'source-map',
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      }),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          unused: true,
          dead_code: true
        },
        sourceMap: true
      }),
      new CopyWebpackPlugin([
        { from: 'web.config' },
        { from: 'assets/', to: 'assets/' }
      ])
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader?module=es6'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?minimize!postcss-loader'
            ]
          })
        },
      ]
    }
  });
};

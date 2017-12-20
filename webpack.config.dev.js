const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackConfigBase = require('./webpack.config.base.js');

module.exports = function () {
  return webpackMerge(webpackConfigBase(), {
    output: {
      filename: '[name].[hash].bundle.js',
      publicPath: 'http://localhost:8181/',
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      host: 'localhost',
      port: '8181',
      hot: true,
      stats: {
        warnings: false
      },
      proxy: {
        "/v1*": "http://localhost:3001"
      }
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'react-hot-loader/webpack',
            'awesome-typescript-loader'
          ],
          exclude: path.resolve(__dirname, 'node_modules'),
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        }
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
      new webpack.NamedModulesPlugin(),
    ],
  });
};

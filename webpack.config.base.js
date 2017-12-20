const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
  return {
    entry: ['./src/index.tsx'],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      mainFields: ['module', 'browser', 'main'],
      modules: [
        path.resolve(__dirname, './src'),
        'node_modules'
      ],
      alias: {
        api: path.resolve(__dirname, 'src/api'),
        components: path.resolve(__dirname, 'src/components'),
        constants: path.resolve(__dirname, 'src/constants'),
        containers: path.resolve(__dirname, 'src/containers'),
        enums: path.resolve(__dirname, 'src/enums'),
        models: path.resolve(__dirname, 'src/models'),
        screens: path.resolve(__dirname, 'src/screens'),
        stores: path.resolve(__dirname, 'src/stores'),
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Key Watcher Admin',
        template: path.join(__dirname, './index.ejs'),
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          exclude: /(node_modules)/,
          options: {
            failOnHint: true
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'assets/images/[name].[hash].[ext]',
              }
            }
          ]
        }
      ]
    },
  };
};

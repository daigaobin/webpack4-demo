const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', //设置模式为开发者模式
  entry: './src/index.js',
  devtool: 'inline-source-map', //https://www.webpackjs.com/configuration/devtool/
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    hot: true // 热更新
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清空dist目录
    new HtmlWebpackPlugin({ // index.html模版
      title: 'Output Management'
    }),
    /* 热更新HMR */
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    /* new webpack.optimize.CommonsChunkPlugin({ // 公共模块抽离
      name: 'common' // 指定公共 bundle 的名称。
    }) */
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }/* , {
      test: /\.(csv|tsv)$/,
      use: [
        'csvloader'
      ]
    },
    {
      test: /\.xml$/,
      use: [
        'xmlloader'
      ]
    } */]
  }
};
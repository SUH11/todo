const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
      path: __dirname + "/build",//打包后的文件存放的地方
      filename: "bundle-[hash].js"//打包后输出文件的文件名
  },
  devtool: "none",
  devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
  },
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
          }
      ]
  },
  plugins: [
      new webpack.BannerPlugin('suhong版权所有， 翻版必究！'),
      new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin("style.css"),
      new CleanWebpackPlugin('build/*.*', {
        root: __dirname,
        verbose: true,
        dry: false
      })
  ]
};

















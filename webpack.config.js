const HtmlWebPackPlugin = require("html-webpack-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let webpack = require('webpack');
let path = require('path')

const config = require('./config')

module.exports = {
  entry: './src/index.js',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/, // 解析自己写的css
        include: path.join(__dirname, 'src'), //限制范围，提高打包速度
        use: [ // 从 postcss-loader -> css-loader -> style-loader 解析
          'style-loader', 
          config.cssModules ?  { loader: 'css-loader', options: { modules: true } }: 'css-loader',
          'postcss-loader'
        ] 
      }, {
        test: /\.css$/, // 解析css
        include: /node_modules/, //antd等库
        use: [ 
          'style-loader', 
          'css-loader',
          'postcss-loader'
        ] 
      }, {
        test: /\.less$/, // 解析自己写的less
        include: path.join(__dirname, 'src'), 
        use: [
          'style-loader', 
          config.cssModules ?  { loader: 'css-loader', options: { modules: true } }: 'css-loader',
          'postcss-loader', 
          'less-loader'
        ]
      }, {
        test: /\.less$/, 
        include: /node_modules/, //antd等库
        use: [ 
          'style-loader', 
          'css-loader',
          'postcss-loader'
        ] 
      }, /*{
        test: /\.scss$/, // 解析scss
        include: path.join(__dirname, 'src'), 
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }, */{ // 字体
        test: /\.(woff2|woff|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[hash:7].[ext]',
        }
      },{ // 图片
        test: /\.(png|jpg|jpeg|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/images/[name].[hash:7].[ext]',
              limit: 20000 //把小于 20kb 的文件转成 Base64 的格式
            }
          }
        ]
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    // host: 'localhost',      // 默认是localhost
    port: config.port,             // 端口
    open: true,             // 自动打开浏览器
    hot: true,               // 开启热更新
    disableHostCheck: true
  },

  output: {
    // 1. filename: 'bundle.js',
    // 2. [name]就可以将出口文件名和入口文件名一一对应
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    // html
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      hash: true, // 会在打包好的bundle.js后面加上类似于: ?6ce91c19b9054fff5a05 串
    }),
    
    new webpack.HotModuleReplacementPlugin()
  ]
};
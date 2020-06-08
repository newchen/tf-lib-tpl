var path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// 可以避免把 node_modules 里面的依赖包引入打包文件
const nodeExternals = require('webpack-node-externals');

// 驼峰转换
function camel2Dash(str) {
    return str.replace(/\-(\w)/g, function(m, $1) {
        return $1.toUpperCase()
    })
}
const moduleName = require('./package.json').name
const camelComponentName = camel2Dash(moduleName)
const libraryName = camelComponentName.replace(/^([a-z])/, (m) => m.toUpperCase())
const config = require('./config')

let name = 'index';
let isMini = process.env.npm_lifecycle_event == 'mini' ? true : false;
let entryName = isMini ? `${name}.min` : `${name}`;

module.exports = {
    mode: isMini ? 'production' : 'development',

    entry: {
        [entryName]: './src/component/index'
    },

    devtool: isMini ? '': 'source-map',

    output: {
        path: path.resolve(__dirname, `lib/${moduleName}`),
        filename: '[name].js',
        library: libraryName,
        libraryTarget: 'umd'
    },

    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true 
          }),
        //   new OptimizeCSSAssetsPlugin()  // use OptimizeCSSAssetsPlugin
        ]
    },

    externals: [nodeExternals({
        whitelist: config.whitelist
    })],

    module: {
        rules: [
            { 
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {  
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, // 解析css
                include: path.join(__dirname, 'src'), 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/, // 解析css
                include: /node_modules/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/, // 解析less
                include: path.join(__dirname, 'src'), 
                use: [
                    MiniCssExtractPlugin.loader,

                    config.cssModules 
                        ?  { 
                            loader: 'css-loader', 
                            options: { 
                                modules: true,
                                localIdentName: '[name]__[local]--[hash:base64:5]' 
                            } 
                        }
                        : 'css-loader',

                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.less$/, // 解析less
                include: /node_modules/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            /*{
                test: /\.scss$/, // 解析sass
                include: path.join(__dirname, 'src'), 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },*/
            {
                test: /\.(woff2|woff|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'assets/fonts/[name].[hash:7].[ext]',
                }
            },
            {
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

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    plugins: [
        // 打包前先清空
        // new CleanWebpackPlugin(),
        new OptimizeCSSAssetsPlugin(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style/index.css",
            chunkFilename: "[id].css"
        }),
        
        // 复制插件
        new CopyWebpackPlugin([
            { 
                from: path.join(__dirname,'src/component/index.less'), 
                to:  path.join(__dirname, `lib/${moduleName}/style/index.less`) 
            }
        ]),
        new CopyWebpackPlugin([
            { 
                from: path.join(__dirname,'src/component/import/'), 
                to:  path.join(__dirname, `lib/${moduleName}/style/`) 
            }
        ])
    ]
}


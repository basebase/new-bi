/**
 * Created by Joker on 18/12/9.
 */

// 引入webpack
const webpack = require('webpack')
// 打开浏览器
const open = require('open')
// webpack配置文件合并
const merge = require('webpack-merge')
const path = require('path')

// 基础配置
const baseWebpackConfig = require('./webpack.base.conf')
// 一些路径配置
const webpackFile = require('./webpack.file.conf')


let config = merge(baseWebpackConfig, {

    // 设置开发环境
    mode: 'development',
    output: {
        path: path.resolve(webpackFile.devDirectory),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: ''
    },

    plugins: [
        // 设置热更新
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../entryBuild")
                ],
                exclude: [
                    path.resolve(__dirname, "../node_modules")
                ]
            },

            {
                test: /\.(css|pcss)$/,
                loader: 'style-loader?sourceMap!css-loader?sourceMap!postcss-loader?sourceMap',
                // exclude: /node_modules/
            },

            {
                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=' + webpackFile.resource + '/'
            }
        ]
    },

    // api转发
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        // proxy: [
        //     {
        //         context: ['/api/**', '/u/**'],
        //         target: 'http://192.168.12.100:8080/',
        //         secure: false
        //     }
        // ],

        // 打开浏览器 并打开本项目网址
        after() {
            open('http://localhost:' + this.port);
        }
    }

})

module.exports = config
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.log(path)


module.exports = {

    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        /* 
                          @babel/plugin-transform-runtime配合@babel/runtime-corejs2使用，可以不用引入@babel/polyfill
                          @babel/polyfill 会导致全局污染 
                        */
                        ['@babel/plugin-transform-runtime',{
                            corejs:2
                        }]
                       /*  "@babel/plugin-syntax-dynamic-import",
                        ["@babel/plugin-proposal-decorators", { "legacy": true }] */
                    ]
                    //@babel/plugin-syntax-dynamic-import插件可以实现动态加载功能，可用于代码分割.
                    //@babel/plugin-proposal-decorators 装饰器模式
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
    ],
    //mode:"development"
    mode:"production"
}
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack")
const path = require('path')

const webpackPro = {
    entry: ['./src/index.jsx'],
    mode: 'production',
    externals: {
        "systemRouter": {
            commonjs: "systemRouter", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
            commonjs2: "systemRouter", //同上
            amd: "systemRouter", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
            root: "systemRouter" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = merge(webpackConfig, webpackPro);
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const webpack = require("webpack")
const path = require('path')

const webpackPro = {
    entry: ['./src/views/systemModule/router.jsx'],
    output: {
        path: path.resolve(__dirname, 'system'),
        filename: 'systemRouter.js',
        libraryTarget: 'umd',
        library: 'systemRouter'
    },
    // externals: {
    //     "react": {
    //         commonjs: "react", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //         commonjs2: "react", //同上
    //         amd: "react", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //         root: "react" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     },
    //     "react-router": {
    //         commonjs: "react-router", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //         commonjs2: "react-router", //同上
    //         amd: "react-router", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //         root: "react-router" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     },
    //     "react-router-dom": {
    //         commonjs: "react-router-dom", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //         commonjs2: "react-router-dom", //同上
    //         amd: "react-router-dom", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //         root: "react-router-dom" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     },
    //     "react-router-config": {
    //         commonjs: "react-router-config", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //         commonjs2: "react-router-config", //同上
    //         amd: "react-router-config", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //         root: "react-router-config" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     },
    //     "antd": {
    //         commonjs: "antd", //如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
    //         commonjs2: "antd", //同上
    //         amd: "antd", //如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
    //         root: "antd" //如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
    //     }
    // },
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

module.exports = merge(webpackConfig, webpackPro);
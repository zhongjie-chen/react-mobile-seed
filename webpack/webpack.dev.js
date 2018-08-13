const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('open-browser-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

module.exports = merge(webpackBaseConfig, {
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8001',
            'webpack/hot/only-dev-server',
            path.join(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'public/'),
        filename: 'js/[name].dev.js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        quiet: true,
        compress: true, // gzip压缩
        contentBase: path.join(__dirname, '../'),
        publicPath: '/',
        historyApiFallback: true,
        host: 'localhost',
        port: 8001,
        proxy: {
        '/': {
            target: 'http://localhost:3008/', // 将网页代理到koa启动的服务端口，开发环境下的静态资源在内存中，可以直接通过/css/app.css取到
            secure: false,
            bypass: (req) => {
                if (req.url.indexOf('vendor.min.js') !== -1) {
                return '/dist/vendor/vendor.min.js';
                }
            }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new WebpackBrowserPlugin({
            url: 'http://localhost:8001',
        }),
        new DashboardPlugin(dashboard.setData),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/vendor/manifest.json'),
        })
    ]
});

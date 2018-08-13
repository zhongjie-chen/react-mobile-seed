const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const theme = require('../src/static/theme');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

const postcssOpts = {
    ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
    plugins: () => [
        autoprefixer({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({ rootValue: 75, propWhiteList: [] })
    ],
};

module.exports = {
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', { loader: 'postcss-loader', options: postcssOpts }]
            })),
        },{
            test: /\.less$/,
            loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', { loader: 'postcss-loader', options: postcssOpts }, { loader: 'less-loader', options: theme }]
            }))
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    }
};

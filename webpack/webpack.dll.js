const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'antd-mobile',
        ]
    },
    output: {
        path: path.join(__dirname, '../dist/vendor/'),
        filename: '[name].min.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, '../dist/vendor/manifest.json'),
            name: '[name]',
            context: __dirname
        }),
        // new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: false
            }
        }),
    ],
};

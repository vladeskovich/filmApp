const commonConfig = require('./common');
const {merge} = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        overlay: true
    },
    devtool: 'source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()]
})


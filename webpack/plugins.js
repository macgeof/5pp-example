const _MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename:  'css/[name].css',
    chunkFilename:   'css/[id].css'
});

module.exports = {
    MiniCssExtractPlugin,
    MiniCssExtractPluginLoader: _MiniCssExtractPlugin.loader
};
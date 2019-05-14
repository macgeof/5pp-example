// Entry point -> output
const path = require('path');
const plugins = require('./plugins');
const loaders = require('./loaders');
const APP_DIR = path.resolve(__dirname, "../src/");
module.exports = (__env)=>{
    console.log(`env: ${__env}`);
    const _isProduction = __env === 'production';
    return {
        entry: APP_DIR + '/app.js',
        mode: 'development',
        output:{
            path: path.join(__dirname, '..', 'public'),
            filename: 'bundle.js'
        },
        module:{
            rules:[
                loaders.BabelLoader,
                loaders.CSSLoader
            ]
        },
        stats: {
            warnings: _isProduction? false : true
        },
        plugins: [
            plugins.MiniCssExtractPlugin
        ],
        devtool: _isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'..', 'public'),
            historyApiFallback: true
        }  
    };
}





const plugins = require('./plugins');

  const BabelLoader = { 
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
            presets:[
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "node": "10"
                    }
                  }
                ],
                '@babel/preset-react'
            ]
        }
    }

  const CSSLoader = {
    test: /\.(scss|css|eot|svg|ttf|woff|jpg|png)$/,
    use: [
        {
            loader: plugins.MiniCssExtractPluginLoader
        },
        {
            loader: 'css-loader',
            options:{
                importLoaders:1,
                sourceMap: true,
                url: false
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true ,
                config: {
                path: __dirname + '/postcss.config.js'
                }
            }
        },
        
        {
            loader: 'sass-loader',
            options:{
                url: false,
                sourceMap: true
            }
        } 
    ]
  };
  module.exports ={
    BabelLoader,
    CSSLoader
  }
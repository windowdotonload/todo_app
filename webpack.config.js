const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin");
const vueLoaderPlugin = require("vue-loader/lib/plugin.js");
const webpack = require('webpack');
const resolve = dir => path.resolve(__dirname, dir);
const { postcss } = require('autoprefixer');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html",
        }),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_DEV:isDev ? '"development"' : '"production"' 
            }
        }),
        new vueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@': resolve('src')
        }
    },
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.(png|jpg|ttf)$/,use:"url-loader"},
            {test:/\.vue$/,use:"vue-loader"},
            {test:/\.styl$/,use:['style-loader',"css-loader",{loader:'postcss-loader',options:{sourceMap:true}},"stylus-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.jsx$/,use:"babel-loader"} 
        ]
    }
}





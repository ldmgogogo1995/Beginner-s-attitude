const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    devtool:false,
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].[hash:5].js'
    },
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,'dist'),
        historyApiFallback:{//browserHash 刷新重定向到index.html
            index:'./index.html'
        }
    },
    resolve:{
        extensions:[".ts",".tsx",".js",".json"],
        alias:{
            "@":path.resolve("src")
        }
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.[hash:5].html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
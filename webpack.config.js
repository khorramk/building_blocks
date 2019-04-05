const path = require('path');
const webpack = require('webpack');
const includePath = path.resolve(__dirname, '..');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            /*{
                test: /\.(svg|png|jpg)$/i,
                use: [
                    
                        {loader: 'url-loader',
                        options: {
                            limit: 8220
                        }
                }*/
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                include: includePath,
                use: 'url-loader'
            }
            
        ]
    }
};

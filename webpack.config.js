var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
console.log(1111111111111111111111111111111111)
module.exports = {
    entry: {
        'first/index': path.join(__dirname, 'src/first', 'index.js'),
        'second/index': path.join(__dirname, 'src/second', 'index.js'),
        // app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'first/index.html',
            template: './src/first/index.html',
            inject: true,
            hash: true,
            chunks:['first/index']
        }),
        new htmlWebpackPlugin({
            filename: 'second/index.html',
            template: './src/second/index.html',
            inject: true,
            hash: true,
            chunks:['second/index']
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '/404.html'}
            ]
        },
        overlay: true
    }
}
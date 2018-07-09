var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var glob = require('glob')
// vue-loader 15.* 之后的版本，都需要伴生VueLoaderPlugin
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var globEntryReg = './src/modules/*/index.js'
var globHtmlPluginsReg = './src/modules/*/index.html'
module.exports = {
    mode: 'development',
    entry: {
        ...getEntry(globEntryReg)
        // app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '/404.html'}
            ]
        },
        overlay: true,
        port: 8999
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    }
}

function getEntry(globReg) {
    var entries = {}
    var basename, tmp, pathname;
    glob.sync(globReg).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        var tmp = entry.split('/').splice(-2);
        var pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    })
    return entries
}

getHtmlPlugins(globHtmlPluginsReg)

function getHtmlPlugins(globReg) {
    var entries = {}
    var basename, tmp, pathname;
    glob.sync(globReg).forEach(function (entry) {
        basename = path.basename(entry, path.extname(entry));
        var tmp = entry.split('/').splice(-2);
        var pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        var obj = {
            filename: pathname + '.html',
            template: entry,
            inject: true,
            hash: true,
            chunks: [pathname]
        }
        module.exports.plugins.push(new htmlWebpackPlugin(obj))
    })
}
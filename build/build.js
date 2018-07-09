// https://github.com/shelljs/shelljs
require('shelljs/global')

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.prod.js')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()
console.log(
    'start.....................'
)
var assetsPath = '/'
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath + 'static')
console.log(
    'start.....................'
)
webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    console.log(
        'end.....................'
    )
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})

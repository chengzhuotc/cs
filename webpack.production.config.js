require('shelljs/global')
const path = require('path');
const config = require('./webpack.config')
const assetsPath = path.resolve(__dirname, 'dist')

rm('-rf', assetsPath)
config.entry.app=path.resolve(__dirname, 'src/main.js')
config.entry.vendors=['vue']
config.output.vendors='app.js'
config.output.publicPath= ''

module.exports = config;

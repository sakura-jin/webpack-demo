const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
//     plugins: [
//       new UglifyJsPlugin()
//     ]
// }

module.exports = merge(base,{
    plugins: [
        new UglifyJsPlugin()
      ]
})
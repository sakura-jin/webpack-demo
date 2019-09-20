const merge = require('webpack-merge');
const base = require('./webpack.base.js');

// module.exports = {
//     devServer: {
//       contentBase: './dist',
//       inline:true,
//       port: 9000
//     }
// }

module.exports=merge(base,{
    devServer: {
        contentBase: './dist',
        inline:true,
        port: 9000
      }
})
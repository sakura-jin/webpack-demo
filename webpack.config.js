const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:''
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name:'images/[name][hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
          
        ]
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    },
    plugins: [
      // 请确保引入这个插件！
      new VueLoaderPlugin(),
      new webpack.BannerPlugin("出自sakura"),
      new HtmlWebpackPlugin({
        template:'index.html'
      }),
      new UglifyJsPlugin()
    ]
}
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

// 清空打包目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 复制静态资源的插件

// // 生成html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const glob = require('glob')
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const base = require('./webpack.base.js');
const config = require('./config.js')

function assetsPath (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'test'
    ? config.test.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

var htmls = glob.sync('./src/*.html').map(function (item) {
  return new HtmlWebpackPlugin({
    template: item,
    filename: './' + item.slice(6),
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    // chunks:[item.slice(6, -5), 'common'],
    chunks: [item.slice(6, -5)],
    hash: true // 防止缓存
  });
});

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: assetsPath('js/[name].[chunkhash].js'),
    path: config.test.assetsRoot
  },
  module: {
    rules: []
  },
  plugins: htmls.concat([
    // 定义 JS中常量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': config.test.env.NODE_ENV,
      API_BASE_URL: JSON.stringify('http://api.ambright.dev.eduugo.com')
    }),

    new CleanWebpackPlugin(),

    // 复制资源
    // new CopyWebpackPlugin([
    //     {
    //         from: path.resolve(__dirname, '../src/assets'),
    //         to: config.test.assetsSubDirectory,
    //         ignore: ['.*']
    //     }
    // ]),

    // 提取css
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css'),
      chunkFilename: '[id].css'
    }),

    // new OptimizeCSSPlugin({
    //     cssProcessorOptions: {
    //         safe: true
    //     }
    // }),

    // 删除多余的代码
    // new PurifyCSSPlugin({
    //     paths: glob.sync(path.join(__dirname, '../src/*.html'))
    // }),

    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false, // 不需要格式化
          comments: false // 不保留注释
        },
        compress: {
          drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    })

  ])
});

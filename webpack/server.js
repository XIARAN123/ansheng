const config = require('./config.js')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const express = require('express')
const request = require('request')

require('console-stamp')(console, 'HH:MM:ss.l');

const app = express()

const port = process.env.PORT || 3001

app.use(require('morgan')('short'));

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
});

// ************************************
// This is the real meat of the example
// ************************************
(function () {
  const uri = 'http://localhost:' + port

  // Step 1: Create & configure a webpack compiler
  const webpack = require('webpack');
  const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.dev');
  const compiler = webpack(webpackConfig);

  const options = {
    logLevel: 'warn',
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    publicPath: webpackConfig.output.publicPath,
    quiet: true
  };

  const devMiddleware = require('webpack-dev-middleware')(compiler, options)

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })

  app.use(require('connect-history-api-fallback')())

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(devMiddleware)

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(hotMiddleware)

  console.log('> Starting dev server...')
  devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    _resolve()
  })
})();

// 增加代理转发
app.use('/api/*', function (req, res) {
  const url = 'http://api.ambright.dev.eduugo.com' + req.baseUrl
  const url2 = 'http://api.ambright.dev.eduugo.com' + req.originalUrl

  // 这个 pipe 是 Stream 里面的方法
  // 把一个 readable stream 的所有数据写入到另一个 writable stream 里面去
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('[POST] api: ', url)
    req.pipe(request[req.method.toLowerCase()](url, {
      body: JSON.stringify(req.body)
    }), {
      end: false
    }).pipe(res)
  } else if (req.method === 'GET' || req.method === 'DELETE') {
    console.log('[GET] api: ', url2)
    // console.log(req.query)
    req.pipe(request[req.method.toLowerCase()](url2)).pipe(res)
  }
})

// Serve the files on port 3000.
var server = app.listen(port, function () {
  console.log('Example app listening on port 3000!\n')
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

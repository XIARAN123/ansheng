const path = require('path');
const fs = require('fs');
const toml = require('@iarna/toml');
const replaceStream = require('replacestream');

// 创造新的 'js' 文件
function init(appName, src_file, to_file) {
  return new Promise(
    // The resolver function is called with the ability to resolve or
    // reject the promise
    function (resolve, reject) {
      var readStream = fs.createReadStream(path.join(__dirname, 'src', src_file))
        .pipe(replaceStream('%project%', appName));
      var writeStream = fs.createWriteStream(path.join(__dirname, 'src', to_file));

      readStream.on('data', function (chunk) { // 当有数据流出时，写入数据
        if (writeStream.write(chunk) === false) { // 如果没有写完，暂停读取流
          readStream.pause();
        }
      });

      writeStream.on('drain', function () { // 写完后，继续读取
        readStream.resume();
      });

      readStream.on('end', function () { // 当没有数据时，关闭数据流
        writeStream.end();
        resolve(true);
      });
    });
};

async function asyncReadFile() {
  const filesRes = fs.readFileSync(__dirname + '/configuration.toml', 'utf-8');
  const confObj = toml.parse(filesRes)
  global.configuration = confObj; // 加到node全局变量中，便于全局访问

  global.configuration.entryFiles.reduce(async function (prev, curr) {
    await init('demo', 'index.html', `${curr}.html`);

    // let jsFile = `${global.configuration.entryDirectory}/${curr}.js`
    // if (process.env.NODE_ENV === 'development') {
    //     prev[curr] = [jsFile, hotMiddlewareScript];
    // } else {
    //     prev[curr] = [jsFile];
    // }
    return prev;
  }, {});
}

asyncReadFile()
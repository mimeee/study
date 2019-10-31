const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const app = express();

var options = {
    etag: true,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.get('/', function(req, res){
    res.send('3366端口服务已启动');
});

app.use(express.static('dist', options));
  
const httpsOptions = {
    key:fs.readFileSync('./server.key'),
    cert:fs.readFileSync('./server.cert'),
    requestCert: false,
    rejectUnauthorized: false
}

http.createServer(app).listen(3367, () => {
    console.log('http 3367端口已启动！！！')
});
https.createServer(httpsOptions, app).listen(3366, () => {
    console.log('https 3366端口已启动！！！')
});
// app.listen(3366, () => {
//     console.log('3366端口已启动！！！')
// });


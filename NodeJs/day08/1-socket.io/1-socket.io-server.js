// socket 服务器
const express = require('express');
const app = express();
const http = require('http');
//创建web服务器 并且注入express
app.use('/client',express.static(__dirname+'/2-socket.io-client'))
const server = http.createServer(app);
const io = require('socket.io')(server);
// socket.io 事件
io.on('connection',(clientSocket)=>{
  console.log('有人连接上了...');
})
server.listen(8081,()=>{
  console.log('server start on 8081...')
})
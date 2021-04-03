// socket 服务器
const express = require('express');
const app = express();
const http = require('http');
//创建web服务器 并且注入express
app.use('/client', express.static(__dirname + '/2-socket.io-client'))
const server = http.createServer(app);
const io = require('socket.io')(server);
// socket.io 事件
io.on('connection', (clientSocket) => {
    console.log('有人连接上了...');
    clientSocket.on('come', (content) => {
        //content 接受的是emit方法中的第二个参数
        console.log(content)
            //某某人上线了的消息广播给目前在线人员,除了自己
        clientSocket.username = content.username; //当前客户端
        //触发客户端systemInfo 事件
        clientSocket.broadcast.emit('systemInfo', clientSocket.username + '进入了聊天室')
        clientSocket.emit('systemInfo', '成功进入聊天室') // 向当前客户端发送系统消息
    })
    clientSocket.on('chating', (msg) => {
        clientSocket.broadcast.emit('serveChating', clientSocket.username + '说:' + msg)
        clientSocket.emit('serveChating', '我说：' + msg)
    })
    clientSocket.on('disconnect', () => {
        console.log('有人下线了...')
    })

})
server.listen(8081, () => {
    console.log('server start on 8081...')
})
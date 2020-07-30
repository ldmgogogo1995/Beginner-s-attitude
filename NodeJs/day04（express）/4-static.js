const express = require('express');
const app = express() //创建一个web应用实例
//绑定web服务器端口

app.get('/', (req, res) => {
  console.log(req, res)
  res.send('欢迎进入互联网世界')
})
//express.static() 设置静态目录

// app.use('/public',express.static('./public'))

//设置绝对路径 避免程序上线后路劲不和本地开发一致出问题
app.use('/public', express.static(__dirname + '/public'))
//get( ) lisen()
app.listen(3000, () => {
  console.log('server start on 3000')
})
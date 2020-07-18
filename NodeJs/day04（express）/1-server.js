const express = require('express');
const app = express()//创建一个web应用实例
//绑定web服务器端口
app.listen(3000, () => {
  console.log('server start on 3000')
})
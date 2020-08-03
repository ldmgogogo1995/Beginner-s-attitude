const express = require('express');
const app = express() //创建一个web应用实例
    //绑定web服务器端口
    //get( ) lisen()
app.get('/', (req, res) => {
    console.log(req, res)
    res.send('欢迎进入互联网世界')
})
app.get('/shop', (req, res) => {
    res.send({
        'list': {
            'shopName': 'Nike shoes'
        }
    })
})

app.listen(3000, () => {
    console.log('server start on 3000')
})
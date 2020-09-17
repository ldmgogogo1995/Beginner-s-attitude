 const express = require('express')
 const app = express()
 const port = 3000
 const userRoter = require('./router/user')
 const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({
         extended: false
     }))
     //可以接受json格式的数据
 app.use(bodyParser.json({
     extended: false
 }))
 app.use('/user', userRoter) //绑定路由规则
     //可以接受到x-www-form-urlencode格式的数据

 app.listen(port, () => console.log('start on 3000...'))
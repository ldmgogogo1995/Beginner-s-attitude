 const express = require('express')
 const mysqlConfig = require('./config')
 const app = express()
 const port = 3000
 const mysql = require('mysql')
 const db = mysql.createConnection(mysqlConfig)
 module.exports = db
 db.connect((err) => {
     try {
         if (!err) {
             console.log('连接数据库成功')
         }
     } catch (err) {
         console.log('连接失败，因为：', err)
     }
 })

 const userRoter = require('./router/user')
 const shopRoter = require('./router/shop')
 const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({
         extended: false
     }))
     //可以接受json格式的数据
 app.use(bodyParser.json({}))
 app.use('/user', userRoter) //绑定路由规则

 app.use('/shop', shopRoter) //绑定路由规则
     //可以接受到x-www-form-urlencode格式的数据

 app.listen(port, () => console.log('start on 3000...'))
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
     //  app.all("*", function(req, res, next) {
     //      //设置允许跨域的域名，*代表允许任意域名跨域
     //      res.header("Access-Control-Allow-Origin", "*");
     //      //允许的header类型
     //      res.header("Access-Control-Allow-Headers", "content-type");
     //      //跨域允许的请求方式 
     //      res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
     //      if (req.method.toLowerCase() == 'options')
     //          res.send(200); //让options尝试请求快速结束
     //      else
     //          next();
     //  })
 app.use(bodyParser.urlencoded({
         extended: false
     }))
     //可以接受json格式的数据
 app.use(bodyParser.json({}))
 app.use('/user', userRoter) //绑定路由规则

 app.use('/shop', shopRoter) //绑定路由规则
     //可以接受到x-www-form-urlencode格式的数据

 app.listen(port, () => console.log('start on 3000...'))
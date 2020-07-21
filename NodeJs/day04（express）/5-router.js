//路由 
const express = require('express');
const router = require('./5-routers/user');
const app = express()//创建一个web应用
const userRouter = require(__dirname+'/5-routers/user')
console.log(__dirname,'__dirname')
//路由的使用 express.Router()

//1、建路由规则
//2、绑定路由


app.listen(3000,()=>{
  console.log('server start on 3000')
})
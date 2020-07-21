//中间件的使用
const express = require('express');
const app = express()
//app.use(路径,(req,res,next)=>{}) //定义的局部中间件
//app.use((req,res,next)=>{})//定义全局中间件
// app.use((req,res,next)=>{
//   console.log('我是全局中间件，当请求任何路劲的时候都将执行当前回调函数')
//   next()
// })
//假设默认登录过
const isLogin = false
app.use('/api', (req, res, next) => {
  if (!isLogin) {
    res.send({ error: -1, msg: '请先登录' })
    return
  }
  console.log('我是局部中间件，当请求任何api接口的时候都将执行当前回调函数')
  next()
})
app.use('/user',(req,res,next)=>{
  console.log('user1')
  next()
},(req,res,next)=>{
  console.log('user2')
  next()
})
//用户添加接口
app.get('/user/add',(req,res)=>{
  res.send({error:0,msg:'添加用户接口'})
})
app.get('/', (req, res) => {
  res.send({ error: 0, msg: 'home page' })
})
app.get('/api', (req, res) => {
  res.send({ error: 0, msg: 'api 接口' })
})
app.listen('8081', () => {
  console.log('server start on 8081')
})
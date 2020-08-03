const express = require('express');

const app = express()
const userRouter = require('./routes/user')
//user 接口
app.use('/user',userRouter)





















app.listen('8080',()=>{
  console.log('server start on 8080...')
})
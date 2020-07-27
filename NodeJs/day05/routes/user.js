const router  = require('express').Router()
 router.get('/list',(req,res)=>{
   res.send({error:0,msg:'获取用户列表成功'})
 })
 router.post('/add',(req,res)=>{
  res.send({error:0,msg:'添加用户成功'})
})
router.put('/edit',(req,res)=>{
  res.send({error:0,msg:'修改用户成功'})
})
router.delete('/delete',(req,res)=>{
  res.send({error:0,msg:'删除用户成功'})
})
module.exports = router
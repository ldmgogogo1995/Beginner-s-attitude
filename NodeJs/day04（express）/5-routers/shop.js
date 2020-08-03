const router = require('express').Router()
//请求文章列表
router.get('/list', (req, res) => {
  res.send({ error: 0, msg: '文章列表' })
})
router.post('/add', (req, res) => {
  res.send({ error: 0, msg: '文章添加' })
})
router.delete('/del', (req, res) => {
  res.send({ error: 0, msg: '文章删除' })
})
router.put('/edit', (req, res) => {
  res.send({ error: 0, msg: '文章修改' })
})
module.exports = router
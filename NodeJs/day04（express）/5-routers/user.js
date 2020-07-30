const router = require('express').Router() // 引入路由


// 用户模块(注册、登录、修改、删除)
router.get('/registry', (req, res) => {
  res.send({ error: 0, msg: '用户注册' })
})
router.post('/login', (req, res) => {
  res.send({ error: 0, msg: '登录' })
})
router.post('/edit', (req, res) => {
  res.send({ error: 0, msg: '修改' })
})
router.post('/del', (req, res) => {
  res.send({ error: 0, msg: '删除' })
})
module.exports = router

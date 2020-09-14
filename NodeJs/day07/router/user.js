//1  建立路由规则
const express = require('express')
const router = express.Router() //引入路由


//用户模块(注册、登录、修改、删除)
router.get('/login', (req, res) => {
    console.log(req, '登录参数')
    res.send({
        error: 0,
        msg: '登陆成功'
    })

})
router.post('/registry', (req, res) => {
    console.log(req.body, '注册参数')
    res.send({
        error: 0,
        msg: '注册成功'
    })
})
router.delete('/del', (req, res) => {
    console.log(req, '删除参数')
    res.send({
        error: 0,
        msg: '删除成功'
    })

})
router.put('/edit', (req, res) => {
    console.log(req, '修改参数')
    res.send({
        error: 0,
        msg: '删除成功'
    })

})
module.exports = router
const express = require('express')
const bodyUser = require('body-parser')
const bodyParser = require('body-parser')
const app = express()
    //查看用户列表接口
    //创建中间件
app.use('/user', (req, res, next) => {
        //拦截 对user 的请求统一处理
        console.log('我是全局中间件')
        next()
    })
    //可以接受到x-www-form-urlencode格式的数据
app.use(bodyParser.urlencoded({
        extended: false
    }))
    //可以接受到json格式传递的数据
app.use(bodyParser.json({
    extended: false
}))

app.get('/user/list', (req, res) => {
        console.log(req, 'req')
            // 用户数据
        let data = [{
            id: 1,
            username: 'express',
            age: 22,
            sex: 1
        }, {
            id: 2,
            username: 'koa',
            age: 23,
            sex: 2
        }]
        res.send({
            'code': 200,
            'message': '请求成功',
            'data': {
                'data': data
            }
        })

        //req.query属性来接受传递的参数
        console.log(req.query, '传递的参数')
    })
    // 用户注册接口
app.post('/user/registry', (req, res) => {
        console.log('注册接口中')
        res.send({
            error: 0,
            msg: '注册成功'
        })
    })
    //用户登录接口
    //接受post的参数
app.post('/user/login', (req, res) => {
        //要获取post 的参数需要使用body-parser模块，配置后传递数据通过req.body拿到
        const {
            userName,
            passWord
        } = req.body
        console.log(userName, passWord, '登录接口')
        res.send({
            error: 0,
            msg: '登录成功'
        })
    })
    //获取用户详情接口
app.get('/user/detail', (req, res) => {
        const id = req.query.userId
        console.log(id, '传递的请求参数')
        if (!id) {
            res.send({
                error: 1,
                message: '请传递必要的参数'
            })
            return
        }
        const info = [{
            id: 1,
            username: 'express',
            age: 22,
            sex: 1
        }, {
            id: 2,
            username: 'koa',
            age: 23,
            sex: 2
        }].find(user => user.id == id)
        console.log(info, 'info')
        res.send({
            error: 0,
            data: info || '没有找到相关人员'
        })

    })
    //监听端口
app.listen(8080, () => {
    console.log('连接成功...')
})
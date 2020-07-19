const express = require('express')
const app = express()
    //查看用户列表接口
app.get('/user/list', (req, res) => {
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
app.post('/user/login', (req, res) => {
    console.log('登录接口')
    res.send({
        error: 0,
        msg: '登录成功'
    })
})

//监听端口
app.listen(8080, () => {
    console.log('连接成功...')
})
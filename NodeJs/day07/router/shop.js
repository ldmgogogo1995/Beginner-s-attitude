const router = require('express').Router()
const db = require('../server')
console.log(db, 'db')
let sql, data;
//商品列表不分页
router.get('/list', (req, res) => {
        sql = "SELECT  * FROM shop"
        db.query(sql, (err, result) => {
            if (!err) {
                data = result
                res.send({
                    data: {
                        code: 200,
                        msg: '查询列表成功',
                        data
                    }
                })
            } else {
                console.log(err, '失败')
                return
            }
        })

    })
    //商品添加
router.post('/add', (req, res) => {
        res.send({
            code: 200,
            msg: '添加商品成功'
        })
    })
    //商品删除
router.delete('/del', (req, res) => {
        res.send({
            code: 200,
            msg: '商品删除成功'
        })
    })
    //商品修改
router.put('/edit', (req, res) => {
    res.send({
        code: 200,
        msg: '修改商品成功'
    })
})
module.exports = router
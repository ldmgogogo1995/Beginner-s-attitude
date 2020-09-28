const router = require('express').Router()
const db = require('../server')
let sql, data, dbName;
dbName = 'shop'
    //商品列表不分页
router.get('/list', (req, res) => {
        sql = "SELECT  * FROM ${dbName}"
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
                res.send({
                    code: 400,
                    msg: '查询失败'
                })
                return
            }
        })

    })
    //商品添加
router.post('/add', (req, res) => {
        const {
            title,
            price,
            is_enable
        } = req.body
        sql = `insert into ${dbName} (title,price,is_enable)values(${"'"+title+"'"+','+price+','+"'"+is_enable+"'"})`
        db.query(sql, (err, result) => {
            if (!err) {
                console.log(result, 'result')
                res.send({
                    code: 200,
                    msg: '添加商品成功'
                })
            } else {
                console.log(err, '失败');
                res.send({
                    code: 400,
                    msg: '添加失败'
                })
            }
        })

    })
    //商品删除
router.delete('/del', (req, res) => {
        const {
            id
        } = req.body
        if (!id) {
            res.send({
                code: 400,
                msg: '请传入需要删除项目的id'
            })
            return
        }
        sql = `delete from ${dbName} where Id=${id}`
        db.query(sql, (err, result) => {
            if (!err) {
                res.send({
                    code: 200,
                    msg: '商品删除成功'
                })
                console.log(result, 'result')
            } else {
                res.send({
                    code: 400,
                    msg: '操作失败'
                })
            }
        })

    })
    //商品修改
router.put('/edit', (req, res) => {
    const {
        id,
        price,
        title,
        is_enable
    } = req.body
    if (!id) {
        res.send({
            code: 400,
            msg: '请传入需要修改的id'
        })
        return
    }
    sql = `update shop set price=${price} ,title=${"'"+title+"'"} ,is_enable=${"'"+is_enable+"'"} where Id=${id}`
    if (!title) sql = `update shop set price=${price}  ,is_enable=${"'"+is_enable+"'"} where Id=${id}`
    if (!price) sql = `update shop set  ,title=${"'"+title+"'"} ,is_enable=${"'"+is_enable+"'"} where Id=${id}`
    if (!is_enable) sql = `update shop set price=${price} ,title=${"'"+title+"'"} where Id=${id}`

    db.query(sql, (err, result) => {
        if (!err) {
            res.send({
                code: 200,
                msg: '修改成功'
            })
        } else {
            res.send({
                code: 400,
                msg: '修改失败'
            })
            console.log(err);
        }
    })

})
module.exports = router
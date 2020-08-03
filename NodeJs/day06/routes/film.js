
const filmList = require('../database')
const router = require('express').Router()

//获取电影列表
router.get('/list', (req, res) => {
  res.send({ error: 0, filmList })
})
module.exports = router
const mysql = require('mysql')
const config = require('./config/config').msqConfig
//建立与数据库MySQL数据库的链接
const connection = mysql.createConnection(config)

//调用connet函数进行连接
connection.connect(err => {
  if (err) {
    console.error('error：' + err.message);
  } else {
    console.log('Connected to the MySQL server!')
  }
})
/*CURD*/
/*查*/
let sql
//普通查询
// sql = `SELECT * FROM USER`
//用?作为占位符（防止SQL注入）或者使用escape
const id = mysql.escape(4)
// sql = `SELECT * FROM USER WHERE age=?`
sql = `SELECT * FROM USER WHERE Id=${id}`
connection.query(sql,(error, result, fields) => {
  if (error) {
    console.error('error：', error)
    return
  }
  console.log('results：', result)
})
connection.end()
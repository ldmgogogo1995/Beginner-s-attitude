const fs = require('fs')

//创建文件并写入内容

let path = './node.txt'
    //文件不存在则自动创建  覆盖方式写入
fs.appendFile(path, '改写文件加内容', err => {
    if (!err) {
        console.log('追加文件')
    } else {
        console.log(err)
    }
})
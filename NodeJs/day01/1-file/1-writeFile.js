const fs = require('fs')

//创建文件并写入内容

let path = './node.txt'
    //文件不存在则自动创建  覆盖方式写入
fs.writeFile(path, '改写文件加内容', err => {
        if (!err) {
            console.log('改写文件加内容')
        } else {
            console.log(err)
        }
    })
    // fs.writeFileSync(path,content)
    //添加式的写入 fs.apendFile
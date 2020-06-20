const fs = require('fs')
let path = './bin'
    //只能删除空目录
    // fs.rmdir(path, (err) => {
    //         if (!err) {
    //             console.log('删除文件加成功')
    //         } else {
    //             console.log('删除文件加失败')
    //         }
    //     })
    // fs.rmdirSync(path
    //修改文件加名
fs.rename('./wwww', './www', err => {
    if (!err)
        console.log('文件加名字修改成功')

})
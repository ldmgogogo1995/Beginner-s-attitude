const fs = require('fs')
let path = './node.txt'


fs.unlink(path, err => {
    if (!err) {
        console.log('删除成功')

    } else {

        console.log('操作失败')
    }
})
const fs = require('fs')
let path = './node.txt'
path = './'
fs.stat(path, (err, data) => {
    if (!err) {
        console.log(data)
        if (data.isFile()) {
            console.log('参数是文件')

        } else if (data.isDirectory()) {
            console.log('参数是文件夹')
        }
    } else {
        console.log('文件不存在')
    }
})
//创建文件夹
const fs = require('fs') //内置fs模块的引用
const {
    KeyObject
} = require('crypto')

// let path = './wwww'
// //异步创建目录
// fs.mkdir(path, function(err) {
//     if (!err) {
//         console.log('创建文件夹成功')
//     } else {
//         console.log('创建文件失败')
//     }
// })
// console.log(1)
let path = './bin'
try {
    let res = fs.mkdirSync(path)
    console.log(res)
} catch (err) {
    console.log(err)
}
console.log(1111)
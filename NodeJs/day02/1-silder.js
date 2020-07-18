//将网站内容复制过来存到本地服务器
//1.获取到目标网站的内容
//2.将数据写入文件存储到本地
// const http = require('http')
const https = require('https')
const fs = require('fs')
let data = ''
const url = 'https://react.docschina.org/'
https.get(url, (req, res) => {
    //req:请求对象
    //res:响应对象
    // console.log(res, req)
    //监听数据下载事件
    req.on('data', (chunk) => {
            data += chunk
            console.log('数据正在下载...')
        })
        //监听数据下载完毕事件
    req.on('end', () => {
        console.log('下载完毕')
        console.log(data)
        let filePath = './react.html'
        fs.writeFile(filePath, data, (err) => {
            if (!err) {
                console.log('写入成功')
            }
        })
    })
})
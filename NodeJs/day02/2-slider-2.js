//将网站内容复制过来存到本地服务器
//1.获取到目标网站的内容
//2.将目标网站的图片存在本地chuan 使用 cheerio
const fs = require('fs')
const https = require('https')
const cheerio = require('cheerio')
    // const url = 'https://react.docschina.org/'
const url = 'https://www.bootcss.com/'

https.get(url, (req, res) => {
    let data = ""
    req.on('data', chunk => {
        data += chunk
    })
    req.on('end', () => {
        console.log('下载完成1')
        let $ = cheerio.load(data.toString())

        $('img').each((index, item) => {
            let src = $(item).attr('data-src') || $(item).attr('src')
            if (src) {
                https.get(src, (req, res) => {

                    req.setEncoding('binary') //请求格式是二进制
                    let rowData = ''
                    req.on('data', chunk => {
                        rowData += chunk
                    })
                    let name = "./images/" + src.slice(src.lastIndexOf('/') + 1, src.length)
                    req.on('end', () => {
                        fs.writeFile(name, rowData, 'binary', err => {
                            if (!err) {
                                console.log('图片保存')
                            }
                        })
                        console.log(rowData)
                    })
                })
            }
        })
    })
})
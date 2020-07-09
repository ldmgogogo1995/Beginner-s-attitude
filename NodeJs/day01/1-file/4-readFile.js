const fs = require('fs')
let path = './node.txt'

fs.readFile(path, (err, data) => {
    if (!err) {
        console.log(data.toString())
    }
})
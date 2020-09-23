//Promise(es6 ) 承诺
/** 
 * 三种状态
 * 1 Pending(进行中) 2 Resolved（已完成） 3 Rejected（已失败）只有异步操作可以改变这个状态
 * promise内部只负责许下承若，职责单一
 * then只负责成功之后的逻辑，catch 负责失败的逻辑，不会过于混乱
 * 能够把原本异步代码携程同步的形式，便于阅读
 * 存在的意义是不用写回调函数
 */


console.dir(Promise);
const promise = new Promise(function(resolve, reject) {
    //承若一秒之后用户输入的数字大于0
    setTimeout(() => {
        let num = prompt()
        if (num > 10) {
            //承若兑现
            resolve(num)
        } else {
            reject('失败')
        }
    }, 1000)
})
promise.then(res => {
    console.log(res, 'res')
}).catch((err) => {
    console.log(err, 'err')
}).finally(() => {
    console.log('不管成功与否都会兑现')
})
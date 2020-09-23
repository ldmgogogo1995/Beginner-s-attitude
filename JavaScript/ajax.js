//封装原生ajax请求
function sendMessage(method, url) {
    //1、 创建对象
    const ajax = new XMLHttpRequest()
        //2、跟服务器建立连接（open 方法有三个参数1、请求的method 2、url 3、是否异步默认值是true）
    ajax.open(method, url)
        //3、开始发送数据 get请求 数据卸载url上，不需要发送任何数据但是必须调用send方法
    ajax.send()
        //4、监听状态的改变
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                //请求成功
                const text = ajax.responseText
                console.log(JSON.parse(text))
            }
        }
    }
}
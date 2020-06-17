"use strict";
//变量的作用域，函数划分
// var lang: string = 'typescript'
// var study = function (): void {
//   //变量声明提升
//   console.log('罗大明正在学习' + lang)
//   var lang = 'javaScript'
//   console.log('罗大明正在学习' + lang)
// }
// study()
// console.log(lang)
//全局变量 局部变量
//let 块级作用域
function study() {
    var lang = 'typescript';
    {
        var langa = 'javascript';
    }
    console.log('罗大明学会了' + lang);
    // console.log('罗大明学会了'+langa)
    //这里能够输出 是因为编译成了 es5 的var 关键字
}
study();

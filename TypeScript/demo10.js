"use strict";
//变量声明及作用域
// function f(): any {
//   var a: any = 1
//   //赋值 类型断言
//   a = (<number>2)
//   var b: any = g()
//   a = (3 as number)
//   return b
//   function g(): any {
//     console.log(a, '-----a')
//     return a
//   }
// }
// console.log(f()) //简单
//捕获变量怪异之处
//方法1:
// for (var i=0;i<10;i++){
//   let index = i
//   setTimeout(function(){
//     console.log(index)
//   },i*100)
// }
//方法2
// for (var i = 0; i < 10; i++) {
//        console.log(i);
//     (function (i) {
//       setTimeout(function () {
//         console.log(i)
//       }, i * 100)
//     })(i)
// }
//不太明白的例子
// function sumMatrix(matrix: number[][]) :any{
//   var sum = 0;
//   for (let i = 0; i < matrix.length; i++) {
//       var currentRow = matrix[i];
//       for (let i = 0; i < currentRow.length; i++) {
//           sum += currentRow[i];
//       }
//   }
//   return sum;
// }
// console.log(sumMatrix([[123],[321]]))
// type C = {a:string,b?:number}
// function f({a,b}:C):void{
// }
// f({a:''})
//晦涩难以理解的解构赋值
// function f({ a='a', b = 0 } = { a: "" }): void {
//   // ...
// }
// f({ a: "yes" }); // ok, default b = 0
// f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument
// class C {
//   p = 12;
//   m() {
//   }
// }
// let c = new C();
// let clone = { ...c };
// clone.p; // ok
// clone.m(); // error!
// const fs = require('fs')
// // fs.mkdirSync('./www')
// fs.rmdir('./www',(err:any)=>{
//   if(!err){
//     console.log('删除成功')
//   }else{
//     console.log(err)
//   }
// })

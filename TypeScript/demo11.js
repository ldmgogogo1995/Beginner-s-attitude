"use strict";
/** 接口
 * */
// function printLabel(labelObj:{label:string}):void{
//   console.log(labelObj.label,'aaaa')
// }
// const myObj = {
//   size:10,
//   label:'好戏'
// }
// printLabel(myObj)
var P1 = { x: 10, y: 3 };
// P1.x =  无法分配值给P1.x 因为它是只读的
var a = [1, 2, 3];
var ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro;
//妙啊！ 赋给另一个变量，另一个变量不会经过类型检查

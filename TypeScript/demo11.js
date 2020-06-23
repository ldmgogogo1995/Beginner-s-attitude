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
/**
 * 函数类型
*/
// interface SearchFunc {
//   (src: string, sub: string): boolean
// }
// let myFunc: SearchFunc = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   console.log(result)
//   return result > -1
// }
// //函数只检查 类型不检查参数列表名字
// console.log(myFunc('uzi forever god', 'g'))
/**
 * 可索引的类型
*/
// interface StringArray{
//   [index:number]:string
// }
// let myArray:StringArray;
// myArray = ['1','2']
// let str:string = myArray[2]
// console.log(str)
// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
/**
 * 类 类型
*/
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d:Date):void
// }
// class Clock implements ClockInterface {
//     currentTime:  Date;
//     setTime(d: Date) {
//       this.currentTime = d;
//   }
//     constructor(h: number, m: number) { }
// }
/**
 * 接口继承类
*/
// class Control {
//   private state: any;
// }
// interface SelectableControl extends Control {
//   select(): void;
// }
// class Button extends Control implements SelectableControl {
//   select() { }
// }
// class TextBox extends Control {
//   select() { }
// }
// // 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//   select() { }
// }
// class Location {
// }

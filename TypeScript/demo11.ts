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


/**
 * 用接口的形式重写
 * */
// interface LabelledValue{
//   label:string
// }
// function printLabel(labelObj:LabelledValue){
//   console.log(labelObj.label)
// }
// const myObj = {size:10,label:'label'}
// printLabel(myObj)


/**
 * 可选属性接口
*/
// interface LdmInterface {
//   name?: string;
//   age?: number;
// }
// function ldm(props: LdmInterface): { name: string; age: number; } {
//   let newLdm = { name: '罗大明', age: 18 }
//   if (props.name) {
//     newLdm.name = props.name
//   }
//   if (props.age) {
//     newLdm.age = props.age
//   }
//   return newLdm
// }
// console.log(ldm({ name: '罗大明会加油的', age: 25 }))


/**
 * 只读属性
*/
interface Point {
  readonly x: number;
  readonly y: number;
  [myPropNmae: string]: any
}
let P1: Point = { x: 10, y: 3 }
// P1.x =  无法分配值给P1.x 因为它是只读的
let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro as number[]
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
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
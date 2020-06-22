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
  [myPropNmae:string]:any
}
let P1: Point = { x: 10, y: 3}
// P1.x =  无法分配值给P1.x 因为它是只读的
let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro as number []
//妙啊！ 赋给另一个变量，另一个变量不会经过类型检查
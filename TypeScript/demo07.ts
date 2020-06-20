// let coderLdm = {
//   name:'罗大明',
//   age:'18',
//   say:function(){
//     console.log('保持初学者的态度')
//   }
// }
// console.log(coderLdm.name)
// coderLdm.say()

//数组---array String Date RegExp

// let arr1:number[]
// let arr2:Array<boolean>

//字面量赋值法
// let arr1: number[] = []
// let arr2: number[] = [1, 2, 3, 4, 5]
// let arr3: Array<string> = ['ldm', 'luodaming', 'coder']
// let arr4: Array<boolean> = [true, true, false]

//构造函数赋值法
// let arr1: number[] = new Array()
// let arr2: number[] = new Array(1, 2, 3, 4, 5)
// let arr3: Array<string> = new Array('ldm', 'luodaming', 'coder')
// let arr4: Array<boolean> = new Array(true, true, false)  泛型声明
// let arr5:number[] = [1,2,true]

//元组：Tuple
let x : [string,number]
x = ['ldm',100]
console.log( x[0].substr(2),x)
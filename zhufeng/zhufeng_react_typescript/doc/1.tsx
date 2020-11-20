class Person{
    name:string
}
let p3:Person = new Person();

/**
 * 定义一个类的时候，会有两个类型
 * 1.类的实例的类型
 * 2.类本身的函数的类型
 */

let p:Person = {name:'zhufeng'}
type TypeP = typeof Person;
let Person3:TypeP ;
Person3=Person;

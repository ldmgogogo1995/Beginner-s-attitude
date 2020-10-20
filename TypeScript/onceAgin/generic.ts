/** 
 * 
 * 泛型
 * 介绍
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
*/

/** 
 * 泛型之hello World
 * 下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。
*/

//不使用泛型：
// function iddentity(arg: number): number {
//     return arg
// }
//或者 用any 一把梭
// function iddentity(arg: any): any {
//     return arg
// }
/*使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。*/
// function identity<T>(arg: T): T {
//     return arg
// }
/** 
 * 定义了泛型之后 两种使用方法，
 * 第一种是传入所有的参数包含类型参数
*/
// let output = identity<string>("myString")
//第二种是  利用了类型推论--即编译器会根据传入的参数自动确定T 的类型
// let input = identity('string')
/**  使用泛型变量*/

//使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。

/** 泛型类型 */
function identity<T>(arg: T): T {
    return arg
}
//此处T可以随意替换
// let myIdentity: <T>(arg: T) => T = identity

//我们还可以使用带有调用签名的对象字面量来定义泛型函数：
// let myIdentityCopy: { <T>(arg: T): T } = identity

/** 完成第一个泛型接口 */
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
// let myIdentity: GenericIdentityFn = identity


/** 改进：不在面熟泛型函数，而是把非泛型函数签名作为泛型类型的一部分，对于描述那部分类型属于反省部分来说，理解和是把参数放在调用签名里和合适放在接口上是很有帮助的*/
interface GenericIdentityFn<T> {
    (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identity

// 除了泛型接口，我们还可以创建泛型类。注意，无法创建房型枚举和泛型命名空间
class GenerricNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.add = add
    }

}
let myGenerricNumber = new GenerricNumber<number>(0, (x) => x);
myGenerricNumber.zeroValue = 0
myGenerricNumber.add = function (x, y) {
    return x + y
}
let stringNumeric = new GenerricNumber<string>('0', (x) => x);
stringNumeric.zeroValue = '0'
stringNumeric.add = function (x, y) {
    return x + y
}


/**泛型约束 */
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {

    return arg
}
//现在这个泛型函数被定义了约束，因此它不再适用于任意类型：
// loggingIdentity (3) // 类型 number 得参数不能赋给类型Lengthwise的参数
loggingIdentity({ length: 3, value: 3 })//我们需要传入符合约束类型的值，必须包含必须的属性

/** 在泛型约束种使用类型参数*/
//你可以声明一个类型参数，且它被另一个类型参数所约束。比如，现在我们需要用属性名从对象里面获取这个属性。并且我们想要确保这个属性存在于对象obj上，因此我们需要在这两个类型之间使用约束。
type T = any
type K = string
function getProperty(obj: T, key: K) {
    return obj[key];
}
let genericX = { a: 1, b: 2, c: 3, d: 4 }


// console.log(getProperty(genericX, 'a'), getProperty(genericX, 'm'));

/** 
 * 在泛型里使用类类型
*/
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如：
function create<T>(c: { new(): T; }): T {
    return new c();
}
//一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系
class BeeKeeper {

    hasMask: boolean

}
class ZooKeeper {
    nametag: string
}
class AnimalLdm {
    numLegs: number;
}
class Bee extends AnimalLdm {
    keeper: BeeKeeper
}
class Lion extends AnimalLdm {
    keeper: ZooKeeper
}
function createInstance<A extends AnimalLdm>(c: new () => A): A {
    return new c();
}
console.log(createInstance(Lion), createInstance(Bee));

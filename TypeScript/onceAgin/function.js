//函数
// function addFun(x: number, y: number): number {
//     return x + y
// }
//完整类型
// const arrowAdd = function (x: number, y: number): number { return x + y }
// let myadd: (vaseValue: number, increment: number) => number =
//     function (x: number, y: number): number { return x + y; };
//推断类型
// const arrowAdd = function (x: number, y: number): number { return x + y }
// let myadd: (vaseValue: number, increment: number) => number =
//     function (x, y) { return x + y; };
// //可选参数，默认参数
// function buildName(firstName: string, lastName: string) {
//     return firstName + "" + lastName
// }
// let result1 = buildName('Bob') // error: too few paramet(未提供lastName的自变量)
// let result2 = buildName('Bob', 'Adams', 'Sr') //error,too many parame
// let result3 = buildName('Bob', 'ldm')
/**
 * 如果带默认值的参数是第一个参数，必须传undefined来获取第一个参数
 * ?实现可选参数function(a,b="defualt")  可以这样设置默认值，可选参数必须是第二个参数
*/
// function buildName(firstName: string, lastName?: string) {
//     return lastName ? firstName + ' ' + lastName : firstName
// }
// console.log(buildName('luo'))
/**
 * 剩余参数
*/
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
console.log(buildNameFun('Luo daming', 'luodxiaoming', 'luodami'));

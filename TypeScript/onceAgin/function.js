//函数
function addFun(x, y) {
    return x + y;
}
//完整类型
// const arrowAdd = function (x: number, y: number): number { return x + y }
// let myadd: (vaseValue: number, increment: number) => number =
//     function (x: number, y: number): number { return x + y; };
//推断类型
var arrowAdd = function (x, y) { return x + y; };
var myadd = function (x, y) { return x + y; };
//可选参数，默认参数
function buildName(firstName, lastName) {
    return firstName + "" + lastName;
}
// let result1 = buildName('Bob') // error: too few paramet(未提供lastName的自变量)
// let result2 = buildName('Bob', 'Adams', 'Sr') //error,too many parame
var result3 = buildName('Bob', 'ldm');
console.log(result3, 'aaaa');

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
// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ")
// }
// let buildNameFun:(fname:string,...rest:string[])=>string  = buildName
// console.log(buildNameFun('Luo daming', 'luodxiaoming', 'luodami'));
/**
 * 复习this
*/
var deck = {
    suit: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pikedSuit = Math.floor(pickedCard / 13);
            console.log(this, 'this');
            return { suit: this.suit[pikedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
//直接调用 cardPicker 实际是this 指向window对象
// console.log('card:' + pickedCard.card, +'of:' + pickedCard.suit)
console.log(cardPicker);

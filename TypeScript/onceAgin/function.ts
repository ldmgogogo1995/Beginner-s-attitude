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
// let deck = {
//     suit: ['hearts', 'spades', 'clubs', 'diamonds'],
//     cards: Array(52),
//     createCardPicker: function () {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pikedSuit = Math.floor(pickedCard / 13);
//             console.log(this, 'this')
//             return { suit: this.suit[pikedSuit], card: pickedCard % 13 }
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

//直接调用 cardPicker 实际是this 指向window对象
// console.log('card:' + pickedCard.card, +'of:' + pickedCard.suit)
// console.log(cardPicker);
/** 
 * this.suits[pickedSuit]的类型依旧是any，这是因为this来自对象字面量里的函数表达式，修改的方式是，提供一个显式参数。this参数是个假的参数，它出现在参数列表的最前面：
 * 
*/
function f(this: void) {

}
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suit: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card
}

let deck = {
    suit: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pikedSuit = Math.floor(pickedCard / 13);
            console.log(this, 'this')
            return { suit: this.suit[pikedSuit], card: pickedCard % 13 }
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log(("card: " + pickedCard.card + " of " + pickedCard.suit));
/** 
 * this 在回调函数里：当你将一个函数传递到某个库函数里稍后会被调用时。因为当回调被调用的时候，他会被当成一个普通甘薯调用红，this将为undefined。稍做改动你就可以通过this参数来避免错误，首先，库函数的作者要制定this类型：
 * 
 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}
class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        // this.info = e.message;
        console.log('clicked!')
    }
}
let h = new Handler();
uiElement.addClickListener(h.onClickBad)
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
// function f(this: void) {

// }
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
            return { suit: this.suit[pikedSuit], card: pickedCard % 13 }
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
// console.log(("card: " + pickedCard.card + " of " + pickedCard.suit));
/** 
 * this 在回调函数里：当你将一个函数传递到某个库函数里稍后会被调用时。因为当回调被调用的时候，他会被当成一个普通甘薯调用红，this将为undefined。稍做改动你就可以通过this参数来避免错误，首先，库函数的作者要制定this类型：
 * 
 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}
//指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 然后TypeScript会检测到 addClickListener要求函数带有this: void。 改变 this类型来修复这个错误：
interface Props {
    info?: string
}
// Bad：
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // this.info = e.message;
//         console.log('clicked!')
//     }
// }

// let h = new Handler();
// uiElement.addClickListener(h.onClickBad)
//good: 利用箭头函数
// class Handler {
//     info: string;
//     onClickgood= (e:Event)=>{this.info=e.massage}
// }
//重载
//JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x): any {
// Check to see if we're working with an object/array
// if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
/** 
 * pickCard方法根据传入参数的不同会返回两种不同的类型。 如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 如果用户想抓牌，我们告诉他抓到了什么牌。 但是这怎么在类型系统里表示呢。

    方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用。 下面我们来重载 pickCard函数。
*/
function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//很多地方不太懂
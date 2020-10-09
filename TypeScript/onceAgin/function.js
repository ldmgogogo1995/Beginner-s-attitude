//函数
// function addFun(x: number, y: number): number {
//     return x + y
// }
//完整类型
// const arrowAdd = function (x: number, y: number): number { return x + y }
var deck = {
    suit: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function() {
        var _this = this;
        return function() {
            var pickedCard = Math.floor(Math.random() * 52);
            var pikedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suit[pikedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
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
var suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/**
 * 使用栈解决十进制转化为N进制的问题
*/
var baseStack = require('./index');
var baseConverter = function (decNumber, base) {
    var stack = new baseStack();
    var baseString = '';
    var rem;
    var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = decNumber;
    if (base < 2 || base > 36) {
        return '';
    }
    // for (number > 0; number = Math.floor(number / base);) {
    //   console.log(number, 'number');
    //   rem = Math.floor(number % base)
    //   stack.push(rem)
    // }
    for (var i = number; i > 0; i = Math.floor(i / base)) {
        console.log(i, 'number');
        rem = Math.floor(i % base);
        stack.push(rem);
    }
    // while (number > 0) {
    //   console.log(number, 'number');
    //   rem = Math.floor(number % base)
    //   stack.push(rem)
    //   number = Math.floor(number / base)
    // }
    console.log(stack);
    while (!stack.isEmpty()) {
        baseString += digits[stack.pop()];
    }
    return baseString;
};
console.log(baseConverter(4, 2), 'res');

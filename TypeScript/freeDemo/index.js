"use strict";
var myfunc = function (obj) {
    if (obj === void 0) { obj = { num1: 0, num2: '' }; }
    var res = obj.num1 + (parseInt(obj.num2, 10));
    return res;
};
console.log(myfunc({ num1: 6, num2: '2' }));

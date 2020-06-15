"use strict";
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
console.log('-----------------');
var jsluo = '罗大明 学习ts';
console.log(jsluo);
//boolean true false
var b = true;
var c = false;
//enum 类型 枚举  人：男人，女人，中性    四季：春、夏、秋、冬
console.log('---------------------');
var REN;
(function (REN) {
    REN["nan"] = "\u7537\u4EBA";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao);
//any 类型
console.log('----------------');
var t = 10;
t = 'jslover';
t = true;
console.log(t);
//null

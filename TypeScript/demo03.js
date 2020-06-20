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
// enum REN{nan='男人',nv='女人',yao='妖'}
var REN;
(function (REN) {
    REN[REN["nan"] = 0] = "nan";
    REN[REN["nv"] = 1] = "nv";
    REN[REN["yao"] = 1] = "yao";
    REN[REN["ldm"] = 1] = "ldm";
})(REN || (REN = {}));
console.log(REN.nan, REN.nv, REN.yao, REN[1]);
//any 类型
console.log('----------------');
var t = 10;
t = 'jslover';
t = true;
console.log(t);
//null

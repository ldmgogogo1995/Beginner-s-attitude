"use strict";
//联合类型
// let ldm: string | number = '罗大明'
// ldm = 132
// // ldm =null
// console.log(ldm, 'ldm')
//never类型
//返回never的函数必须存在无法到达的重点
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('犹豫就会败北');
}
function eventLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);

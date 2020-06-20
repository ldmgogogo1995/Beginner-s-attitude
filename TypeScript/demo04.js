"use strict";
// function searchMyDream(year:number):string{
//   return '保持初学者的而态度' +year+'年'
// }
// var year:number = 100
// var dream:string = searchMyDream(year)
// console.log(dream) 
/*有可选参数的函数*/
// function searchXiaoJieJie(age:number,stature?:string):string{
//     let yy:string=''
//     yy = '找到了'+age+'岁'
//     if(stature!=undefined){
//       yy=yy+stature
//     }
//     return yy+'的嗯~ o(*￣▽￣*)o'
// }
// var result:string = searchXiaoJieJie(22,'大长腿') 
// console.log(result)
/*有默认参数的函数*/
// function searchXiaoJieJie(age:number=18,stature:string='水蛇腰'):string{
//     let yy:string=''
//     yy = '找到了'+age+'岁'
//     if(stature!=undefined){
//       yy=yy+stature
//     }
//     return yy+'的嗯~ o(*￣▽￣*)o'
// }
// var result:string = searchXiaoJieJie(22) 
// console.log(result)
/*有剩余参数的函数*/
function searchXiaoJieJie() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var uu = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        uu += xuqiu[i];
        if (i < xuqiu.length) {
            uu += '、';
        }
    }
    return uu += '找到了';
}
var result = searchXiaoJieJie('努力吧', 'ldm');
console.log(result);

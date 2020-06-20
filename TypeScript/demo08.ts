//联合类型
// let ldm: string | number = '罗大明'
// ldm = 132
// // ldm =null
// console.log(ldm, 'ldm')

//never类型
//返回never的函数必须存在无法到达的重点
function error(message: string ): never {
  throw new Error(message)
}
function fail() {
  return error('犹豫就会败北')
}
function eventLoop():never{
  while(true){

  }
}
// console.log(fail())

//类型断言
// let someValue:any = '66'
// let strLength:number = (<string>someValue).length
// let someValue:any = '66'
// let strLength:number = (someValue as string).length
// console.log(strLength)

//不太明白
//Object类型（除了 基本类型其他的类型）
declare function create(o:object|null):void
create({prop:0});
create(null);
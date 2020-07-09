const myfunc = (obj={num1:0,num2:''}):number=>{
  const res:number = obj!.num1+(parseInt(obj!.num2,10))
  return res
}
console.log(myfunc({num1:6,num2:'2'}))
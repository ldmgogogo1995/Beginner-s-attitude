
function * generator(){
    try{
        let a = yield 1;
        console.log(a);
        let b = yield 2;
        console.log(b);
    }catch(err){
        console.log('err',err);
    }
}
let it = generator();
let r1 = it.next();
console.log(r1);
let r2 = it.return();//直接结束本迭代器 在后的saga任务取消的时候会用到
console.log(r2);

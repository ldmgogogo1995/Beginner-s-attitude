
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
let r2 = it.throw('出错了');
console.log(r2);

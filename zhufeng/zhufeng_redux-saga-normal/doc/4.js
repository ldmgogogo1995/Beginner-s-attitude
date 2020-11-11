//co

function * generator(){
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    let c = yield 3;
    console.log(c);
}
//tj co continue
function co(generator){
    let it = generator();
    let result;
    function next(arg){
        result=it.next(arg);//{value:1,done:false}
        if(!result.done)
            next(result.value);
    }
    next();
}
co(generator);

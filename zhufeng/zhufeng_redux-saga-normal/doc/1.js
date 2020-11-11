
function * generator(){
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    let c = yield 3;
    console.log(c);
}
let it = generator();
let r1 = it.next();
console.log(r1);
let r2 = it.next('aValue');
console.log(r2);
let r3 = it.next('BValue');
console.log(r3);
let r4 = it.next('cValue');
console.log(r4);
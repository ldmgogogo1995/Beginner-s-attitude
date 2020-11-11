var a = 4
for (a > 0; a = a - 1;) {
  console.log(a);//打印每次循环A的值
}
for (let i = a; i > 0; i = i - 1) {
  console.log(a);//打印每次循环A的值
}
while (a > 0) {
  console.log(a);
  a = a - 1
}
const Stack = require('./index')

//创建一个栈
const stack = new Stack()
for (let i = 0; i < 10; i++) {
  stack.push(i)
}
//删除一个栈顶一个元素
// console.log(stack.pop());


//查看栈顶的元素
// console.log(stack.peek());

console.log(stack, 1);
//清空栈内元素
stack.clear();
console.log(stack, 2);

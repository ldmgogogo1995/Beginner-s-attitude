/** 
 * 使用栈解决十进制转化为N进制的问题
*/
const baseStack = require('./index')
interface Converter {
  (decNumber: number, base: number): string
}
const baseConverter: Converter = function (decNumber, base) {
  const stack = new baseStack()
  let baseString: string = ''
  let rem: number
  let digits: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let number: number = decNumber
  if (base < 2 || base > 36) {
    return ''
  }
  // for (number > 0; number = Math.floor(number / base);) {
  //   console.log(number, 'number');

  //   rem = Math.floor(number % base)
  //   stack.push(rem)
  // }
  for (let i = number; i > 0; i = Math.floor(i / base)) {
    console.log(i, 'number');
    rem = Math.floor(i % base)
    stack.push(rem)
  }
  // while (number > 0) {
  //   console.log(number, 'number');
  //   rem = Math.floor(number % base)
  //   stack.push(rem)
  //   number = Math.floor(number / base)
  // }
  console.log(stack);

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }
  return baseString
}
console.log(baseConverter(4, 2), 'res');

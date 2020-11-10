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

  return baseString
}
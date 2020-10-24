/** 
 * 栈:（利用javaScript数组创建一个简单的栈结构）
 * @param{
 *    push(elements):添加一个（或几个）新元素到栈顶
 * }
*/
export class Stack{
  constructor() {
    this.items = []
  }
  items: Array<any>
  push(elements) {
    this.items.push(elements)
  }

}
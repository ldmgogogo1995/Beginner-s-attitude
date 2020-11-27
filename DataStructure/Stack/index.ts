/*export class Stack {
  constructor() {
    this.itemss = []
  }
  itemss: Array<string | number | Object | Function | undefined | null | symbol>
  push(elements) {
    this.itemss.push(elements)
  }

}*/
/**
 * 栈:（利用javaScript数组创建一个简单的栈结构）
 * @param{
 *    push(elements):添加一个（或几个）新元素到栈顶
 *    pop():删除栈顶元素，并且返回栈顶元素
 *    isEmpty():如果栈里没有任何元素就返回ture否则就返回false
 *    size():该方法和组数的length属性很类似
 *    peek():返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回）
 *    clear():清空整个栈
 * }
*/
type StackItemType = string | number | Object | Function | undefined | null | symbol
interface Stackitems {
  [key: number]: StackItemType
}
namespace StackProperty {
  export class Stack {
    count: number
    items: Stackitems
    constructor() {
      this.count= 0//记录当前栈的长度
      this.items = {}//存放栈内的东西的对象
    }
    push(element: Stackitems) {
      this.items[`${this.count}`] = element
      this.count++
    }
    isEmpty(): boolean {
      return this.count === 0
    }
    size(): number {
      return this.count
    }
    peek(): StackItemType {
      if (this.isEmpty()) {
        return undefined
      } else {
        return this.items[`${this.count - 1}`]
      }
    }
    pop(): StackItemType {
      if (this.isEmpty()) {
        return undefined
      }
      this.count--
      const result = this.items[`${this.count}`]
      delete this.items[`${this.count}`]
      return result
    }
    clear() {
      // this.items = {}
      // this.count = 0
      while (!this.isEmpty()) {
        this.pop()
      }
    }
  }
}


module.exports = StackProperty.Stack
/**
 * queue
 * 手写一个队列 遵循先进先出原则
 * @param
 * count:number 记录当前队列的长度
 * lowestCount :number 跟踪第一个元素
 * items :{[key:number]:any :ItemType}  储存队列内的元素
 * enqueue(elements): 向队列尾部添加一个或者多个元素
 * dequeue():移除队列第一项
 */
type QueueItemType = string | number | Object | Function | undefined | null | symbol
interface QueueItems {
  [key: string]: QueueItemType
}
namespace Queueprototype {
  export class Queue {
    count: number;
    lowestCount: number;
    items: QueueItems
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
    enqueue(element: QueueItemType) {
      this.items[`${this.count}`] = element
      this.count++
    }
    dequeue(): QueueItemType {
      if (this.isEmpty()) {
        return undefined
      }
      const result = this.items[`${this.lowestCount}`]
      delete this.items[`${this.lowestCount}`]
      this.lowestCount++
      return result
    }
    size(): number {
      return this.count
    }
    isEmpty(): boolean {
      return this.count === 0
    }
    peek(): QueueItemType {
      if (this.isEmpty()) {
        return undefined
      }
      return this.items[`${this.count - 1}`]
    }
    toString(): string {
      const resultStr: string = ''
      return resultStr
    }
  }
}
module.exports = Queueprototype
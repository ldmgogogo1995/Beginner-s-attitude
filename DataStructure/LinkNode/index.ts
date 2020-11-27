/** 
 * 链表(LinkList)
 * 普通链表是一个离散的数据结构
 * @next 指向下一个节点的指针
 * @value 储存当前节点的值
 * count:记录当前链表长度
 * head:储存头部节点
 * equalsFn(a,b)判断两个节点是否相同
 * push(element):从尾部添加一个节点
*/
const LinkNode = require('./LinkNodeCil')
type NodeType = {
  value: any,
  next: NodeType
}
class LinkList {
  count: number
  head: NodeType | undefined
  constructor() {
    this.count = 0
    this.head = undefined
  }
  equalsFn(a: any, b: any): boolean {
    return a === b
  }
  push(element) {
    const node = new LinkNode(element) //创建一个value为element的节点
  }
}
console.log(LinkList, 'LinkListCil')
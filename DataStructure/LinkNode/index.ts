/** 
 * 链表(LinkList)
 * 普通链表是一个离散的数据结构
 * @next 指向下一个节点的指针
 * @value 储存当前节点的值
 * count:记录当前链表长度
 * head:储存头部节点
 * equalsFn(a,b)判断两个节点是否相同
 * push(element):从尾部添加一个节点
 * remove(element):删除指定节点
 * pop():删除最后一个元素并且返回该节点
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
    //创建一个value为element的节点
    const node = new LinkNode(element);
    //当链表为空链表时只需要给头部赋值就可以了
    if (this.count === 0) {
      this.head = node
    } else {
      let current: NodeType = this.head
      //根据第一个节点一个一个寻找一直找到最后一个节点
      while (current.next !== undefined) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }
  remove(element){

  }
  pop():NodeType{
  
  }
}
const test = new LinkList()
console.log(test, 'LinkListCil')
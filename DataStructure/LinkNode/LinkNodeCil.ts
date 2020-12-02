/** 
 * 普通链表节点Node
 * 存在属性next指向下一节点，value存储当前节点值
*/
namespace LinkChild {
export class Node {
    value: any;
    next: Node | null
    constructor(value: any) {
      this.value = value;
      this.next = undefined;
    }
  }
}

console.log(LinkChild.Node)
module.exports = LinkChild.Node
/** 
 * 普通链表节点Node
 * 存在属性next指向下一节点，value存储当前节点值
*/
namespace LinkChild {
export class Node {
    vlaue: any;
    next: Node | null
    constructor(vlaue: any) {
      this.vlaue = vlaue;
      this.next = undefined;
    }
  }
}

console.log(LinkChild.Node)
module.exports = LinkChild.Node
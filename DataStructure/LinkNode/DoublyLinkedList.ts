/**
 * 双向链表：原本的链表的基础上变成两个链接，一个指向上个元素，一个指向下一个元素
 * @next 指向下一个节点
 * @prev 指向上一个节点
 * @format
 */

const LinkListtools = require('./index')
const LinkNodetools = require('./LinkNodeCil')
const defaultEquals = require('./utils').equalsFn

class DoublyNode extends LinkNodetools {
    constructor(element, next = undefined, prev = undefined) {
        super(element, next)
        this.prev = prev
    }
}
class DoublyLinkedList extends LinkListtools {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = undefined //新增的
    }
    //任意位置插入
    insert(element?: DoublyNode, index?: number) {
        //当index传入正确时
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head;
            this.tail = node;
        } else {

        }
    }

}
const myDoublyLinkedList = new DoublyLinkedList();
console.log(defaultEquals, 'defaultEquals')

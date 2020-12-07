/**
 * 双向链表：原本的链表的基础上变成两个链接，一个指向上个元素，一个指向下一个元素
 *
 * @format
 */

const LinkListtools = require('./index')
const LinkNodetools = require('./LinkNodeCil')
const defaultEquals = require('./utils')

class DoublyNode extends LinkNodetools {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}
class DoubliLinkedList extends LinkListtools {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = undefined //新增的
    }
}

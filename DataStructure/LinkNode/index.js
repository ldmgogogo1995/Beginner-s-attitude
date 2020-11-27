/**
 * 链表(LinkList)
 * 普通链表是一个离散的数据结构
 * @next 指向下一个节点的指针
 * @value 储存当前节点的值
 * count:记录当前链表长度
 * head:储存头部节点
 * push(element):从尾部添加一个节点
*/
var node = require('./LinkNodeCil');
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.count = 0;
        this.head = undefined;
    }
    return LinkList;
}());
console.log(LinkList, 'LinkListCil');

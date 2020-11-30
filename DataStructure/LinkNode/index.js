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
var LinkNode = require('./LinkNodeCil');
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.count = 0;
        this.head = undefined;
    }
    LinkList.prototype.equalsFn = function (a, b) {
        return a === b;
    };
    LinkList.prototype.push = function (element) {
        //创建一个value为element的节点
        var node = new LinkNode(element);
        //当链表为空链表时只需要给头部赋值就可以了
        if (this.count === 0) {
            this.head = node;
        }
        else {
            var current = this.head;
            //根据第一个节点一个一个寻找一直找到最后一个节点
            while (current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    return LinkList;
}());
var test = new LinkList();
test.push(1);
test.push(2);
console.log(test, 'LinkListCil');

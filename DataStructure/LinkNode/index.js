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
 * removeAt(index):删除指定位置
 * pop():删除最后一个元素并且返回该节点
 * getElementAt(index):获取固定位置的元素
 * insert(element,inser):在任意位置插入元素
 * 简单方法，如同栈的 size isEmpty  getHead
 * toString():将对象转为字符串
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
    LinkList.prototype.size = function () {
        return this.count;
    };
    LinkList.prototype.isEmpty = function () {
        return this.count === 0;
    };
    LinkList.prototype.getHead = function () {
        return this.head;
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
    LinkList.prototype.remove = function (element) {
        var current = this.head;
        while (current.next.value !== element) {
            current = current.next;
        }
        current.next = undefined;
        this.count--;
    };
    LinkList.prototype.getElementAt = function (index) {
        if (index >= 0 && index <= this.count) {
            var node = this.head;
            for (var i = 0; i < index && node !== null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };
    LinkList.prototype.insert = function (element, index) {
        if (index >= 0 && index <= this.count) {
            var node = new LinkNode(element);
            if (index === 0) { //添加在第一个位置
                var current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                var previous = this.getElementAt(index - 1);
                var current = previous.next;
                previous.next = node;
                node.next = current;
            }
            this.count++;
            return true;
        }
        return false;
    };
    // pop():NodeType{
    // }
    LinkList.prototype.removeAt = function (position) {
        if (position >= 0 && position < this.count) {
            var current = this.head;
            //移除第一项
            if (position === 0) {
                this.head = current.next;
            }
            else {
                var previous = this.getElementAt(position - 1);
                current = previous.next;
                //精髓所在：两端连接掐断中间
                previous.next = current.next;
            }
            this.count--;
            return current.value;
        }
        return undefined;
    };
    //自己的思路
    // indexOf(element: any): number {
    //   let targetIndex: number = 0
    //   let target: NodeType = this.head
    //   while (target?.value !== element && targetIndex <= this.count + 1) {
    //     target = target?.next
    //     targetIndex++
    //   }
    //   return targetIndex > this.count ? -1 : targetIndex
    // }
    //书本上的思路
    LinkList.prototype.indexOf = function (element) {
        var current = this.head;
        for (var i = 0; i <= this.count && current !== undefined; i++) {
            console.log(i, 'i');
            if (element === current.value) {
                return i;
            }
            current = current.next;
        }
        return -1;
    };
    LinkList.prototype.toString = function () {
        if (this.count === 0) {
            return '';
        }
        var objectString = "" + this.head.value;
        var current = this.head.next;
        for (var i = 0; i <= this.count && current !== undefined; i++) {
            objectString = objectString + "," + current.value;
            current = current.next;
        }
        return objectString;
    };
    return LinkList;
}());
var test = new LinkList();
test.push(0);
test.push(2);
test.push(3);
console.log(test, test.toString(), 'LinkListCil1');

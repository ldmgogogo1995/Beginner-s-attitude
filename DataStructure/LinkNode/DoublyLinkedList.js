/**
 * 双向链表：原本的链表的基础上变成两个链接，一个指向上个元素，一个指向下一个元素
 * @next 指向下一个节点
 * @prev 指向上一个节点
 * @format
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LinkListtools = require('./index');
var LinkNodetools = require('./LinkNodeCil');
var defaultEquals = require('./utils').equalsFn;
var DoublyNode = /** @class */ (function (_super) {
    __extends(DoublyNode, _super);
    function DoublyNode(element, next, prev) {
        var _this = _super.call(this, element, next) || this;
        _this.prev = prev;
        return _this;
    }
    return DoublyNode;
}(LinkNodetools));
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = defaultEquals; }
        var _this = _super.call(this, equalsFn) || this;
        _this.tail = undefined; //新增的
        return _this;
    }
    //任意位置插入
    DoublyLinkedList.prototype.insert = function (element, index) {
        //当index传入正确时
        if (index >= 0 && index <= this.count) {
            console.log(this, 'this');
        }
    };
    return DoublyLinkedList;
}(LinkListtools));
var myDoublyLinkedList = new DoublyLinkedList();
console.log(defaultEquals, 'defaultEquals');

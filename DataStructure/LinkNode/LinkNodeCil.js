/**
 * 普通链表节点Node
 * 存在属性next指向下一节点，value存储当前节点值
*/
var LinkChild;
(function (LinkChild) {
    var Node = /** @class */ (function () {
        function Node(value) {
            this.value = value;
            this.next = undefined;
        }
        return Node;
    }());
    LinkChild.Node = Node;
})(LinkChild || (LinkChild = {}));
console.log(LinkChild.Node);
module.exports = LinkChild.Node;

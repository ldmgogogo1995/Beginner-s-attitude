var StackProperty;
(function (StackProperty) {
    var Stack = /** @class */ (function () {
        function Stack() {
            this.count = 0; //记录当前栈的长度
            this.items = {}; //存放栈内的东西的对象
        }
        Stack.prototype.push = function (element) {
            this.items["" + this.count] = element;
            this.count++;
        };
        Stack.prototype.isEmpty = function () {
            return this.count === 0;
        };
        Stack.prototype.size = function () {
            return this.count;
        };
        Stack.prototype.peek = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            else {
                return this.items["" + (this.count - 1)];
            }
        };
        Stack.prototype.pop = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            this.count--;
            var result = this.items["" + this.count];
            delete this.items["" + this.count];
            return result;
        };
        Stack.prototype.clear = function () {
            // this.items = {}
            // this.count = 0
            while (!this.isEmpty()) {
                this.pop();
            }
        };
        return Stack;
    }());
    StackProperty.Stack = Stack;
})(StackProperty || (StackProperty = {}));
module.exports = StackProperty.Stack;

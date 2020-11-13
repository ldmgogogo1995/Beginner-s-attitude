var Queueprototype;
(function (Queueprototype) {
    var Queue = /** @class */ (function () {
        function Queue() {
            this.count = 0;
            this.lowestCount = 0;
            this.items = {};
        }
        Queue.prototype.enqueue = function (element) {
            this.items["" + this.count] = element;
            this.count++;
        };
        Queue.prototype.dequeue = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            var result = this.items["" + this.lowestCount];
            delete this.items["" + this.lowestCount];
            this.lowestCount++;
            return result;
        };
        Queue.prototype.size = function () {
            return this.count;
        };
        Queue.prototype.isEmpty = function () {
            return this.count === 0;
        };
        Queue.prototype.peek = function () {
            if (this.isEmpty()) {
                return undefined;
            }
            return this.items["" + (this.count - 1)];
        };
        return Queue;
    }());
    Queueprototype.Queue = Queue;
})(Queueprototype || (Queueprototype = {}));
module.exports = Queueprototype;

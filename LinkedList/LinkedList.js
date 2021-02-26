var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.length = 1;
        this.head = new NewNode(value);
        this.tail = this.head;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new NewNode(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    };
    LinkedList.prototype.traverse = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            if (currentNode.next) { // O(1);
                currentNode = currentNode.next;
            }
        }
        return array;
    };
    LinkedList.prototype.pop = function () {
        var _a;
        var currentNode = this.head;
        while ((_a = currentNode.next) === null || _a === void 0 ? void 0 : _a.next) { //check
            console.log(currentNode.value);
            if (currentNode.next) { //O(1);
                currentNode = currentNode.next;
            }
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return this;
    };
    return LinkedList;
}());
var newList = new LinkedList(1);
newList.append(2);
newList.append(3);
newList.append(4);
// newList.reverse();
console.log(newList.traverse());
// newList.pop();
console.log(newList);

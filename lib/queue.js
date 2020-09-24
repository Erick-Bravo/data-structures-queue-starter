// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        if(this.front === null) {
            const node = new Node(value);
            this.front = node;
            this.back = node;
            this.length++;
        } else {
            this._enqueue(value);
        }
        return this.length;
    }

    _enqueue(value) {
        this.next = this.front;
        let val = new Node(value);

        this.front = val;
        val.next = next
        this.length++;
    }

    dequeue() {

    }

    size() {

    }
}

exports.Node = Node;
exports.Queue = Queue;

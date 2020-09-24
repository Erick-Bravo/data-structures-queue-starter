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
        let curr = this.front;
        let val = new Node(value);

        while (curr.next) {
            curr = curr.next
        }
            curr.next = val
            this.back = val
            this.length++;
    }

    dequeue() {
        if(this.length === 0) return null;

        if(this.length === 1) {
            let old = this.front.value

            this.front = null;
            this.back = null;
            this.length--
            return old
        } else {
            let old = this.front.value
            let next = this.front.next

            this.front = next
            this.length--
            return old
        }

    }

    size() {
        return this.length
    }
}

exports.Node = Node;
exports.Queue = Queue;

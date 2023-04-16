const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.root = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.root) {
      this.tail.next = node;
      this.tail = node;

    } else {
      this.root = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    const current = this.root;
    this.root = this.root.next;
    this.length--;

    return current.value;
  }

  getUnderlyingList() {
    return this.root;
  }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList() // returns { value: 3, next: null }

module.exports = {
  Queue
};

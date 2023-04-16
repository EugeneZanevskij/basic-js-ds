const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  push(element) {
    const node = new Node(element);

    if (this.root) {
      node.next = this.root;
      this.root = node;
    } else {
      this.root = node;
    }

    this.length++;
  }

  pop() {
    const current = this.root;
    this.root = this.root.next;
    this.length--;

    return current.value;
  }

  peek() {
    return this.root.value;
  }
}

module.exports = {
  Stack
};

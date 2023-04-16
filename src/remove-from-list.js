const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  const storage = new ListNode(null);
  storage.next = l;
  let prev = storage;
  let curr = l;
  while (curr) {
    if (curr.value === k) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return storage.next;
}

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

// function removeKFromList(l, k) {
//   // Create a storage node as the new head of the linked list
//   const storage = new ListNode(null);
//   storage.next = l;
//   let prev = storage;
//   let curr = l;

//   // Iterate through the linked list and remove nodes with value equal to k
//   while (curr) {
//     if (curr.value === k) {
//       prev.next = curr.next;
//       curr = curr.next;
//     } else {
//       prev = curr;
//       curr = curr.next;
//     }
//   }

//   // Return the head of the modified linked list (excluding nodes with value k)
//   return storage.next;
// }


module.exports = {
  removeKFromList
};

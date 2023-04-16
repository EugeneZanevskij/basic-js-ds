const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    if (!this.head) {
      this.head = new TreeNode(data);
    } else {
      let node = this.head;
      let newNode = new TreeNode(data);
      while (node) {
          if (data > node.data) {
              if (!node.right) {
                  break;
              }
              node = node.right;
          } else {
              if (!node.left) {
                  break;
              }
              node = node.left;
          }
      }
      if (data > node.data) {
          node.right = newNode;
      } else {
          node.left = newNode;
      }
    }
  }

  has(data) {
    let node = this.head;
    while (node) {
        if (data > node.data) {
            if (!node.right) {
                break;
            }
            node = node.right;
        } else if (data < node.data){
            if (!node.left) {
                break;
            }
            node = node.left;
        }
        else return true;
    }
    return false;
  }

  // find(data) — returns node with the data if node with the data exists in the tree and null otherwise
  find(data) {
    let node = this.head;
    while (node) {
        if (data > node.data) {
            if (!node.right) {
                break;
            }
            node = node.right;
        } else if (data < node.data){
            if (!node.left) {
                break;
            }
            node = node.left;
        }
        else return node;
    }
    return null;
  }

  //remove(data) — removes node with the data from the tree if node with the data exists
  remove(data) {
    // let node = this.head;
    // while (node) {
    //     if (data > node.data) {
    //         if (!node.right) {
    //             break;
    //         }
    //         node = node.right;
    //     } else if (data < node.data){
    //         if (!node.left) {
    //             break;
    //         }
    //         node = node.left;
    //     }
    //     else {
    //       if (!node.left && !node.right) {
    //         return;
    //       }
  
    //       if (!node.left) {
    //         node = node.right;
    //         return;
    //       }
  
    //       if (!node.right) {
    //         node = node.left;
    //         return;
    //       }
    //     };
    // }
    // return;
  }

  min() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(3);
tree.add(4);
console.log(tree.has(4));

module.exports = {
  BinarySearchTree
};
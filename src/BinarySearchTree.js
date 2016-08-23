// @flow

class BSNode {
  key: any;
  // val: any;
  left: ?BSNode;
  right: ?BSNode;

  constructor (key) {
    this.key = key;
    // this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: ?BSNode;

  constructor (root: ?any = null) {
    if (root) {
      this.root = new BSNode(root);
    } else {
      this.root = root;
    }
  }

  insert (key: ?BSNode = null): void {
    if (key) {
      var newNode: BSNode = new BSNode(key);

      if (!this.root) {
        this.root = newNode;
      } else {
        this.__appendNode(this.root, newNode);
      }
    }
  }

  __appendNode (node: BSNode, newNode: BSNode): void {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.__appendNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.__appendNode(node.right, newNode);
      }
    }
  }

  search (key: ?any = null): boolean {
    if (!key) return false;

    return this.__searchNode(this.root, key);
  }

  __searchNode (node: ?BSNode, key: any): boolean {
    if (!node) return false;

    if (key < node.key) return this.__searchNode(node.left, key);

    if (key > node.key) return this.__searchNode(node.right, key);

    return true
  }

  traverseInOrder (cb : Function): void {
    if (!cb) return;
    this.__traverseIO(this.root, cb);
  }


  __traverseIO (node: ?BSNode, cb: Function): void {
    if (node) {
      this.__traverseIO(node.left, cb);
      cb(node.key);
      this.__traverseIO(node.right, cb);
    }
  }


  traversePostOrder (cb : Function): void {
    if (!cb) return;
    this.__traversePO(this.root, cb);
  }

  __traversePO (node: ?BSNode, cb: Function): void {
    if (node) {
      this.__traversePO(node.left, cb);
      this.__traversePO(node.right, cb);
      cb(node.key);
    }
  }

  traversePreOrder (cb : Function): void {
    if (!cb) return;
    this.__traversePreO(this.root, cb);
  }

  __traversePreO (node: ?BSNode, cb: Function): void {
    if (node) {
      cb(node.key);
      this.__traversePO(node.left, cb);
      this.__traversePO(node.right, cb);
    }
  }

  min () {

  }

  max () {

  }
}

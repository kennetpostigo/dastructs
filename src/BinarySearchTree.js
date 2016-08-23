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
    if (!cb || !this.root) return;
    this.__traversePreO(this.root, cb);
  }

  __traversePreO (node: ?BSNode, cb: Function): void {
    if (node) {
      cb(node.key);
      this.__traversePO(node.left, cb);
      this.__traversePO(node.right, cb);
    }
    return;
  }

  min (): ?BSNode {
    if (!this.root) return null;
    return this.__minNode(this.root);
  }

  __minNode (node: BSNode): BSNode {
    while (node && node.left) {
      node = node.left;
    }
    return node
  }

  max (): ?BSNode {
    if (!this.root) return null;
    return this.__maxNode(this.root);
  }

  __maxNode (node: BSNode): BSNode {
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }

  remove (key: any): ?BSNode {
    if (!key || !this.root) return null;
    return this.__removeNode(this.root, key);
  }

  __removeNode (node: ?BSNode, key: any): ?BSNode {
    if (!node) return null;

    if (key < node.key){
      node.left = this.__removeNode(node.left, key);
      return node;
    }

    if (key > node.key){
      node.right = this.__removeNode(node.right, key);
      return node;
    }

    if (!node.left && !node.right){
      node = null;
      return node;
    }

    if (!node.left){
      node = node.right;
      return node;
    }

    if (!node.right){
      node = node.left;
      return node;
    }

    var replacement = this.__minNode(node.right);
    node.key = replacement.key;
    node.right = this.__removeNode(node.right, replacement.key);
    return node;
  }
}

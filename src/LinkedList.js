//  @flow

class Node {
  data: ?any
  next: ?Node;
  prev: ?Node;

  constructor (data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  head: ?Node;
  tail: ?Node;
  length: number;
  push: Function;
  pop: Function;
  insert: Function;
  delete: Function;
  indexOf: Function;
  isEmpty: Function;

  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (element: Node): void {
    var newNode: Node = new Node(element);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift (element: Node): void {
    var newNode: Node = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  pop (): ?Node {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let temp = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else if (this.tail) {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.length--;
      return temp;
    }
  }

  shift (): ?Node {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    } else if (this.head) {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  insert (index: number, element: Node): void {
    var current: ?Node = this.get(index);
    if (current) {
      var newNode: Node = new Node(element),
          previous: ?Node = current.prev;
      if (previous) {
        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = current;
        current.prev = newNode;
        this.length++;
      }
    }
  }

  get(index: number): ?Node {
    if (index > 0 && index <= this.length) {
      if (this.head) {
        var current: Node = this.head,
            previous: ?Node,
            pointer: number = 0;
        while(pointer++ <= index) {
          if (pointer === index) {
            return current;
          }
          if (pointer <= index) {
            previous = current;
            if (current.next) current = current.next;
          }
        }
      }
    }
    return null
  }

  delete (index: number): ?Node {
    var current: ?Node = this.get(index);
    if (current) {
      var previous = current.prev,
          next = current.next;
      if (previous && next) {
        previous.next = next;
        next.prev = previous;
        this.length++;
      }
    }
    return null;
  }

  indexOf (value: any): ?number {
    var found: boolean = false,
        index: number = 1;
    if (this.length === 0) return null;
    if (this.head) {
      var current: Node = this.head,
          previous: ?Node;
      while (found === false) {
        if (index > this.length) {
          return null;
        }
        if (current.data === value) {
          found = true;
          return index;
        }
        previous = current;
        if (current.next) current = current.next;
        index++;
      }
    }
  }

  isEmpty (): boolean {
    return this.length === 0;
  }
}

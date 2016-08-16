//  @flow

class QueueNode {
  data: any;
  next: any;

  constructor (data: any) {
    this.data = data;
    this.next = null;
  }
}

export class Queue {
  first: ?QueueNode;
  last: ?QueueNode;
  add: Function;
  remove: Function;
  peek: Function;
  isEmpty: Function;

  constructor () {
    this.first = null,
    this.last = null
  }

  add (item: QueueNode): void {
    var queueElement: QueueNode = new QueueNode(item);
    if (this.last) {
      this.last.next = queueElement;
    }
    this.last = queueElement;
    if (!this.first) {
      this.first = this.last;
    }
  }

  remove (): ?QueueNode {
    if (!this.first) return null;
    var data = this.first.data;
    this.first = this.first.next;
    if(!this.first) this.last = null;
    return data;
  }

  peek (): ?QueueNode {
    if (!this.first) return null;
    return this.first.data;
  }

  isEmpty () {
    return this.first === null;
  }
}

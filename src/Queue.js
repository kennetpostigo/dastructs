//  @flow

class QueueNode {
  data: any;
  next: ?QueueNode;

  constructor (data: any) {
    this.data = data;
    this.next = null;
  }
}

export class Queue {
  first: ?QueueNode;
  last: ?QueueNode;
  length: number;
  enqueue: Function;
  dequeue: Function;
  peek: Function;
  isEmpty: Function;

  constructor () {
    this.length = 0;
    this.first = null,
    this.last = null
  }

  enqueue (element: QueueNode): void {
    var queueElement: QueueNode = new QueueNode(element);
    if (this.last) {
      this.last.next = queueElement;
      this.length++;
      return;
    }
    this.last = queueElement;
    this.length++;
    if (!this.first) {
      this.first = this.last;
    }
  }

  dequeue (): ?QueueNode {
    if (!this.first) return null;
    var temp = this.first.data;
    this.first = this.first.next;
    this.length--;
    if(!this.first) this.last = null;
    return temp;
  }

  peek (): ?QueueNode {
    if (!this.first) return null;
    return this.first.data;
  }

  isEmpty () {
    return this.length === 0;
  }
}

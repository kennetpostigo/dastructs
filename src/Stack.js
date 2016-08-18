//  @flow

class StackNode {
  data: any;
  next: ?StackNode;

  constructor (data: any) {
    this.data = data;
    this.next = null;
  }
}

export class Stack {
  top: ?StackNode;
  length: number;
  next: any;
  pop: Function;
  push: Function;
  peek: Function;
  isEmpty: Function;

  constructor () {
    this.length = 0;
    this.top = null;
  }

  pop (): ?StackNode {
    if (!this.top) return null;
    var temp: any = this.top.data;
    this.top = this.top.next;
    this.length--;
    return temp;
  }

  push (element: StackNode): void {
    var stackElement: StackNode = new StackNode(element);
    stackElement.next = this.top;
    this.top = stackElement;
    this.length++;
  }

  peek (): ?StackNode {
    if (!this.top) return null;
    return this.top.data;
  }

  isEmpty (): boolean {
    return this.length === 0;
  }
}

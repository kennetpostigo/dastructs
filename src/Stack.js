//  @flow

class StackNode {
  data: any;
  next: any;
  constructor (data: any) {
    this.data = data;
    this.next = null;
  }
}

export class Stack {
  top: ?StackNode;
  next: any;
  pop: Function;

  constructor () {
    this.top = null;
  }

  pop (): ?StackNode {
    if (!this.top) return null;
    var item: any = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push (item: StackNode): void {
    var stackElement: StackNode = new StackNode(item);
    stackElement.next = this.top;
    this.top = stackElement;
  }

  peek (): ?any {
    if (!this.top) return null;
    return this.top.data;
  }

  isEmpty (): boolean {
    return this.top === null;
  }
}

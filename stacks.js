class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.top === null) return null;
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;

    const value = this.top.value;
    this.top = this.top.next;

    if (this.length === 1) {
      this.bottom = null;
    }

    this.length--;
    return value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

console.log(myStack.isEmpty());

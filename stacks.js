// monday part 2
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];

    this.length = 0;
  }

  peek() {
    if (this.array === null) return null;
    return this.top;
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
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return holdingPointer;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push("google");
myStack.push("udemy");
myStack.push("discord");

myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack.peek());

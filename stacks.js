class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // View the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Print the stack elements
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: 1,2,3
console.log(stack.pop()); // Output: 3
stack.print(); // Output: 1,2

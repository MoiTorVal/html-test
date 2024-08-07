// Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // points to the next node
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // connects the current last node to 'newNode'
      this.tail = newNode; // updates 'this.tail' to 'newNode', making it the last node
    }

    this.length++;
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  printList() {
    const array = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, data) {
    // Boundary Check
    if (index < 0 || index > this.length) {
      return false;
    }

    // Insertion at the Beginning
    if (index === 0) {
      this.append(data);
      return true;
    }

    // General Insertion Process
    const newNode = new Node(data);

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode = null;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode = null;

    // Traverse to the node at the specified index
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Remove the node at the specified index
    if (index === 0) {
      // Removing the head node
      this.head = currentNode.next;
      if (index === this.length - 1) {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      // Removing the tail node
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      // Removing a node in the middle of the list
      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.data;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.append(1);

console.log(myLinkedList.printList());

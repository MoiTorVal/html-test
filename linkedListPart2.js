class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  insert(index, data) {
    // boundary check
    if (index < 0 || index > this.length) {
      return null;
    }

    // Insertion at the Beginning
    if (index === 0) {
      this.append(data);
      return true;
    }

    // / General Insertion Process
    const newNode = new Node(data);

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode = null;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next; // Move to the next node in the list
      currentIndex++;
    }

    newNode.next = currentNode;
    previousNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    // boundary check
    if (index < 0 || index > this.length) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode = null;

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

  printList() {
    const array = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const linkedlist = new LinkedList();

linkedlist.append(1);
linkedlist.prepend(0);
linkedlist.insert(2, 2);
linkedlist.remove(1);

linkedlist.printList();

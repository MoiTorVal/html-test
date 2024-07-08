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
      return false;
    }

    // Insertion at the Beginning
    if (index === 0) {
      this.append(data);
      return true;
    }
  }

  printList() {
    const array = [];

    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(array, this.length);
  }

  remove(index, data);
}

const linkedlist = new LinkedList();

linkedlist.append(1);
linkedlist.prepend(0);

linkedlist.printList();

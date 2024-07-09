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
      this.tail.next = newNode;
      this.tail = newNode;
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
    let array = [];

    let curNode = this.head;
    while (curNode !== null) {
      array.push(curNode.data);
      curNode = curNode.next;
    }

    return array;
  }
}

const linkedlist = new LinkedList();

linkedlist.append(10);
linkedlist.prepend(1);
linkedlist.prepend(0);
console.log(linkedlist.printList());

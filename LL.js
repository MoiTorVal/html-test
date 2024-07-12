class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null; // new reference point
  }
}

class DoublyLinkedList {
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
      this.prev = this.tail;
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
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  insert(index, data) {
    const newNode = new Node(data);

    if (index < 0 || index > this.length - 1) {
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    let curNode = this.head;
    let curIndex = 0;
    let preNode = null;

    while (curIndex < index) {
      preNode = curNode;
      curNode = curNode.next;
      curIndex++;
    }

    newNode.next = curNode;
    newNode.prev = curNode.prev;
    curNode.prev.next = newNode;
    curNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }

    let curNode = this.head;
    let curIndex = 0;
    let preNode = null;

    while (curIndex < index) {
      preNode = curNode;
      curNode = curNode.next;
      curIndex++;
    }

    // Remove the node at the specified index
    if (index === 0) {
      this.head = curNode.next;
    } else if (index === this.length - 1) {
      preNode.next = null;
      this.tail = preNode;
    } else {
      preNode.next = curNode.next;
    }

    this.length--;
    return curNode.data;
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

const linkedlist = new DoublyLinkedList();

linkedlist.append(0);
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);

linkedlist.remove(1);
console.log(linkedlist.printList());

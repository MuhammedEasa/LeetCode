class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  findMiddle() {
    if (!this.head) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

console.log("Linked List:");
list.display();

const middleElement = list.findMiddle();
console.log("Middle Element:", middleElement);

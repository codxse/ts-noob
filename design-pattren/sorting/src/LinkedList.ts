class Node {
  value: number;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedList {
  head: Node | null = null;

  add(value: number): void {
    const node: Node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail: Node = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length: number = 1;
    let node: Node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter: number = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode: Node = this.at(leftIndex);
    const rightNode: Node = this.at(rightIndex);

    const leftHand: number = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null= this.head;
    while(node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
interface Sortable {
  collection: any;
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  } 

  sort(): void {
    const length: number = this.collection.length;

    for (let i: number = 0; i < length; i++) {
      for (let j: number = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }
      }
    }
  }
}
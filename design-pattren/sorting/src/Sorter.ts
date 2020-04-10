import { NumbersCollection } from "./NumbersCollection";

export class Sorter {
  collection: NumbersCollection;

  constructor(collection: NumbersCollection) {
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
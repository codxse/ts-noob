import { ISorter } from "./ISorter";

export class NumbersCollection extends ISorter {
  collection: number[];

  constructor(collection: number[]) {
    super();
    this.collection = collection;
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand: number = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }
}
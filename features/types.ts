let isOk: boolean = true;
let speed: number = 24;
let myName: string = "Nadiar";
let nothingMuch: null = null;
let dontKnow: undefined = undefined;
let now: Date = new Date();

// aray of string
let names: string[] = ["Nadiar", "Ahmad", "Syaripul"];

// classe
class Car {

}

let car: Car = new Car();

// object literal
let point: { name: string; age: number; } = {
  name: "Nadiar",
  age: 26
}

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}
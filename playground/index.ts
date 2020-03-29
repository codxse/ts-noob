interface Car {
  name: string
  weightInKg: number
}

const car: Car = {
  name: "Mitsubisi 334",
  weightInKg: 1000 
}

function add(val1: number, val2: number): number {
  return val1 + val2;
}

const add2 = (a: number, b: number): number => {
  return a + b
}

// tuple

type Bottle = [string, number, boolean];

const pepsi: Bottle = ["Pepsi", 250, true];

// ==================

interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "Civic 2001",
  year: new Date,
  isBroken: true,
  summary(): string {
    return `${name}`;
  }
}

export {};
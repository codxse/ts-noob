"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numberCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
console.log(numberCollection.collection);
var sorter = new Sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);

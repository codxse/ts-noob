import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersColletion } from "./CharactersCollection";

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numberCollection.collection);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersColletion("nadiar");
console.log(charactersCollection.collection);
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);

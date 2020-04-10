import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersColletion } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numberCollection.collection);
const sorter: Sorter = new Sorter(numberCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection: CharactersColletion = new CharactersColletion("nadiar");
console.log(charactersCollection.collection);
const sorter2: Sorter = new Sorter(charactersCollection);
sorter2.sort();
console.log(sorter2.collection);

const linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(501);
linkedList.add(8);
linkedList.add(13);

const sorter3: Sorter = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
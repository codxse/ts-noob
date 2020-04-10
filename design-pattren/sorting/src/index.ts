import { NumbersCollection } from "./NumbersCollection";
import { CharactersColletion } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numberCollection: NumbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numberCollection.collection);
numberCollection.sort();
console.log(numberCollection.collection);

const charactersCollection: CharactersColletion = new CharactersColletion("nadiar");
console.log(charactersCollection.collection);
charactersCollection.sort();
console.log(charactersCollection.collection);

const linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(501);
linkedList.add(8);
linkedList.add(13);
linkedList.sort();
linkedList.print();
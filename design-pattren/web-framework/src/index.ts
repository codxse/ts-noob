import { User } from "./models/User";

const user: User = new User({
  name: "A",
  age: 17,
});

console.log(user.get("name"));
console.log(user.get("age"));

user.set({
  age: 18,
});

console.log(user.get("name"));
console.log(user.get("age"));
import { User } from "./model/User";
import faker from "faker";
import { Location } from "./model/Location";
import { Company } from "./model/Company";

const user1 : User = new User(
  faker.name.firstName(),
  new Location(
    parseFloat(faker.address.longitude()),
    parseFloat(faker.address.latitude())
  )
);

const company1 : Company = new Company(
  faker.company.companyName(),
  faker.company.catchPhrase(),
  new Location(
    parseFloat(faker.address.longitude()),
    parseFloat(faker.address.latitude())
  )
);



// console.log(user1);
// console.log(company1);

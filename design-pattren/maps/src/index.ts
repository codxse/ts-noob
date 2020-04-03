/// <reference types="@types/googlemaps" />
import { MyMap } from "./MyMap";

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

// const mapEl : Element = document.getElementById('map');
// const mapOpt : google.maps.MapOptions = {
//   zoom: 1,
//   center: {
//     lat: parseFloat(faker.address.latitude()),
//     lng: parseFloat(faker.address.longitude()),
//   }
// };

// new google.maps.Map(mapEl, mapOpt);

const myMap : MyMap = new MyMap();

myMap.addUserMarker(user1);
myMap.addUserMarker(company1);
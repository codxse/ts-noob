import { Location } from "./Location";


export class User {
  public name: string;
  public location: Location;

  constructor(name: string, location: Location) {
    this.name = name;
    this.location = location;
  }
}
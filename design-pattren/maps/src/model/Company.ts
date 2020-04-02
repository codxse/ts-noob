import { Location } from "./Location";

export class Company {
  public name: string;
  public catchPhrase: string;
  public location: Location;

  constructor(name: string, catchPhrase: string, location: Location) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.location = location;
  }
}
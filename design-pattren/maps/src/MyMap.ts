import { Company } from "./model/Company";
import { User } from "./model/User";

export class MyMap {
  private _googleMap: google.maps.Map;

  constructor() {
    this._googleMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    })
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      }      
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      }      
    });
  }

}
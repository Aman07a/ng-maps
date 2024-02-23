import { Company } from './Company';
import { User } from './User';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addUserMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

//   addCompanyMarker(company: Company): void {
//     new google.maps.Marker({
//       map: this.googleMap,
//       position: {
//         lat: company.location.lat,
//         lng: company.location.lng,
//       },
//     });
//   }
}

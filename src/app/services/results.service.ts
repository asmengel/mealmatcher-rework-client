import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ResultsService extends DataService{
 public static results;
  constructor(public http: Http) { 
    // changed from localhost:8080 https://themealmatcher.herokuapp.com
    super( 'https://themealmatcher.herokuapp.com', http);
 
  
  }
// gets pictures from google's database for upcoming feature
  googlePlaces(lat, lng) {
    return this.http.get(`${this.url}/googleplaces?location=${lat},${lng}`)

    .map(response => response.json())

    .catch(this.handleError);
  }
// gets photo curtsey of google
getPhotoUrl(photo) {
  return `${this.url}/placesphoto?photoreference=${photo}`

}
// googlePhoto(photo) {
//   return this.http.get(`${this.url}/placesphoto?photoreference=${photo}`)
//   .map(response => response.json()) 
//   .catch(this.handleError);
// }
// geocode curtsey of google
  geoCode(search) {
    return this.http.get(`${this.url}/geocode?search=${search}`)

    .map(response => response.json())

    .catch(this.handleError);
  }
  // calls db for restaurant data
  searchResults(lat, lng, miles) {
    
    
    return this.http.get(`${this.url}/searchresults?lat=${lat}&lng=${lng}&miles=${miles}`)

    .map(response => response.json())

    .catch(this.handleError);

    
      
  }
  // creates a reservation in my db
  join(id, restaurant) {                                
    return this.http.post(`${this.url}/api/restaurant/reservations/${id}`, JSON.stringify(restaurant) ,this.jwtHandler())
    .map(response => response.json())
    .catch(this.handleError);

  }
  // returns list of users who want to eat at restaurant if user is logged in
  seeGuests(id) {                                   
    return this.http.get(`${this.url}/api/restaurant/info/${id}`, this.jwtHandler())
    .map(response => response.json())
    .catch(this.handleError);

  }
// checks if users want to go to a peticular restaurant
  getReservations(id) {
    return this.http.get(`${this.url}/api/restaurant/reservations/${id}`)
    .map(res => res.json())
    .catch(this.handleError);

  }

}

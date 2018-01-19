import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ResultsService extends DataService{
 public static results;
  constructor(public http: Http) { 
    super( 'http://localhost:8080', http);
 
  
  }

  googlePlaces(lat, lng) {
    console.log('googleplacesservice', lat, lng);
    return this.http.get(`${this.url}/googleplaces?location=${lat},${lng}`)

    .map(response => response.json())

    .catch(this.handleError);
  }
  geoCode(search) {
    return this.http.get(`${this.url}/geocode?search=${search}`)

    .map(response => response.json())

    .catch(this.handleError);
  }

  searchResults(lat, lng, miles) {
    
    
    return this.http.get(`${this.url}/searchresults?lat=${lat}&lng=${lng}&miles=${miles}`)

    .map(response => response.json())

    .catch(this.handleError);

    
      
  }
  join(id, restaurant) {                                   //   /join
    return this.http.post(`${this.url}/api/restaurant/reservations/${id}`, JSON.stringify(restaurant) ,this.jwtHandler())
    .map(response => response.json())
    .catch(this.handleError);

  }
  seeGuests(id) {                                   //   /join
    return this.http.get(`${this.url}/api/restaurant/info/${id}`, this.jwtHandler())
    .map(response => response.json())
    .catch(this.handleError);

  }

  getReservations(id) {
    return this.http.get(`${this.url}/api/restaurant/reservations/${id}`)
    .map(res => res.json())
    .catch(this.handleError);

  }

}

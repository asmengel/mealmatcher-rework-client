import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ResultsService extends DataService{
 public static results;
  constructor(public http: Http) { 
    super( 'http://localhost:8080', http);
 
  
  }
  searchResults(search) {
    
    
    return this.http.get(`${this.url}/searchresults?search=${search}`)

    .map(response => response.json())

    .catch(this.handleError);

    
      
  }
  join(id) {
    return this.http.get(`${this.url}/api/restaurant/join/${id}`, this.jwtHandler())
    .map(response => response.json())
    .catch(this.handleError);

  }

  getReservations(id) {
    return this.http.get(`${this.url}/api/restaurant/reservations/${id}`)
    .map(res => res.json())
    .catch(this.handleError);

  }

}

import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class ResultsService extends DataService{
 
  constructor(public http: Http) { 
    super( 'http://localhost:8080', http);
 
  
  }
  searchResults(search) {
    
    
    return this.http.get(`${this.url}/searchresults?search=${search}`)
    .map(response => response.json())
    .catch(this.handleError);
      
  }

}

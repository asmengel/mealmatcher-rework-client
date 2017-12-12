import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class ResultsService{
 
  constructor(public http: Http) { 

 
  
  }
  getAll() {
    
    let headers = new Headers({"user-key":'37d84524d8363b1117c5be481d714582' })
    let head = new RequestOptions({ headers: headers, method: "get" });
    return this.http
        //  .get('http://localhost:8080/searchresults'
      .get('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=orlando', 
        head
   
      )
  }

}

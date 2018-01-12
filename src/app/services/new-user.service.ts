import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http,  RequestOptions } from '@angular/http';

@Injectable()
export class NewUserService extends DataService {
  headers: any;
  public static user;
  constructor(public http: Http) {
    super('http://localhost:8080', http);
  }

  signUp(data) {
    let options: any = {
      headers: {
        "content-type": "application/json"
      }
    }
    console.log('newuser', data);
    return this.http.post(this.url + "/api/users", JSON.stringify(data), options)
      .map(response => {
        response.json()

      })
      .catch(this.handleError)
}

  
}
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { resolveCname } from 'dns';
@Injectable()
export class NewUserService extends DataService {
  public static user;
  constructor(public http: Http) {
    super('http://localhost:8080', http);
  }

  signUp(data) {
    console.log('newuser', data);
    return this.http.post(this.url + "/api/users", JSON.stringify(data), {
      headers: {
        "content-type": "application/json"
      }
    })
      .map(response => {
        response.json()

      })
      .catch(this.handleError)
}

  
}

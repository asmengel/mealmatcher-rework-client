import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import 'rxjs/add/operator/map'; 

@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http: Http) {
    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

  login(credentials) { 
    let options: any = {
      headers: {
        Authorization: `Basic ${btoa(credentials.username+':'+credentials.password)}`
      }
    }
   return this.http.post('http://localhost:8080/api/auth/login', JSON.stringify(credentials), options)
    .map(response => {
      let result = response.json();
      console.log(result, response);
      if (result && result.authToken) {
        localStorage.setItem('token', result.authToken);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }

  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}


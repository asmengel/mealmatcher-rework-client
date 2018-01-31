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
// makes a call to the backend for login and jwt token creation
// if all is good it stores token for 7 days
// also checks if token is currently present
  login(credentials) { 
    let options: any = {
      headers: {
        Authorization: `Basic ${btoa(credentials.username+':'+credentials.password)}`
      }
    }

   return this.http.post('https://themealmatcher.herokuapp.com/api/auth/login', JSON.stringify(credentials), options)
    .map(response => {
      let result = response.json();
      if (result && result.authToken) {
        localStorage.setItem('token', result.authToken);

        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        return true; 
      }
      else return false; 
    });
  }
// logges out user
  logout() { 
    localStorage.removeItem('token');
    this.currentUser = null;
  }
// checks if logged in
  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}


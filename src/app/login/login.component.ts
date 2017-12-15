import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

    signIn(credentials) {
      this.authService.login(credentials)
      .subscribe(result => {
        console.log(result);
        if (result) 
        this.router.navigate(['/']);
      
        else
        this.invalidLogin = true;
      });
    }

}

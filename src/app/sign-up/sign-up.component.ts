import {MatSnackBar} from '@angular/material';
import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router/';
import { NewUserService } from './../services/new-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
returnUrl: string;
loading = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NewUserService,
    private loginService: AuthService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  signUp(data) {
    //console.log('getting submission', data)
    this.loading = true;
    this.service.signUp(data)
      .subscribe(
      dataSignup => {
        this.loginService.login(data)
        .subscribe(waiting => {
          if(this.returnUrl) {
           // console.log(this.returnUrl);
          this.router.navigateByUrl(this.returnUrl);
          }
          else this.router.navigateByUrl("/thank-you");
        })
       
      },
      error => {
        
        let parsedError = JSON.parse(error.originalError._body);
        this.openSnackBar(`${parsedError.location} ${parsedError.message}`, 'Try Again');
        this.loading = false;
      }
      )
  }
}

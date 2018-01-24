
import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model: any = {};
loading = false;
invalidLogin: boolean;
returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public snackBar: MatSnackBar) { }

    ngOnInit() {

      this.route.params
      .subscribe((params: Params) => {
          this.returnUrl = params.returnUrl
          console.log(params);
        });    
      //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

      //this.authService.logout();

      //console.log(this.route.snapshot)
    }
    signUp() {
     this.router.navigateByUrl("/signup");
    }
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }


    signIn(credentials) {
      this.loading = true;
      this.authService.login(credentials)
      .subscribe(
        data => {
          if(this.returnUrl) {
            //console.log(this.returnUrl);
          this.router.navigateByUrl(this.returnUrl);
          }
          else this.router.navigateByUrl("/");
          
        },
        error => {
          this.openSnackBar('username or password does not match', 'try again');
          console.log(error)
          this.loading = false;
        }
      );

    }
    // signIn(credentials) {
    //   this.authService.login(credentials)
    //   .subscribe(result => {
    //     console.log(result);
    //     if (result) 
    //     this.router.navigate(['/']);
      
    //     else
    //     this.invalidLogin = true;
    //   });
    // }

}


import { AuthService } from './../services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

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
  }
  signUp() {
    this.router.navigateByUrl("/signup");
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  // checks user credentials from submission checks against db and if allowed
  // signs in user, also gives feedback to user if their data does not matche,
  // lastly returns user to where they were before sign in ß
  signIn(credentials) {
    this.loading = true;
    this.authService.login(credentials)
      .subscribe(
      data => {
        if (this.returnUrl) {
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
}

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
    private service: NewUserService) { }

  ngOnInit() {
  }
  signUp(data) {
    console.log('getting submission', data)
    this.loading = true;
    this.service.signUp(data)
      .subscribe(
      data => {
        console.log(this.returnUrl);
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log(error)
        this.loading = false;
      }
      )
  }
}

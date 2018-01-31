import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router
  ) { }
// logs user out
  ngOnInit() {
    this.service.logout();
    this.router.navigateByUrl("/");
  }

}

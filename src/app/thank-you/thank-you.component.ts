import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {

  constructor(
    private router: Router) { }

 goHome() {
   this.router.navigateByUrl("/")
 }

}
